// import { HeroPost } from '@/components/HeroPost'
// import { Intro } from '@/components/Intro'
// import { MoreStories } from '@/components/MoreStories'
// import { ComponentParser } from '@/lib/datocms/ComponentParser'

import { FaqBlock } from '@/components/blocks/FaqBlock'
import { FeaturesWithImageBlock } from '@/components/blocks/FeaturesWithImageBlock'
import { LogoCloudBlock } from '@/components/blocks/LogoCloudBlock'
import { NewHeroBlock } from '@/components/blocks/NewHeroBlock'
import { TestimonialsBlock } from '@/components/blocks/TestimonialsBlock'
import { CtaBlock } from '@/components/blocks/CtaBlock'

export function HomePage({ data }: any) {
  // const { allPosts } = data

  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)

  return (
    <>
      {/* {data?.page?.sections?.map((s: any) => ( */}
      {/*   <ComponentParser key={s.id} data={s} /> */}
      {/* ))} */}
      <NewHeroBlock />
      <LogoCloudBlock />
      <FeaturesWithImageBlock />
      <TestimonialsBlock />
      <FaqBlock />
      <CtaBlock />

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
