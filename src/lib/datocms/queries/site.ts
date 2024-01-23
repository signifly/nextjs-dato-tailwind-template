import { gql } from 'graphql-request'

import { metaTagsFragment } from '@/lib/datocms/fragments/metaTagsFragment'
// import { responsiveImageFragment } from '@/lib/datocms/fragments/responsiveImageFragment'
import { BANNER_BLOCK_FRAGMENT } from '@/components/blocks/BannerBlock'

export const SITE_QUERY = gql`
  ${BANNER_BLOCK_FRAGMENT}

  ${metaTagsFragment}

  query SiteQuery($locale: SiteLocale) {
    site: _site(locale: $locale) {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    header {
      name
      blocks {
        ...BannerBlockFragment
      }
    }
  }
`
