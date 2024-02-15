import { FeaturesSectionRecord } from '@/types/generated'
import { gql } from 'graphql-request'
import { Image as DatoImage } from 'react-datocms'
import { Icon } from '@/components/Icon'

export const FEATURES_SECTION_FRAGMENT = gql`
  fragment FeaturesSectionFragment on FeaturesSectionRecord {
    id
    _modelApiKey
    title
    subTitleLarge
    subTitleSmall
    image {
      responsiveImage(imgixParams: { auto: format }) {
        ...responsiveImageFragment
      }
    }
    features {
      id
      name
      description
      icon {
        ...iconFragment
      }
    }
  }
`

export function FeaturesSection(props: FeaturesSectionRecord) {
  const { title, subTitleLarge, subTitleSmall, image, features } = props

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-lg font-semibold leading-7 text-primary">
            {title}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {subTitleLarge}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {subTitleSmall}
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {image?.responsiveImage && (
            <DatoImage
              data={image?.responsiveImage}
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
          )}
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <Icon
                  {...feature.icon}
                  aria-hidden
                  className="absolute left-1 top-1 h-5 w-5 text-primary"
                />
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
