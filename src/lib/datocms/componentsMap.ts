import { ReactNode } from 'react'
import { BannerBlock } from '@/components/blocks/BannerBlock'

export type ComponentsMap = {
  [key: string]: ReactNode
}

export const componentsMap = {
  banner_block: BannerBlock,
}
