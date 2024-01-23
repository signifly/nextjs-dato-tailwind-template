'use client'

import { useQuerySubscription } from 'react-datocms/use-query-subscription'
import { PostIndex } from '@/components/PostIndex'

// @ts-ignore
export function DraftPostIndex({ subscription }) {
  const { data } = useQuerySubscription(subscription)

  return <PostIndex data={data} />
}