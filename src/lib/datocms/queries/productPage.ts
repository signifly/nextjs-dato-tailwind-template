import { gql } from 'graphql-request'

import { metaTagsFragment } from '@/lib/datocms/fragments/metaTagsFragment'
import { buttonFragment } from '../fragments/buttonFragment'
import { responsiveImageFragment } from '@/lib/datocms/fragments/responsiveImageFragment'

export const PRODUCT_BY_SLUG_QUERY = gql`
  query ProductBySlugQuery($locale: SiteLocale, $slug: String) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    page: product(locale: ${'$locale'}, filter: { slug: { eq: ${'$slug'} } }) {
      name
      slug
			price
     	colorDescription 
			description
			reviewAverage
			totalReviews
      image {
        responsiveImage(imgixParams: { auto: format }) {
          ...responsiveImageFragment
        }
      }
    }
  }

  ${metaTagsFragment}
  ${responsiveImageFragment}
`
