import React from 'react'
import { gql } from 'graphql-request'

export const BANNER_SECTION_FRAGMENT = gql`
  fragment BannerSectionFragment on BannerSectionRecord {
    id
    _modelApiKey
    text
  }
`

export const BannerSection = ({ text }: { text: string }) => {
  return (
    <section className="bg-black py-2 text-center text-sm text-white">
      {text}
    </section>
  )
}
