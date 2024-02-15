import { gql } from 'graphql-request'

import { metaTagsFragment } from '@/lib/datocms/fragments/metaTagsFragment'
import { buttonFragment } from '../fragments/buttonFragment'
import { responsiveImageFragment } from '@/lib/datocms/fragments/responsiveImageFragment'
import { HERO_SECTION_FRAGMENT } from '@/components/blocks/HeroSection/HeroSection'
import { PAGE_HEADER_SECTION_FRAGMENT } from '@/components/blocks/PageHeaderSection/PageHeaderSection'

export const PRODUCT_BY_SLUG_QUERY = gql`
  query ProductBySlugQuery($locale: SiteLocale, $slug: String) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    page: product(locale: ${'$locale'}, filter: { slug: { eq: ${'$slug'} } }) {
      slug
      title
      subTitle
      image {
        responsiveImage(imgixParams: { auto: format }) {
          ...responsiveImageFragment
        }
      }
      template: pageTemplate {
        title
        sections {
          ...HeroSectionFragment
          ...PageHeaderSectionFragment
        }
      }
    }
  }

  ${HERO_SECTION_FRAGMENT}
  ${PAGE_HEADER_SECTION_FRAGMENT}

  ${buttonFragment}
  ${metaTagsFragment}
  ${responsiveImageFragment}
`
