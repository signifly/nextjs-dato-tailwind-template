import React from 'react'
import { gql } from 'graphql-request'
import { NavigationSectionRecord } from '@/types/generated'
import { Container } from '@/components/Container'
import { SiteLogo } from '@/components/SiteLogo'
import { DesktopMenu } from '@/components/DesktopMenu'
import MobileMenu from '@/components/MobileMenu'

export const NAVIGATION_SECTION_FRAGMENT = gql`
  fragment NavigationSectionFragment on NavigationSectionRecord {
    id
    _modelApiKey
    siteLogo {
      url
      alt
    }
    menu {
      id
      _modelApiKey
      items {
        ...buttonFragment
      }
    }
    ctaButton {
      ...buttonFragment
    }
    languageToggleLabel
  }
`

export const NavigationSection = (props: NavigationSectionRecord) => {
  const { siteLogo } = props

  return (
    <nav className="py-4">
      <Container>
        <div className="flex items-center justify-between">
          <SiteLogo {...siteLogo} />
          <DesktopMenu {...props} />
          <MobileMenu {...props} />
        </div>
      </Container>
    </nav>
  )
}
