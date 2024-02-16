import React from 'react'
import { gql } from 'graphql-request'
import { PageHeaderSectionRecord } from '@/types/generated'
import { Container } from '@/components/Container'

export const PAGE_HEADER_SECTION_FRAGMENT = gql`
  fragment PageHeaderSectionFragment on PageHeaderSectionRecord {
    id
    _modelApiKey
    title
    subTitle
  }
`

export const PageHeaderSection = (props: PageHeaderSectionRecord) => {
  const { title, subTitle } = props

  return (
    <div className="mb-16 mt-16 items-end text-center md:mb-12 md:flex-row md:justify-between">
      <Container>
        <h1 className="text-6xl font-bold leading-tight tracking-tighter md:text-8xl">
          {title}
        </h1>
        <p className="mt-5 text-center text-lg">{subTitle}</p>
      </Container>
    </div>
  )
}
