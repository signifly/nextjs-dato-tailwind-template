import { draftMode } from 'next/headers'
import { toNextMetadata } from 'react-datocms'

import { performRequest } from '@/lib/datocms'
import { POST_BY_SLUG_QUERY } from '@/lib/datocms/queries/blogPost'

import { DraftHomePage, HomePage } from '@/components/pages/HomePage'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Locale } from '@/i18n'

export async function generateStaticParams() {
  const { allPosts } = await performRequest({ query: `{ allPosts { slug } }` })

  return allPosts.map(({ slug }: any) => slug)
}

function getPageRequest(slug: string) {
  const { isEnabled } = draftMode()

  return {
    query: POST_BY_SLUG_QUERY,
    includeDrafts: isEnabled,
    variables: { slug },
  }
}

export async function generateMetadata({ params }: any) {
  const { site, post } = await performRequest(getPageRequest(params.slug))

  return toNextMetadata([...site.favicon, ...post.seo])
}

type PageProps = {
  params: {
    slug: string
    locale: Locale
  }
}

export default async function Page({ params }: PageProps) {
  const { locale, slug } = params
  unstable_setRequestLocale(locale)
  const { isEnabled } = draftMode()

  const pageRequest = getPageRequest(slug)
  const data = await performRequest(pageRequest)

  if (isEnabled) {
    return (
      <DraftHomePage
        subscription={{
          ...pageRequest,
          initialData: data,
          token: process.env.NEXT_DATOCMS_API_TOKEN,
          environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
        }}
      />
    )
  }

  return <HomePage data={data} />
}
