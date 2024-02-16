import { Avatar } from '@/components/Avatar'
import { Date } from '@/components/Date'
import { CoverImage } from '@/components/CoverImage'
import Link from 'next/link'

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: any) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/post/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <Date dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}
