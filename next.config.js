/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  experimental: {
    urlImports: ['https://unicons.iconscout.com/release/v2.1.9/css/unicons.css'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/assets/*',
      },
    ],
  },
}

module.exports = nextConfig
