'use client'

import React from 'react'
import { useLocale } from 'next-intl'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Link } from '@/navigation'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { locales } from '@/i18n'
import { usePathname } from '@/navigation'
import { cn } from '@/lib/utils'

export function LanguageSwitcher({
  languageToggleLabel,
}: {
  languageToggleLabel: string
}) {
  const currentLocale = useLocale()
  const pathname = usePathname()

  return (
    <div aria-label={languageToggleLabel} className="text-sm">
      <div className="hidden md:block">
        <Popover>
          <PopoverTrigger className="group flex items-center gap-x-1 uppercase">
            {currentLocale}
            <ChevronDownIcon className="h-5 w-5 transition-transform group-[&[data-state=open]]:rotate-180" />
          </PopoverTrigger>
          <PopoverContent className="flex flex-col gap-y-2 bg-white px-2 uppercase">
            {locales.map((l) => {
              return (
                <Link
                  key={l}
                  href={pathname}
                  locale={l}
                  className="hover:bg-brand-grey-200 pl-2 pr-8"
                  replace
                >
                  {l}
                </Link>
              )
            })}
          </PopoverContent>
        </Popover>
      </div>

      {/* Mobile version: */}
      <div className="flex gap-x-8 py-5 md:hidden">
        {locales.map((l) => {
          return (
            <Link
              key={l}
              href={pathname}
              locale={l}
              className={cn('uppercase', l === currentLocale && 'underline')}
              replace
            >
              {l}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
