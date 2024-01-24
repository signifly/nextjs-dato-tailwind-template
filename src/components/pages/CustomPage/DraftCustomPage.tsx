'use client'

import { useQuerySubscription } from 'react-datocms/use-query-subscription'
import { CustomPage } from '@/components/pages/CustomPage'

// @ts-ignore
export function DraftCustomPage({ subscription }) {
  const { data } = useQuerySubscription(subscription)

  return <CustomPage data={data} />
}
