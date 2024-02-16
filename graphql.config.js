require('dotenv').config({ path: '.env.local' })

module.exports = {
  schema: [
    {
      'https://graphql.datocms.com': {
        headers: {
          Authorization: `Bearer ${process.env.DATOCMS_READ_ONLY_API_TOKEN}`,
          'X-Exclude-Invalid': true,
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
