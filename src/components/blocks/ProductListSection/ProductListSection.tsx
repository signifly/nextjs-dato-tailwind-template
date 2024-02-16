import React from 'react'
import { gql } from 'graphql-request'
import { ProductListSectionRecord } from '@/types/generated'
import { Image as DatoImage } from 'react-datocms'
import { Container } from '@/components/Container'

// @todo: complete gql query for ProductListSection
export const PRODUCT_LIST_SECTION_FRAGMENT = gql`
  fragment ProductListSectionFragment on ProductListSectionRecord {
    id
    _modelApiKey
    title
    products {
      id
      name
      price
      colorDescription
      slug
      image {
        responsiveImage(imgixParams: { auto: format }) {
          ...responsiveImageFragment
        }
      }
    }
  }
`

// @todo: develop block ProductListSection
export const ProductListSection = (props: ProductListSectionRecord) => {
  const { title, products } = props
  return (
    <div className="bg-white">
      <Container>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <div className="h-full w-full object-cover object-center lg:h-full lg:w-full">
                  <DatoImage data={product.image.responsiveImage} />
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={`/products/${product.slug}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.colorDescription}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
