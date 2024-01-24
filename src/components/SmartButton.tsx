import React from 'react'
import { Button, buttonVariants } from './ui/button'
import { ButtonRecord } from '@/types/generated'
import { Link } from '@/navigation'

export const SmartButton = (
  props: ButtonRecord & React.ComponentPropsWithoutRef<'button'>,
) => {
  const {
    label,
    variant,
    size,
    externalLink,
    linkTo,
    useExternalLink,
    ...rest
  } = props

  if (useExternalLink && externalLink) {
    return (
      <Button
        variant={variant as keyof typeof buttonVariants}
        size={size as keyof typeof buttonVariants}
        asChild
        {...rest}
      >
        <a href={externalLink}>{label}</a>
      </Button>
    )
  }

  if (!useExternalLink && linkTo) {
    const { _modelApiKey } = linkTo
    const url = _modelApiKey === 'blog' ? '/' : '#'
    return (
      <Button
        variant={variant as keyof typeof buttonVariants}
        size={size as keyof typeof buttonVariants}
        asChild
        {...rest}
      >
        <Link href={url}>{label}</Link>
      </Button>
    )
  }

  return (
    <Button
      variant={variant as keyof typeof buttonVariants}
      size={size as keyof typeof buttonVariants}
      {...rest}
    >
      {label}
    </Button>
  )
}
