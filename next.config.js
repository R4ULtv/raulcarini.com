/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/(.*)',
        destination: 'https://www.raulcarini.dev',
        "statusCode": 301
      },
    ];
  },
}

module.exports = nextConfig
