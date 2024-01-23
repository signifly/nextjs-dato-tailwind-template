import { gql } from 'graphql-request'

export const metaTagsFragment = gql`
  fragment metaTagsFragment on Tag {
    attributes
    content
    tag
  }
`
