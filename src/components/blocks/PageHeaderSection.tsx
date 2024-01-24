import React from 'react'
import { gql } from 'graphql-request'
import { PageHeaderSectionRecord } from '@/types/generated'
import { Image as DatoImage } from 'react-datocms'

export const PAGE_HEADER_SECTION_FRAGMENT = gql`
  fragment PageHeaderSectionFragment on PageHeaderSectionRecord {
    id
    _modelApiKey
    title
    subTitle
    image {
      responsiveImage(imgixParams: { auto: format }) {
        ...responsiveImageFragment
      }
    }
  }
`

export const PageHeaderSection = (props: PageHeaderSectionRecord) => {
  const { title, subTitle, image } = props

  return (
    <>
      <section className="mb-16 mt-16 flex flex-col items-end md:mb-12 md:flex-row md:justify-between">
        <h1 className="text-6xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
          {title}
        </h1>
        <p className="mt-5 text-center text-lg md:pl-8 md:text-right">
          {subTitle}
        </p>
      </section>
      {image?.responsiveImage && (
        <DatoImage data={image.responsiveImage} className="w-1/2 rounded-lg" />
      )}
    </>
  )
}
