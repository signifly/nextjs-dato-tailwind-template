import { gql } from 'graphql-request'

import { metaTagsFragment } from '@/lib/datocms/fragments/metaTagsFragment'
import { responsiveImageFragment } from '@/lib/datocms/fragments/responsiveImageFragment'

export const HOME_PAGE_QUERY = gql`
  ${metaTagsFragment}
  ${responsiveImageFragment}

  query HomePageQuery($locale: SiteLocale) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    homePage(locale: $locale) {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
      title
    }
    allPosts(orderBy: date_DESC, first: 20) {
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
`
