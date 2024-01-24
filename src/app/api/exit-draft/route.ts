import { NextRequest } from 'next/server'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  // Exit the current user from "Draft Mode". This function accepts no args.
  draftMode().disable()
  const redirectUrl = new URL(
    searchParams.get('redirect') || '/',
    process.env.NEXT_BASE_URL,
  )

  redirect(`${redirectUrl.pathname}${redirectUrl.search}`)
}
