import { TestBlock2 } from '@/components/blocks/TestBlock2/TestBlock2'
import { ReactNode } from 'react'
import { BannerBlock } from '@/components/blocks/BannerBlock'
import { NavigationBlock } from '@/components/blocks/NavigationBlock'
import { HeroSection } from '@/components/blocks/HeroSection'
import { PageHeaderSection } from '@/components/blocks/PageHeaderSection'

export type ComponentsMap = {
  [key: string]: ReactNode
}

export const componentsMap = {
  banner_block: BannerBlock,
  navigation_block: NavigationBlock,
  hero_section: HeroSection,
  page_header_section: PageHeaderSection,
  test_block2: TestBlock2,
}
