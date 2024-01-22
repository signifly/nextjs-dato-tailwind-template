import {
  metaTagsFragment,
  responsiveImageFragment,
} from '@/lib/datocms/fragments'
import { BANNER_BLOCK_FRAGMENT } from '@/components/blocks/BannerBlock'

export const SITE_QUERY = `
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

	${BANNER_BLOCK_FRAGMENT}

  ${metaTagsFragment}
`
