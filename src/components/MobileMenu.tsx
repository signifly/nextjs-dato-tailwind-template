'use client'

import * as React from 'react'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { NavigationSectionRecord } from '@/types/generated'
import { SmartButton } from './SmartButton'
import { SiteLogo } from './SiteLogo'

export default function MobileMenu(props: NavigationSectionRecord) {
  const {
    siteLogo,
    menu: { items },
    ctaButton,
  } = props
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="">
        <SiteLogo {...siteLogo} />
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
          <div className="flex flex-col space-y-3">
            {items.map((item) => (
              <SmartButton
                key={item.id}
                {...item}
                className="justify-start px-0"
              />
            ))}
          </div>
          <SmartButton {...ctaButton[0]} className="mt-6 flex" />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
