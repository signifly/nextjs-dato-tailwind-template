import { ReactNode } from 'react'
import { BannerBlock } from '@/components/blocks/BannerBlock'
import { NavigationBlock } from '@/components/blocks/NavigationBlock'

export type ComponentsMap = {
  [key: string]: ReactNode
}

export const componentsMap = {
  banner_block: BannerBlock,
  navigation_block: NavigationBlock,
}
