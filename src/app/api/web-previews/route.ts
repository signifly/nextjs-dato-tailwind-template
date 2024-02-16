import { NextRequest, NextResponse } from 'next/server'
import { SchemaTypes } from '@datocms/cma-client-node'

const corsInitOptions = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  },
}

// @todo: add production baseURL here
const baseUrl = process.env.VERCEL_BRANCH_URL
  ? // Vercel auto-populates this environment variable
    `https://${process.env.VERCEL_BRANCH_URL}`
  : // Netlify auto-populates this environment variable
    process.env.URL

/*
  This endpoint is for the Web Previews DatoCMS plugin:
  https://www.datocms.com/marketplace/plugins/i/datocms-plugin-web-previews

  After installing the plugin on the project, insert the following frontend settings:

  Name: Production Website
  URL: <YOUR_WEBSITE>/api/preview-links
*/

const findUrlForItem = ({
  item,
  itemType,
}: {
  item: SchemaTypes.Item
  itemType: SchemaTypes.ItemType
}) => {
  switch (itemType.attributes.api_key) {
    // @todo: add your own dynamic routes here
    case 'home_page':
      return `/`
    case 'post':
      return `/post/${item.attributes.slug}`
    case 'product':
      return `/product/${item.attributes.slug}`
    default:
      return null
  }
}

export async function OPTIONS() {
  return NextResponse.json({ success: true }, corsInitOptions)
}

export async function POST(request: NextRequest) {
  const requestBody = await request.json()
  const url = findUrlForItem(requestBody)

  if (!url) {
    return NextResponse.json({ previewLinks: [] }, corsInitOptions)
  }

  const previewLinks = [
    {
      label: 'Published version',
      url: `${baseUrl}/api/exit-draft?redirect=${url}`,
    },
    {
      label: 'Draft version',
      url: `${baseUrl}/api/draft?redirect=${url}&secret=${
        process.env.NEXT_DATOCMS_PREVIEW_SECRET || ''
      }`,
    },
  ]

  return NextResponse.json({ previewLinks }, corsInitOptions)
}
