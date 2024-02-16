import { ReactNode } from 'react'
import { NavigationSection } from '@/components/blocks/NavigationSection/NavigationSection'
import { HeroSection } from '@/components/blocks/HeroSection/HeroSection'

export type ComponentsMap = {
  [key: string]: ReactNode
}

export const componentsMap = {
  navigation_section: NavigationSection,
  hero_section: HeroSection,
}
