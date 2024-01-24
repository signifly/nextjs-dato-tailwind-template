'use client'

import { useQuerySubscription } from 'react-datocms/use-query-subscription'
import { HomePage } from '@/components/pages/HomePage'

// @ts-ignore
export function DraftHomePage({ subscription }) {
  const { data } = useQuerySubscription(subscription)
  console.log('data', data)

  return <HomePage data={data} />
}
