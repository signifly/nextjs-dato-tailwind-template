import { NavigationBlockRecord } from '@/types/generated'
import React from 'react'
import { SmartButton } from './SmartButton'
import { SiteLogo } from './SiteLogo'

export const DesktopMenu = (props: NavigationBlockRecord) => {
  const {
    siteLogo,
    menu: { items },
    ctaButton,
  } = props

  return (
    <div className="hidden flex-nowrap items-center justify-between lg:flex">
      <ul className="hidden lg:block">
        {items.map((button) => {
          return <SmartButton key={button.id} {...button} />
        })}
      </ul>
      <SmartButton {...ctaButton[0]} />
    </div>
  )
}
