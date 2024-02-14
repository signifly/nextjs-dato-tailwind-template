import Image from 'next/image'
import { Image as DatoImage } from 'react-datocms'
import { gql } from 'graphql-request'
import { LogoCloudSectionRecord } from '@/types/generated'

export const LOGO_CLOUD_SECTION_FRAGMENT = gql`
  fragment LogoCloudSectionFragment on LogoCloudSectionRecord {
    id
    _modelApiKey
    logos {
      id
      url
      alt
      responsiveImage(imgixParams: { auto: format }) {
        ...responsiveImageFragment
      }
    }
  }
`

export function LogoCloudSection(props: LogoCloudSectionRecord) {
  const { logos } = props

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logos.map((logo) => {
            return logo.responsiveImage ? (
              <DatoImage
                key={logo.id}
                data={logo.responsiveImage}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
            ) : (
              <Image
                key={logo.id}
                src={logo.url}
                alt={logo.alt ?? ''}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
            )
          })}
        </div>
        <div className="mt-16 flex justify-center">
          <p className="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
            <span className="hidden md:inline">
              Over 2500 companies use our tools to better their business.
            </span>
            <a href="#" className="font-semibold text-primary">
              <span className="absolute inset-0" aria-hidden="true" /> Read our
              customer stories <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
