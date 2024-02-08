import { FileField } from '@/types/generated'
import { Link } from '@/navigation'
import Image from 'next/image'

export const SiteLogo = (props: FileField) => {
  const { url, alt } = props

  return (
    <Link
      href="/"
      className="relative inline-flex h-12 w-12 shrink-0 lg:h-14 lg:w-14"
    >
      <span className="sr-only">Company Logo</span>
      <Image
        className="max-w-fit object-contain object-left"
        src={url}
        alt={alt || ''}
        fill
      />
    </Link>
  )
}
