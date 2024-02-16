import { gql } from 'graphql-request'

import { metaTagsFragment } from '@/lib/datocms/fragments/metaTagsFragment'
import { buttonFragment } from '../fragments/buttonFragment'
import { iconFragment } from '@/lib/datocms/fragments/iconFragment'
import { responsiveImageFragment } from '@/lib/datocms/fragments/responsiveImageFragment'
import { HERO_SECTION_FRAGMENT } from '@/components/blocks/HeroSection/HeroSection'
import { PAGE_HEADER_SECTION_FRAGMENT } from '@/components/blocks/PageHeaderSection/PageHeaderSection'
import { LOGO_CLOUD_SECTION_FRAGMENT } from '@/components/blocks/LogoCloudSection/LogoCloudSection'
import { FEATURES_SECTION_FRAGMENT } from '@/components/blocks/FeaturesSection/FeaturesSection'
import { TESTIMONIAL_SECTION_FRAGMENT } from '@/components/blocks/TestimonialSection/TestimonialSection'
import { FAQ_SECTION_FRAGMENT } from '@/components/blocks/FaqSection/FaqSection'
import { CTA_SECTION_FRAGMENT } from '@/components/blocks/CtaSection/CtaSection'

export const HOME_PAGE_QUERY = gql`
  query HomePageQuery($locale: SiteLocale) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    page: homePage(locale: ${'$locale'}) {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
      title
      sections {
        ...HeroSectionFragment
        ...PageHeaderSectionFragment
        ...LogoCloudSectionFragment
        ...FeaturesSectionFragment
        ...TestimonialSectionFragment
        ...FaqSectionFragment
        ...CtaSectionFragment
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
  ${PAGE_HEADER_SECTION_FRAGMENT}
  ${LOGO_CLOUD_SECTION_FRAGMENT}
  ${FEATURES_SECTION_FRAGMENT}
  ${TESTIMONIAL_SECTION_FRAGMENT}
  ${FAQ_SECTION_FRAGMENT}
  ${CTA_SECTION_FRAGMENT}

  ${metaTagsFragment}
  ${responsiveImageFragment}
  ${buttonFragment}
  ${iconFragment}
`
