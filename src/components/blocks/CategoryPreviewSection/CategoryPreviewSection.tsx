import React from 'react'
import { gql } from 'graphql-request'
import type { CategoryPreviewSectionRecord } from '@/types/generated'
import { Image as DatoImage } from 'react-datocms'
import { SmartButton } from '@/components/SmartButton'

// @todo: complete gql query for CategoryPreview
export const CATEGORY_PREVIEW_SECTION_FRAGMENT = gql`
  fragment CategoryPreviewSectionFragment on CategoryPreviewSectionRecord {
    id
    _modelApiKey
    category {
      id
      name
      slug
      description
      image {
        responsiveImage(imgixParams: { auto: format }) {
          ...responsiveImageFragment
        }
      }
    }
    button {
      ...buttonFragment
    }
  }
`

// @todo: develop block CategoryPreview
export const CategoryPreviewSection = (props: CategoryPreviewSectionRecord) => {
  const { button, category } = props
  const { name, image, description } = category

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
        <div className="relative overflow-hidden rounded-lg lg:h-96">
          <div className="absolute inset-0">
            <div className="h-full w-full object-cover object-center">
              <DatoImage data={image.responsiveImage} />
            </div>
          </div>
          <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
          <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
          <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
            <div>
              <h2 className="text-xl font-bold text-white">{name}</h2>
              <p className="mt-1 text-sm text-gray-300">{description}</p>
            </div>
            <SmartButton
              {...button}
              className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
