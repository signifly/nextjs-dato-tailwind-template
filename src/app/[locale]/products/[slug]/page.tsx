import { draftMode } from 'next/headers'
import { toNextMetadata } from 'react-datocms'

import { performRequest } from '@/lib/datocms'
import { PRODUCT_BY_SLUG_QUERY } from '@/lib/datocms/queries/productPage'

import { ProductPage, DraftProductPage } from '@/components/pages/ProductPage'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Locale } from '@/i18n'

export async function generateStaticParams() {
  const { allPosts } = await performRequest({ query: `{ allPosts { slug } }` })

  return allPosts.map(({ slug }: any) => slug)
}

function getPageRequest(params: PageProps['params']) {
  const { slug, locale } = params
  const { isEnabled } = draftMode()

  return {
    query: PRODUCT_BY_SLUG_QUERY,
    includeDrafts: isEnabled,
    variables: { slug, locale },
    revalidate: 10,
  }
}

export async function generateMetadata({ params }: PageProps) {
  const { site, page } = await performRequest(getPageRequest(params))

  return toNextMetadata([...site.favicon])
}

type PageProps = {
  params: {
    slug: string
    locale: Locale
  }
}

export default async function Page({ params }: PageProps) {
  const { locale } = params
  unstable_setRequestLocale(locale)
  const { isEnabled } = draftMode()

  const pageRequest = getPageRequest(params)
  const data = await performRequest(pageRequest)

  if (isEnabled) {
    return (
      <DraftProductPage
        subscription={{
          ...pageRequest,
          initialData: data,
          token: process.env.NEXT_DATOCMS_READ_ONLY_API_TOKEN,
          environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
        }}
      />
    )
  }

  return <ProductPage data={data} />
}
