import {
  existsSync,
  mkdirSync,
  writeFile,
  writeFileSync,
  readFileSync,
} from 'fs'
import * as dotenv from 'dotenv'
import { buildClient, LogLevel } from '@datocms/cma-client-node'
import dedent from 'dedent'
import inquirer from 'inquirer'
import chalk from 'chalk'

dotenv.config({ path: `.env.local` })

const { NEXT_DATOCMS_API_TOKEN } = process.env
const BASE_DIR_PATH = './src/components/blocks'
const GOODBYE_MESSAGE = 'Thanks for using the new-block script. Goodbye!'
let originalInput = []
const overwriteArr = []
const createdArr = []
const datoModelCreatedArr = []
main()

/****************************************
 * MAIN FUNCTION
 ****************************************/

async function main() {
  try {
    const answers = await inquirer.prompt([
      {
        name: 'actions',
        message: 'What would you like to do?',
        type: 'list',
        choices: [
          'Create new block(s)',
          'Create new DatoCMS model(s) for existing block(s)',
          new inquirer.Separator(),
          'Exit',
        ],
        default: 'Create new block(s)',
      },
    ])
    switch (answers.actions) {
      case 'Create new block(s)':
        askForBlockNamesAndInvokeCallBack(generateFiles)
        break
      case 'Create new DatoCMS model(s) for existing block(s)':
        askForBlockNamesAndInvokeCallBack(generateDatoBlocks)
        break
      case 'Exit':
        goodBye()
        break
    }
  } catch (error) {
    if (error.isTtyError) {
      printError(
        "[ ERROR ]: Prompt couldn't be rendered in the current environment",
      )
    } else {
      printError(`[ ERROR ]: ${error}`)
    }
  }
}

/****************************************
 * GENERATE LOCAL FILES
 ****************************************/

async function generateFiles(namesArr) {
  const copyArr = [...namesArr]
  if (copyArr.length > 0) {
    const name = sanitizeName(copyArr.shift())
    const PascalCaseName = convertToPascalCase(name)
    const UpperSnakeCaseName = convertToSnakeCase(name).toUpperCase()
    const dirPath = `${BASE_DIR_PATH}/${PascalCaseName}`
    if (!existsSync(dirPath)) {
      mkdirSync(dirPath, { recursive: true })
    }

    const files = [
      {
        id: 'index',
        path: `${dirPath}/${PascalCaseName}.tsx`,
        content: dedent`
				import React from 'react'
				import { gql } from 'graphql-request'
				import { ${PascalCaseName}Record } from '@/types/generated'

				// @todo: complete gql query for ${PascalCaseName}
				export const ${UpperSnakeCaseName}_FRAGMENT = gql\`
					fragment ${PascalCaseName}Fragment on ${PascalCaseName}Record {
						id
						_modelApiKey
					}
				\`

				// @todo: develop block ${PascalCaseName}
				export const ${PascalCaseName} = (props: ${PascalCaseName}Record) => {
					return <div className={styles.${PascalCaseName}}>${PascalCaseName}</div>
				}
			`,
      },
    ]

    for (const file of files) {
      writeFile(file.path, file.content, { flag: 'wx' }, async (err) => {
        if (err && err.code === 'EEXIST') {
          const { overwrite } = await inquirer.prompt([
            {
              name: 'overwrite',
              message: `File ${file.path} already exists. Overwrite?`,
              type: 'confirm',
            },
          ])
          if (overwrite) {
            overwriteFile(file.path, file.content, name)
          }
          generateFiles(copyArr)
        } else {
          createdArr.push(name)
          updateComponentsMap(name)
          generateFiles(copyArr)
        }
      })
    }
  } else if (createdArr.length > 0) {
    const { createDatoModels } = await inquirer.prompt([
      {
        name: 'createDatoModels',
        message:
          'Would you like to create DatoCMS models for newly created blocks?',
        type: 'confirm',
        default: true,
      },
    ])
    if (createDatoModels) {
      generateDatoBlocks(createdArr)
    } else {
      printSuccess(dedent`
				[ SUCCESS ]: All local files processed.
					| Created ${createdArr.length} files: ${createdArr.join(', ')}
					| Overwritten ${overwriteArr.length} files.
					| Total proccesed ${createdArr.length + overwriteArr.length} files.
					| Updated componentsMap.ts with newly created files
			`)
      printInfo(
        `[ INFO ]: You can now create DatoCMS models manually or by running the script again and selecting "Create new DatoCMS model(s) for existing block(s)" option.`,
      )
      printWarn(
        `[ WARN ]: Don't forget to add the block reference in your parent model and fragment(s) to your queries!`,
      )
      goodBye()
    }
  } else {
    printSuccess(dedent`
			[ SUCCESS ]: All local files processed.
				| Created ${createdArr.length} files: ${createdArr.join(', ')}
				| Overwritten ${overwriteArr.length} files.
				| Total proccesed ${createdArr.length + overwriteArr.length} files.
				| Updated componentsMap.ts with newly created files
		`)
    printWarn(
      `[ WARN ]: Don't forget to add the block reference in your parent model and fragment(s) to your queries!`,
    )
    goodBye()
  }
}

/****************************************
 * GENERATE DATOCMS MODELS
 ****************************************/

async function generateDatoBlocks(sanitizedNameArr) {
  if (sanitizedNameArr.length > 0) {
    const name = sanitizedNameArr.shift()
    // convert sanitizedName to human-readable block name Ex: 'my-new-block' => 'My New Block'
    const blockName = name
      ? sanitizeName(name)
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      : ''
    const client = buildClient({
      apiToken: NEXT_DATOCMS_API_TOKEN,
      logLevel: LogLevel.BASIC, // 'NONE' | 'BASIC' | 'BODY' | 'BODY_AND_HEADERS'
    })

    printInfo(`[ INFO ]: Generating DatoCMS model for ${blockName}...`)
    const { name: nameInput } = await inquirer.prompt([
      {
        name: 'name',
        message:
          'Enter block name (singular, Ex: "Hero Block" insted of "Hero Blocks")',
        type: 'input',
        default: blockName,
      },
    ])
    const options = await inquirer.prompt([
      {
        name: 'api_key',
        message: 'Enter model API key',
        type: 'input',
        default: blockName.split(' ').join('_').toLowerCase(),
      },
      {
        name: 'hint',
        message: 'Enter block description to be shown to editors',
        type: 'input',
      },
    ])

    // @todo: create DatoCMS model
    const model = await client.itemTypes.create({
      ...options,
      name: nameInput,
      modular_block: true,
    })
    console.log(model)

    generateDatoBlocks(sanitizedNameArr)
  } else {
    printSuccess(dedent`
			[ SUCCESS ]: All local files processed.
				| Created ${createdArr.length} files.
				| Overwritten ${overwriteArr.length} files.
				| Total proccesed ${createdArr.length + overwriteArr.length} files.
				| Updated componentsMap.ts with newly created files
		`)
    printWarn(
      `[ WARN ]: Don't forget to add the block reference in your parent model and fragment(s) to your queries!`,
    )
    goodBye()
  }
}

/****************************************
 * HELPER FUNCTIONS
 ****************************************/

function printError(message) {
  console.log(chalk.bgRed.black.bold(message))
}

function printSuccess(message) {
  console.log(chalk.green(message))
}

function printInfo(message) {
  console.log(chalk.blue(message))
}

function printWarn(message) {
  console.log(chalk.bgYellow.black.bold(message))
}

function goodBye() {
  console.log(GOODBYE_MESSAGE)
  return process.exit(0)
}

function sanitizeName(name) {
  // split at uppercase letters, special characters, and spaces
  const words = name.split(/(?=[A-Z])|[^a-zA-Z0-9]/)
  return words
    .map((word) => word.toLowerCase())
    .filter(Boolean)
    .join('-')
    .replace(/[^a-zA-Z0-9-]/g, '')
}

function convertToPascalCase(sanitizedName) {
  return sanitizedName
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

function convertToSnakeCase(sanitizedName) {
  return sanitizedName.split('-').join('_')
}

async function askForBlockNamesAndInvokeCallBack(callBack) {
  const answers = await inquirer.prompt([
    {
      name: 'name',
      message:
        'Enter block names (multiple names should be separated by a comma)',
      type: 'input',
    },
  ])

  if (!answers.name) {
    printError('[ ERROR ]: At least one(1) block name is required')
    askForBlockNamesAndInvokeCallBack(callBack)
  } else {
    const namesArr = answers.name.split(',')
    originalInput = namesArr
    callBack(namesArr)
  }
}

function overwriteFile(path, content, sanitizedName) {
  writeFile(path, content, (err) => {
    if (err) {
      throw err
    } else {
      overwriteArr.push(sanitizedName)
    }
  })
}

function updateComponentsMap(sanitizedName) {
  const PascalCaseName = convertToPascalCase(sanitizedName)
  const snakeCaseName = convertToSnakeCase(sanitizedName)
  const fileData = readFileSync('./src/lib/datocms/componentsMap.ts', 'utf8')

  // create a new import statement
  const newImports = dedent`
		import { ${PascalCaseName} } from '@/components/blocks/${PascalCaseName}/${PascalCaseName}'\n
	`
  // append a new entry to the componentsMap
  const lastCurlyBrace = fileData.lastIndexOf('}')

  const newData =
    newImports +
    fileData.slice(0, lastCurlyBrace) +
    `  ${snakeCaseName}: ${PascalCaseName},\n` +
    fileData.slice(lastCurlyBrace)

  writeFileSync('./src/lib/datocms/componentsMap.ts', newData, (err) => {
    if (err) {
      throw err
    }
  })
}
