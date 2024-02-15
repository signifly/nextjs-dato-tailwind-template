import { gql } from 'graphql-request'

import { metaTagsFragment } from '@/lib/datocms/fragments/metaTagsFragment'
import { buttonFragment } from '../fragments/buttonFragment'
import { responsiveImageFragment } from '@/lib/datocms/fragments/responsiveImageFragment'
import { HERO_SECTION_FRAGMENT } from '@/components/blocks/HeroSection/HeroSection'
import { PAGE_HEADER_SECTION_FRAGMENT } from '@/components/blocks/PageHeaderSection/PageHeaderSection'

export const PAGE_BY_SLUG_QUERY = gql`
  query PageBySlugQuery($locale: SiteLocale) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    page: customPage(locale: ${'$locale'}) {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
      title
      sections {
        ...HeroSectionFragment
        ...PageHeaderSectionFragment
      }
    }
  }

  ${HERO_SECTION_FRAGMENT}
  ${PAGE_HEADER_SECTION_FRAGMENT}

  ${metaTagsFragment}
  ${responsiveImageFragment}
  ${buttonFragment}
`
