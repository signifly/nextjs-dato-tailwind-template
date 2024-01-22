/* Next.js App directory requires a RootLayout to be exported.
 * However, since we are a `[locale]` dynamic segment for i18n,
 * all logic is moved to [locale]/layout.tsx */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
