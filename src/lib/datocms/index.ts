import { cache } from 'react'

const fetchDatoContent = async (
  body: string,
  includeDrafts = false,
  excludeInvalid = false,
  visualEditingBaseUrl: string | undefined,
  revalidate: number | undefined,
) => {
  const headers = {
    Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    ...(includeDrafts ? { 'X-Include-Drafts': 'true' } : {}),
    ...(excludeInvalid ? { 'X-Exclude-Invalid': 'true' } : {}),
    ...(visualEditingBaseUrl
      ? {
          'X-Visual-Editing': 'vercel-v1',
          'X-Base-Editing-Url': visualEditingBaseUrl,
        }
      : {}),
    ...(process.env.NEXT_DATOCMS_ENVIRONMENT
      ? { 'X-Environment': process.env.NEXT_DATOCMS_ENVIRONMENT }
      : {}),
  }

  const URL = 'https://graphql.datocms.com/'
  const options: Object = {
    method: 'POST',
    headers,
    body,
    next: { revalidate },
  }

  const response = await fetch(URL, options)
  const responseBody = await response.json()

  // @todo: better error handling
  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText}: ${JSON.stringify(
        responseBody,
      )}`,
    )
  }
  if (responseBody.errors) {
    throw new Error(
      `${responseBody.errors.map((e: any) => e.message)}: ${JSON.stringify(
        responseBody.errors.map((e: any) => e.meta),
      )}`,
    )
  }

  return responseBody
}

const dedupedFetch = cache(fetchDatoContent)

export type RequestParams = {
  query: string
  variables?: Record<string, any>
  includeDrafts?: boolean
  excludeInvalid?: boolean
  visualEditingBaseUrl?: string
  revalidate?: number
}

export async function performRequest({
  query,
  variables = {},
  includeDrafts = false,
  excludeInvalid = false,
  visualEditingBaseUrl,
  revalidate,
}: RequestParams) {
  try {
    const { data } = await dedupedFetch(
      JSON.stringify({ query, variables, revalidate }),
      includeDrafts,
      excludeInvalid,
      visualEditingBaseUrl,
      revalidate,
    )

    return data
  } catch (e) {
    console.log(`[ performRequest ] error: ${e}`)
    return null
  }
}
