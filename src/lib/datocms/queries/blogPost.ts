import { gql } from 'graphql-request'

import { metaTagsFragment } from '@/lib/datocms/fragments/metaTagsFragment'
import { responsiveImageFragment } from '@/lib/datocms/fragments/responsiveImageFragment'

export const POST_BY_SLUG_QUERY = gql`
  query PostBySlugQuery($slug: String) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    post(filter: { slug: { eq: $slug } }) {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
      title
      slug
      content {
        value
        blocks {
          __typename
          ... on ImageBlockRecord {
            id
            image {
              responsiveImage(
                imgixParams: { fm: jpg, fit: crop, w: 2000, h: 1000 }
              ) {
                ...responsiveImageFragment
              }
            }
          }
        }
      }
      date
      ogImage: coverImage {
        url(imgixParams: { fm: jpg, fit: crop, w: 2000, h: 1000 })
      }
      coverImage {
        responsiveImage(imgixParams: { fm: jpg, fit: crop, w: 2000, h: 1000 }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
        picture {
          responsiveImage(
            imgixParams: { fm: jpg, fit: crop, w: 100, h: 100, sat: -100 }
          ) {
            ...responsiveImageFragment
          }
        }
      }
    }

    morePosts: allPosts(
      orderBy: date_DESC
      first: 2
      filter: { slug: { neq: $slug } }
    ) {
      title
      slug
      excerpt
      date
      coverImage {
        responsiveImage(imgixParams: { fm: jpg, fit: crop, w: 2000, h: 1000 }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
        picture {
          responsiveImage(
            imgixParams: { fm: jpg, fit: crop, w: 100, h: 100, sat: -100 }
          ) {
            ...responsiveImageFragment
          }
        }
      }
    }
  }

  ${responsiveImageFragment}
  ${metaTagsFragment}
`
