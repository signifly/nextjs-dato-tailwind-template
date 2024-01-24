// import { HeroPost } from '@/components/HeroPost'
// import { Intro } from '@/components/Intro'
// import { MoreStories } from '@/components/MoreStories'
import { ComponentParser } from '@/lib/datocms/ComponentParser'

export function HomePage({ data }: any) {
  const { allPosts } = data

  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)

  return (
    <>
      {data?.homePage?.sections?.map((s: any) => (
        <ComponentParser key={s.id} data={s} />
      ))}
      {/* <Intro /> */}
      {/* {heroPost && ( */}
      {/*   <HeroPost */}
      {/*     title={heroPost.title} */}
      {/*     coverImage={heroPost.coverImage} */}
      {/*     date={heroPost.date} */}
      {/*     author={heroPost.author} */}
      {/*     slug={heroPost.slug} */}
      {/*     excerpt={heroPost.excerpt} */}
      {/*   /> */}
      {/* )} */}
      {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
    </>
  )
}
