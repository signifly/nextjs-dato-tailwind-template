import { gql } from 'graphql-request'

import { metaTagsFragment } from '@/lib/datocms/fragments/metaTagsFragment'
import { buttonFragment } from '../fragments/buttonFragment'
import { responsiveImageFragment } from '@/lib/datocms/fragments/responsiveImageFragment'
import { HERO_SECTION_FRAGMENT } from '@/components/blocks/HeroSection'

export const HOME_PAGE_QUERY = gql`
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
      sections {
        ...HeroSectionFragment
      }
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

  ${HERO_SECTION_FRAGMENT}

  ${metaTagsFragment}
  ${responsiveImageFragment}
  ${buttonFragment}
`
