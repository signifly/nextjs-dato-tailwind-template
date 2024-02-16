import React from 'react'
import { gql } from 'graphql-request'
import { FeaturedBlogsSectionRecord } from '@/types/generated'
import { Link } from '@/navigation'
import { Image as DatoImage } from 'react-datocms'

// @todo: refactory this into its own fragment
export const FEATURED_BLOGS_SECTION_FRAGMENT = gql`
  fragment FeaturedBlogsSectionFragment on FeaturedBlogsSectionRecord {
    id
    _modelApiKey
    blogPosts {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
      title
      slug
      content {
        value
        blocks {
          __typename
          ... on ImageBlockRecord {
            id
            image {
              responsiveImage(
                imgixParams: { fm: jpg, fit: crop, w: 2000, h: 1000 }
              ) {
                ...responsiveImageFragment
              }
            }
          }
        }
      }
      date
      ogImage: coverImage {
        url(imgixParams: { auto: format })
      }
      coverImage {
        responsiveImage(imgixParams: { auto: format }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
        picture {
          responsiveImage(
            imgixParams: { fm: jpg, fit: crop, w: 100, h: 100, sat: -100 }
          ) {
            ...responsiveImageFragment
          }
        }
      }
    }
  }
`

export const FeaturedBlogsSection = (props: FeaturedBlogsSectionRecord) => {
  const { blogPosts } = props
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                {post.coverImage.responsiveImage && (
                  <div className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]">
                    <DatoImage
                      data={post.coverImage.responsiveImage}
                      className="aspect-video rounded-2xl lg:aspect-[3/2]"
                      pictureClassName="object-cover"
                    />
                  </div>
                )}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {post.date}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={`/post/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.excerpt}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  {post.author.picture?.responsiveImage && (
                    <div className="h-10 w-10 rounded-full bg-gray-100">
                      <DatoImage data={post.author.picture.responsiveImage} />
                    </div>
                  )}
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
