import React from 'react'
import { gql } from 'graphql-request'

export const BANNER_BLOCK_FRAGMENT = gql`
  fragment BannerBlockFragment on BannerBlockRecord {
    id
    _modelApiKey
    text
  }
`

export const BannerBlock = ({ text }: { text: string }) => {
  return (
    <section className="bg-black py-2 text-center text-sm text-white">
      {text}
    </section>
  )
}
