// 'use client'
//
// import React from 'react'
// import { useLocale } from 'next-intl'
// import { StringMultiLocaleField } from '@/types/generated'
// import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover'
// import { Link } from '@/navigation'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import { locales, dynamicPathSegments } from '@/navigation'
// import { usePathname } from 'next/navigation'
// import { cn } from '@/utils/clsxMerge'
//
// export function LanguageSwitcher({
//   _allSlugLocales,
//   languageToggleLabel,
// }: {
//   _allSlugLocales: StringMultiLocaleField[]
//   languageToggleLabel: string
// }) {
//   const currentLocale = useLocale()
//   const pathname = usePathname()
//
//   // remove 'fr' locales and empty strings for default locale
//   const removeLocales = pathname
//     .split('/')
//     .filter((p) => !locales.includes(p as any) && p !== '')
//   const firstSegment = removeLocales[0]
//   const isDynamicPath = dynamicPathSegments.includes(firstSegment as any)
//   const dynamicPath = isDynamicPath ? `${firstSegment}/` : ''
//
//   return (
//     <div
//       aria-label={languageToggleLabel}
//       className="text-14/[140%] tracking-[0.28px]"
//     >
//       <div className="hidden lg:block">
//         <Popover>
//           <PopoverTrigger className="group flex items-center gap-x-1 uppercase">
//             {currentLocale}
//             <ChevronDownIcon className="text-brand-grey-400 h-5 w-5 transition-transform group-[&[data-state=open]]:rotate-180" />
//           </PopoverTrigger>
//           <PopoverContent className="flex flex-col gap-y-2 bg-white px-2 uppercase">
//             {locales.map((l) => {
//               let slug = _allSlugLocales?.find((s) => s.locale === l)?.value
//               slug = slug === 'home-page' ? '' : slug
//               const href = `/${dynamicPath}${slug ?? ''}` // if there's no slug for this language, link to the homepage
//
//               return (
//                 <Link
//                   key={l}
//                   href={href}
//                   locale={l}
//                   className="hover:bg-brand-grey-200 pl-2 pr-8"
//                   replace={Boolean(slug)} // if there is a slug, replace the current history entry
//                 >
//                   {l}
//                 </Link>
//               )
//             })}
//           </PopoverContent>
//         </Popover>
//       </div>
//
//       {/* Mobile version: */}
//       <div className="flex gap-x-8 py-5 lg:hidden">
//         {locales.map((l) => {
//           let slug = _allSlugLocales?.find((s) => s.locale === l)?.value
//           slug = slug === 'home-page' ? '' : slug
//           const href = `/${dynamicPath}${slug ?? ''}` // if there's no slug for this language, link to the homepage
//
//           return (
//             <Link
//               key={l}
//               href={href}
//               locale={l}
//               className={cn(
//                 'uppercase',
//                 l === currentLocale && 'text-brand-green underline',
//               )}
//               replace={Boolean(slug)} // if there is a slug, replace the current history entry
//             >
//               {l}
//             </Link>
//           )
//         })}
//       </div>
//     </div>
//   )
// }
