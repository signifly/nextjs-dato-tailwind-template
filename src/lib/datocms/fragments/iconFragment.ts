import { gql } from 'graphql-request'

export const iconFragment = gql`
  fragment iconFragment on IconRecord {
    id
    _modelApiKey
    name
  }
`
