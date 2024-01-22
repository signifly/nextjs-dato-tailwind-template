import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

// @todo: update these values with the locales you support
export const locales = ['en', 'fr']
export const defaultLocale = 'en'
export type Locales = (typeof locales)[number]

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
