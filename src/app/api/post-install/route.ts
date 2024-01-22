import { buildClient, Client, ApiError } from '@datocms/cma-client-node'
import { NextRequest, NextResponse } from 'next/server'

/*
  These endpoint is called right after bootstrapping the Starter project...
  they can be removed afterwards!
*/

const corsInitOptions = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  },
}

const baseUrl = process.env.VERCEL_BRANCH_URL
  ? // Vercel auto-populates this environment variable
    `https://${process.env.VERCEL_BRANCH_URL}`
  : // Netlify auto-populates this environment variable
    process.env.URL

async function installWebPreviewsPlugin(client: Client) {
  const webPreviewsPlugin = await client.plugins.create({
    package_name: 'datocms-plugin-web-previews',
  })

  await client.plugins.update(webPreviewsPlugin, {
    parameters: {
      frontends: [
        { name: 'Production', previewWebhook: `${baseUrl}/api/web-previews` },
      ],
      startOpen: true,
    },
  })
}

async function installSeoReadabilityPlugin(client: Client) {
  const seoReadabilityPlugin = await client.plugins.create({
    package_name: 'datocms-plugin-seo-readability-analysis',
  })

  await client.plugins.update(seoReadabilityPlugin, {
    parameters: {
      htmlGeneratorUrl: `${baseUrl}/api/seo-readability-metadata`,
      autoApplyToFieldsWithApiKey: 'seo_readability_analysis',
    },
  })
}

export async function OPTIONS() {
  return NextResponse.json({ success: true }, corsInitOptions)
}

export async function POST(request: NextRequest) {
  const requestBody = await request.json()
  const client = buildClient({ apiToken: requestBody.datocmsApiToken })

  try {
    await Promise.all([
      installWebPreviewsPlugin(client),
      installSeoReadabilityPlugin(client),
    ])

    return NextResponse.json({ success: true }, corsInitOptions)
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json(
        {
          error: error.message,
          request: error.request,
          response: error.response,
        },
        { ...corsInitOptions, status: 500 },
      )
    }
  }
}
