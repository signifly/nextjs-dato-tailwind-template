require('dotenv').config({ path: '.env.local' })

module.exports = {
  schema: [
    {
      'https://graphql.datocms.com': {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_DATOCMS_READ_ONLY_API_TOKEN}`,
          // 'X-Exclude-Invalid': true,
          /* The above header param can be used to make sure required fields
           * are not generated as nullable. However, this might cause issues
           * with type generation if two or more blocks share the same field
           * name. For more information, see:
           * https://github.com/dotansimha/graphql-code-generator/issues/2781 */
        },
      },
    },
  ],
  documents: ['./src/**/*'],
  generates: {
    './src/types/generated.ts': {
      plugins: [
        'typescript',
        {
          'typescript-operations': {
            strictScalars: true,
            scalars: {
              BooleanType: 'boolean',
              CustomData: 'Record<string, unknown>',
              Date: 'string',
              DateTime: 'string',
              FloatType: 'number',
              IntType: 'number',
              ItemId: 'string',
              JsonField: 'unknown',
              MetaTagAttributes: 'Record<string, string>',
              UploadId: 'string',
            },
          },
        },
        'typed-document-node',
      ],
    },
  },
}
