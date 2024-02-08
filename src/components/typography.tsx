import { cn } from '@/lib/utils'

type TypographyProps = {
  children: React.ReactNode
}

export function TypographyH1(
  props: TypographyProps & React.ComponentPropsWithoutRef<'h1'>,
) {
  const { children, className, ...rest } = props
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        className,
      )}
      {...rest}
    >
      {children}
    </h1>
  )
}

export function TypographyH2(
  props: TypographyProps & React.ComponentPropsWithoutRef<'h2'>,
) {
  const { children, className, ...rest } = props
  return (
    <h2
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        className,
      )}
      {...rest}
    >
      {children}
    </h2>
  )
}

export function TypographyH3(
  props: TypographyProps & React.ComponentPropsWithoutRef<'h3'>,
) {
  const { children, className, ...rest } = props
  return (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight',
        className,
      )}
      {...rest}
    >
      {children}
    </h3>
  )
}

export function TypographyH4(
  props: TypographyProps & React.ComponentPropsWithoutRef<'h4'>,
) {
  const { children, className, ...rest } = props
  return (
    <h4
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        className,
      )}
      {...rest}
    >
      {children}
    </h4>
  )
}
