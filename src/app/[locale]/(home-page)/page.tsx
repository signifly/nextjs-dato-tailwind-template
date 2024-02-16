import { draftMode } from 'next/headers'
import { toNextMetadata } from 'react-datocms'
import { performRequest } from '@/lib/datocms/'
import { HomePage, DraftHomePage } from '@/components/pages/HomePage'
import { HOME_PAGE_QUERY } from '@/lib/datocms/queries/homePage'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Locale } from '@/i18n'

function getPageRequest(locale: Locale) {
  const { isEnabled } = draftMode()

  return {
    query: HOME_PAGE_QUERY,
    includeDrafts: isEnabled,
    variables: { locale },
    revalidate: 10,
  }
}

type HomePageProps = {
  params: {
    locale: Locale
  }
}

export async function generateMetadata({ params }: HomePageProps) {
  const { site, page } = await performRequest(getPageRequest(params.locale))

  return toNextMetadata([...site.favicon, ...page.seo])
}

export default async function Page({ params }: HomePageProps) {
  const { locale } = params
  unstable_setRequestLocale(locale)
  const { isEnabled } = draftMode()

  const pageRequest = getPageRequest(locale)
  const data = await performRequest(pageRequest)

  if (isEnabled) {
    return (
      <DraftHomePage
        subscription={{
          ...pageRequest,
          initialData: data,
          token: process.env.DATOCMS_READ_ONLY_API_TOKEN,
          environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
        }}
      />
    )
  }

  return <HomePage data={data} />
}
