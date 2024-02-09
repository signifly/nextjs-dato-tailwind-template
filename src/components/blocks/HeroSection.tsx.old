import React from 'react'
import { gql } from 'graphql-request'
import { HeroSectionRecord } from '@/types/generated'
import { SmartButton } from '@/components/SmartButton'
import { Image as DatoImage } from 'react-datocms'

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

export const HeroSection = (props: HeroSectionRecord) => {
  const { title, subTitle, ctaButtons, image } = props

  return (
    <div className="flex flex-col gap-x-8 gap-y-4 py-10 md:grid md:grid-cols-2 md:py-16">
      <div className="space-y-8 lg:max-w-sm">
        <h1>{title}</h1>
        <p>{subTitle}</p>
        <div className="flex flex-col gap-4 md:flex-row">
          {ctaButtons &&
            ctaButtons.length > 0 &&
            ctaButtons.map((button) => {
              return <SmartButton key={button.id} {...button} />
            })}
        </div>
      </div>
      {image && image.responsiveImage && (
        <DatoImage data={image.responsiveImage} className="w-1/2 rounded-lg" />
      )}
    </div>
  )
}
