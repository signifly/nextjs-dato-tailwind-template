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
    textWithLinkHighlight
  }
`

export function LogoCloudSection(props: LogoCloudSectionRecord) {
  const { logos, textWithLinkHighlight } = props

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
        <div
          className="mt-16 flex justify-center [&_a]:font-semibold [&_a]:text-primary [&_p]:relative [&_p]:rounded-full [&_p]:bg-gray-50 [&_p]:px-4 [&_p]:py-1.5 [&_p]:text-sm [&_p]:leading-6 [&_p]:text-gray-600 [&_p]:ring-1 [&_p]:ring-inset [&_p]:ring-gray-900/5"
          dangerouslySetInnerHTML={{ __html: textWithLinkHighlight }}
        />
      </div>
    </div>
  )
}
