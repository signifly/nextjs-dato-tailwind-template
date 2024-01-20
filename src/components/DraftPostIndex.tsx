'use client'

import { useQuerySubscription } from 'react-datocms/use-query-subscription'
import { PostIndex } from '@/components/PostIndex'

export function DraftPostIndex({ subscription }: any) {
  const { data } = useQuerySubscription(subscription)

  return <PostIndex data={data} />
}
