import { draftMode } from 'next/headers'
import { toNextMetadata } from 'react-datocms'
import { performRequest } from '@/lib/datocms/'
import { DraftPostIndex } from '@/components/DraftPostIndex'
import { PostIndex } from '@/components/PostIndex'
import { Locale } from 'date-fns'
import { HOME_PAGE_QUERY } from '@/lib/datocms/queries/homePage'

function getPageRequest(locale: Locale) {
  const { isEnabled } = draftMode()

  return {
    query: HOME_PAGE_QUERY,
    includeDrafts: isEnabled,
    variables: { locale },
  }
}

type HomePageProps = {
  params: {
    locale: Locale
  }
}

export async function generateMetadata({ params }: HomePageProps) {
  const { site, blog } = await performRequest(getPageRequest(params.locale))

  return toNextMetadata([...site.favicon, ...blog.seo])
}

export default async function Page({ params }: HomePageProps) {
  const { isEnabled } = draftMode()

  const pageRequest = getPageRequest(params.locale)
  const data = await performRequest(pageRequest)

  if (isEnabled) {
    return (
      <DraftPostIndex
        subscription={{
          ...pageRequest,
          initialData: data,
          token: process.env.NEXT_DATOCMS_API_TOKEN,
          environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
        }}
      />
    )
  }

  return <PostIndex data={data} />
}
