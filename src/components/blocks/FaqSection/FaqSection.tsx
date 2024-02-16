import { FaqSectionRecord } from '@/types/generated'
import { gql } from 'graphql-request'

export const FAQ_SECTION_FRAGMENT = gql`
  fragment FaqSectionFragment on FaqSectionRecord {
    id
    _modelApiKey
    title
    items {
      id
      question
      answer
    }
  }
`

export function FaqSection(props: FaqSectionRecord) {
  const { title, items } = props

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          {title}
        </h2>
        {items?.length > 0 && (
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            {items.map((faq) => (
              <div
                key={faq.id}
                className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                  {faq.question}
                </dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </div>
  )
}
