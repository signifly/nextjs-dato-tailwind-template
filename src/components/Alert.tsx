import { Container } from '@/components/Container'
import { cn } from '@/lib/utils'

export function Alert({ preview }: { preview: boolean }) {
  return (
    <div
      className={cn('border-b', {
        'border-black bg-black text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This is page is showing draft content.{' '}
              <a
                href="/api/exit-draft"
                className="hover:text-success underline transition-colors duration-200"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              This is page is showing published content.{' '}
              <a
                href={`/api/draft?secret=${process.env.NEXT_DATOCMS_PREVIEW_SECRET}`}
                className="hover:text-success underline transition-colors duration-200"
              >
                Click here
              </a>{' '}
              to enter preview mode!
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
