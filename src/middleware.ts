import createMiddleware from 'next-intl/middleware'
import { defaultLocale, locales, localePrefix } from './i18n'

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
