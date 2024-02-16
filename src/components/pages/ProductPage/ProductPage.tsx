import { ProductRecord, SiteQueryQuery } from '@/types/generated'
import {
  Question,
  Check,
  ShieldCheck,
  Star,
} from '@phosphor-icons/react/dist/ssr'
import { Image as DatoImage } from 'react-datocms'
import { Link } from '@/navigation'
import { cn } from '@/lib/utils'
import { SmartButton } from '@/components/SmartButton'
import { Button } from '@/components/ui/button'

export function ProductPage({
  data,
}: {
  data: { site: SiteQueryQuery; page: ProductRecord }
}) {
  const { page: product } = data
  const {
    name,
    price,
    colorDescription,
    image,
    reviewAverage,
    description,
    totalReviews,
  } = product
  const breadcrumbs = [
    {
      id: '1',
      href: '/',
      name: 'Home',
    },
    {
      id: '2',
      href: '/products',
      name: 'Products',
    },
    {
      id: '3',
      href: '#',
      name: name,
    },
  ]

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-2">
              {breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center text-sm">
                    <Link
                      href={breadcrumb.href}
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      {breadcrumb.name}
                    </Link>
                    {breadcrumbIdx !== breadcrumbs.length - 1 ? (
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                      >
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                      </svg>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {name}
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl">$ {price}</p>

              <div className="ml-4 border-l border-gray-300 pl-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <div>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <Star
                          key={rating}
                          className={cn(
                            reviewAverage > rating + 1
                              ? 'text-yellow-400'
                              : 'text-gray-300',
                            'h-5 w-5 flex-shrink-0',
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviewAverage} out of 5 stars</p>
                  </div>
                  <p className="ml-2 text-sm text-gray-500">
                    {totalReviews} reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">{colorDescription}</p>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">{description}</p>
            </div>

            <div className="mt-6 flex items-center">
              <Check
                className="h-5 w-5 flex-shrink-0 text-green-500"
                size={20}
                aria-hidden="true"
              />
              <p className="ml-2 text-sm text-gray-500">
                In stock and ready to ship
              </p>
            </div>
          </section>
        </div>

        {/* Product image */}
        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
            <DatoImage
              data={image.responsiveImage}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product form */}
        <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
          <section aria-labelledby="options-heading">
            <h2 id="options-heading" className="sr-only">
              Product options
            </h2>

            <form>
              <div className="sm:flex sm:justify-between">
                {/* Size selector */}
              </div>
              <div className="mt-4">
                <Link
                  href="#"
                  className="group inline-flex text-sm text-gray-500 hover:text-gray-700"
                >
                  <span>What size should I buy?</span>
                  <Question
                    className="ml-2 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    size={20}
                    aria-hidden="true"
                  />
                </Link>
              </div>
              <div className="mt-10">
                <Button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3"
                >
                  Add to bag
                </Button>
              </div>
              <div className="mt-6 text-center">
                <Link
                  href="#"
                  className="group inline-flex text-base font-medium"
                >
                  <ShieldCheck
                    className="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="text-gray-500 hover:text-gray-700">
                    Lifetime Guarantee
                  </span>
                </Link>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}
