import { ReactNode } from 'react'
import { BannerSection } from '@/components/blocks/BannerSection/BannerSection'
import { NavigationSection } from '@/components/blocks/NavigationSection/NavigationSection'
import { HeroSection } from '@/components/blocks/HeroSection/HeroSection'
import { PageHeaderSection } from '@/components/blocks/PageHeaderSection/PageHeaderSection'
import { LogoCloudSection } from '@/components/blocks/LogoCloudSection/LogoCloudSection'

export type ComponentsMap = {
  [key: string]: ReactNode
}

export const componentsMap = {
  banner_section: BannerSection,
  navigation_section: NavigationSection,
  hero_section: HeroSection,
  page_header_section: PageHeaderSection,
  logo_cloud_section: LogoCloudSection,
}
