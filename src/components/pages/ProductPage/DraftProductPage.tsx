'use client'

import { useQuerySubscription } from 'react-datocms/use-query-subscription'
import { ProductPage } from '@/components/pages/ProductPage'

// @ts-ignore
export function DraftProductPage({ subscription }) {
  const { data } = useQuerySubscription(subscription)

  return <ProductPage data={data} />
}
