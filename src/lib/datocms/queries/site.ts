import { gql } from 'graphql-request'

import { metaTagsFragment } from '@/lib/datocms/fragments/metaTagsFragment'
// import { responsiveImageFragment } from '@/lib/datocms/fragments/responsiveImageFragment'
import { BANNER_BLOCK_FRAGMENT } from '@/components/blocks/BannerBlock'
import { NAVGATION_BLOCK_FRAGMENT } from '@/components/blocks/NavigationBlock'
import { buttonFragment } from '@/lib/datocms/fragments/buttonFragment'

export const SITE_QUERY = gql`
  ${BANNER_BLOCK_FRAGMENT}
  ${NAVGATION_BLOCK_FRAGMENT}

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
        ...BannerBlockFragment
        ...NavigationBlockFragment
      }
    }
  }
`
