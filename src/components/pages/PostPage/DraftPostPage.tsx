'use client'

import { useQuerySubscription } from 'react-datocms/use-query-subscription'
import { PostPage } from '@/components/pages/PostPage'

// @ts-ignore
export function DraftPostPage({ subscription }) {
  const { data } = useQuerySubscription(subscription)

  return <PostPage data={data} />
}
