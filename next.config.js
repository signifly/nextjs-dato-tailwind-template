const withNextIntl = require('next-intl/plugin')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.datocms-assets.com'],
  },
}

module.exports = withNextIntl(nextConfig)
