import { gql } from 'graphql-request'

import { metaTagsFragment } from '@/lib/datocms/fragments/metaTagsFragment'
// import { responsiveImageFragment } from '@/lib/datocms/fragments/responsiveImageFragment'
import { BANNER_SECTION_FRAGMENT } from '@/components/blocks/BannerSection/BannerSection'
import { NAVIGATION_SECTION_FRAGMENT } from '@/components/blocks/NavigationSection/NavigationSection'
import { buttonFragment } from '@/lib/datocms/fragments/buttonFragment'

export const SITE_QUERY = gql`
  ${BANNER_SECTION_FRAGMENT}
  ${NAVIGATION_SECTION_FRAGMENT}

  ${buttonFragment}
  ${metaTagsFragment}

  query SiteQuery($locale: SiteLocale) {
    site: _site(locale: $locale) {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    header(locale: $locale) {
      name
      blocks {
        ...BannerSectionFragment
        ...NavigationSectionFragment
      }
    }
  }
`
