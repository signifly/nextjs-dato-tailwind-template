import { ComponentParser } from '@/lib/datocms/ComponentParser'

export function CustomPage({ data }: any) {
  return (
    <>
      {data?.page?.sections?.map((s: any) => (
        <ComponentParser key={s.id} data={s} />
      ))}
    </>
  )
}
