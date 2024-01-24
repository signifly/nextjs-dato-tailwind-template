import { Header } from '@/components/Header'
import { MoreStories } from '@/components/MoreStories'
import { PostBody } from '@/components/PostBody'
import { PostHeader } from '@/components/PostHeader'
import { SectionSeparator } from '@/components/SectionSeparator'

// @ts-ignore
export function PostPage({ data }) {
  const { post, morePosts } = data

  return (
    <>
      <Header />
      <article>
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
        />
        <PostBody content={post.content} />
      </article>
      <SectionSeparator />
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </>
  )
}
