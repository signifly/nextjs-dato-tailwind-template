import React from 'react'
import { gql } from 'graphql-request'
import { NavigationBlockRecord } from '@/types/generated'
import { Container } from '../Container'
import { SiteLogo } from '../SiteLogo'
import { DesktopMenu } from '../DesktopMenu'
import MobileMenu from '../MobileMenu'

export const NAVGATION_BLOCK_FRAGMENT = gql`
  fragment NavigationBlockFragment on NavigationBlockRecord {
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

export const NavigationBlock = (props: NavigationBlockRecord) => {
  const { siteLogo } = props

  return (
    <nav className="py-4 lg:py-6">
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
