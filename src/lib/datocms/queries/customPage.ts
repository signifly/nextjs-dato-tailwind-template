import { gql } from 'graphql-request'

import { metaTagsFragment } from '@/lib/datocms/fragments/metaTagsFragment'
import { buttonFragment } from '../fragments/buttonFragment'
import { responsiveImageFragment } from '@/lib/datocms/fragments/responsiveImageFragment'
import { HERO_SECTION_FRAGMENT } from '@/components/blocks/HeroSection/HeroSection'
import { PAGE_HEADER_SECTION_FRAGMENT } from '@/components/blocks/PageHeaderSection/PageHeaderSection'
import { PRODUCT_LIST_SECTION_FRAGMENT } from '@/components/blocks/ProductListSection/ProductListSection'
import { CATEGORY_PREVIEW_SECTION_FRAGMENT } from '@/components/blocks/CategoryPreviewSection/CategoryPreviewSection'

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
        ...PageHeaderSectionFragment
				...ProductListSectionFragment
				...CategoryPreviewSectionFragment
      }
    }
  }

  ${HERO_SECTION_FRAGMENT}
  ${PAGE_HEADER_SECTION_FRAGMENT}
	${PRODUCT_LIST_SECTION_FRAGMENT}
	${CATEGORY_PREVIEW_SECTION_FRAGMENT}

  ${metaTagsFragment}
  ${responsiveImageFragment}
  ${buttonFragment}
`
