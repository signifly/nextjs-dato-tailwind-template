import { NavigationBlockRecord } from '@/types/generated'
import React from 'react'
import { SmartButton } from './SmartButton'
import { LanguageSwitcher } from './LanguageSwitcher'

export const DesktopMenu = (props: NavigationBlockRecord) => {
  const {
    menu: { items },
    ctaButton,
  } = props

  return (
    <div className="hidden flex-nowrap items-center justify-between gap-x-6 md:flex">
      <ul className="hidden lg:block">
        {items.map((button) => {
          return <SmartButton key={button.id} {...button} />
        })}
      </ul>
      <LanguageSwitcher />
      <SmartButton {...ctaButton[0]} />
    </div>
  )
}
