import { Avatar } from '@/components/Avatar'
import { Date } from '@/components/Date'
import { CoverImage } from '@/components/CoverImage'
import { PostTitle } from '@/components/PostTitle'

// @ts-ignore
export function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-12 md:block">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="-mx-5 mb-8 sm:mx-0 md:mb-16">
        <CoverImage
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  )
}
