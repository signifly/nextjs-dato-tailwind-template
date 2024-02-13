import { existsSync, mkdirSync, writeFile, readFileSync } from 'fs'
import inquirer from 'inquirer'
import dedent from 'dedent'
import * as dotenv from 'dotenv'

dotenv.config({ path: `.env.local` })

const { NEXT_DATOCMS_API_TOKEN } = process.env
const BASE_DIR_PATH = './src/components/blocks'

/****************************************
 * MAIN FUNCTION
 ****************************************/

async function main() {
  try {
    inquirer
      .prompt([
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
      .then((answers) => {
        if (answers.actions === 'Create new block(s)') {
          generateNewBlocks()
        }
        if (
          answers.actions ===
          'Create new DatoCMS model(s) for existing block(s)'
        ) {
          generateDatoModels()
        }
        if (answers.actions === 'Exit') {
          console.log('Thanks for using the new-block script. Goodbye!')
          return process.exit(0)
        }
      })
  } catch (error) {
    if (error.isTtyError) {
      console.log(
        "[ ERROR ]: Prompt couldn't be rendered in the current environment",
      )
    } else {
      console.log(`[ ERROR ]: ${error}`)
    }
  }
}

main()

/****************************************
 * HELPER FUNCTIONS
 ****************************************/

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

function generateNewBlocks() {
  inquirer
    .prompt([
      {
        name: 'name',
        message:
          'Enter block names (multiple names should be separated by a comma)',
        type: 'input',
      },
    ])
    .then((answers) => {
      const namesArr = answers.name.split(',')
      for (const name of namesArr) {
        const sanitizedName = sanitizeName(name)
        generateFiles(sanitizedName)
      }
    })
}

function generateFiles(sanitizedName) {
  const PascalCaseName = convertToPascalCase(sanitizedName)
  const UpperSnakeCaseName = convertToSnakeCase(sanitizedName).toUpperCase()
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
    writeFile(file.path, file.content, { flag: 'wx' }, (err) => {
      if (err && err.code === 'EEXIST') {
        overwriteFile(file.path, file.content, sanitizedName)
      } else {
        updateComponentsMap(sanitizedName)
      }
    })
  }
}

function overwriteFile(path, content, sanitizedName) {
  inquirer
    .prompt([
      {
        name: 'overwrite',
        message: `File ${file.path} already exists. Overwrite?`,
        type: 'confirm',
      },
    ])
    .then((answers) => {
      if (answers.overwrite) {
        writeFile(path, content, (err) => {
          if (err) {
            throw err
          } else {
            updateComponentsMap(sanitizedName)
          }
        })
      }
    })
}

function updateComponentsMap(sanitizedName) {
  const PascalCaseName = convertToPascalCase(sanitizedName)
  const snakeCaseName = convertToSnakeCase(sanitizedName)
  const data = readFileSync('./src/lib/datocms/componentsMap.ts', 'utf8')

  // create a new import statement
  const newImports = dedent`
		import { ${PascalCaseName} } from '@/components/blocks/${PascalCaseName}/${PascalCaseName}'\n
	`
  // append a new entry to the componentsMap
  const lastCurlyBrace = data.lastIndexOf('}')

  const newData =
    newImports +
    data.slice(0, lastCurlyBrace) +
    `  ${snakeCaseName}: ${PascalCaseName},\n` +
    data.slice(lastCurlyBrace)

  writeFile('./src/lib/datocms/componentsMap.ts', newData, (err) => {
    if (err) {
      throw err
    }
  })
}

function generateDatoModels() {
  inquirer
    .prompt([
      {
        name: 'blockName',
        message: 'Enter block name',
        type: 'input',
      },
    ])
    .then((answers) => {
      console.log(answers)
    })
}
