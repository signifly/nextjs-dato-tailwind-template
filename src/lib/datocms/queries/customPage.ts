import { gql } from 'graphql-request'

import { metaTagsFragment } from '@/lib/datocms/fragments/metaTagsFragment'
import { buttonFragment } from '../fragments/buttonFragment'
import { responsiveImageFragment } from '@/lib/datocms/fragments/responsiveImageFragment'
import { HERO_SECTION_FRAGMENT } from '@/components/blocks/HeroSection/HeroSection'

export const PAGE_BY_SLUG_QUERY = gql`
  query PageBySlugQuery($locale: SiteLocale, $slug: String) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    page: customPage(
			locale: ${'$locale'}, 
			filter: { slug: { eq: ${'$slug'} } }
		) 
		{
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
      title
      sections {
        ...HeroSectionFragment
      }
    }
  }
	${HERO_SECTION_FRAGMENT}

  ${metaTagsFragment}
  ${responsiveImageFragment}
  ${buttonFragment}
`
