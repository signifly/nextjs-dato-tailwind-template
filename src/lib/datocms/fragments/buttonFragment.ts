import { gql } from 'graphql-request'

export const buttonFragment = gql`
  fragment buttonFragment on ButtonRecord {
    id
    _modelApiKey
    label
    variant
    size
    useExternalLink
    linkTo {
      ... on BlogRecord {
        id
        _modelApiKey
      }
      ... on PostRecord {
        id
        _modelApiKey
      }
    }
    externalLink
  }
`
