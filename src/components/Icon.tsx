import React from 'react'
import { IconRecord } from '@/types/generated'
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'
import { cn } from '@/lib/utils'

const icons = {
  cloud_arrow_up: CloudArrowUpIcon,
  lock_closed: LockClosedIcon,
  arrow_path: ArrowPathIcon,
  finger_print: FingerPrintIcon,
  cog_6_tooth: Cog6ToothIcon,
  server: ServerIcon,
}

export const Icon = (
  props: IconRecord & React.ComponentPropsWithoutRef<'svg'>,
) => {
  const { className, ...rest } = props
  const Component = icons[props.name as keyof typeof icons]
  return <Component className={cn('h-4 w-4', className)} {...rest} />
}
