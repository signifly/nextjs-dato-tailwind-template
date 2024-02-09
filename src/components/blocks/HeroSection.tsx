import { Container } from '@/components/Container'
import { TypographyH1 } from '@/components/typography'
import { SmartButton } from '@/components/SmartButton'
import { HeroSectionRecord } from '@/types/generated'
import { Image } from 'react-datocms'
import { gql } from 'graphql-request'

export const HERO_SECTION_FRAGMENT = gql`
  fragment HeroSectionFragment on HeroSectionRecord {
    id
    _modelApiKey
    title
    subTitle
    ctaButtons {
      ...buttonFragment
    }
    image {
      responsiveImage(imgixParams: { auto: format }) {
        ...responsiveImageFragment
      }
    }
  }
`

export function HeroSection(props: HeroSectionRecord) {
  const { title, subTitle, ctaButtons, image } = props
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <Container>
          <div className="max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <TypographyH1 className="max-w-2xl text-gray-900 sm:text-6xl lg:col-span-2 lg:text-6xl xl:col-auto">
              {title}
            </TypographyH1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600">{subTitle}</p>
              <div className="mt-10 flex items-center gap-x-6">
                {ctaButtons &&
                  ctaButtons.length > 0 &&
                  ctaButtons.map((button) => {
                    return <SmartButton key={button.id} {...button} />
                  })}
              </div>
            </div>
            <Image
              data={image.responsiveImage}
              alt=""
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              pictureClassName="object-cover"
            />
          </div>
        </Container>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  )
}
