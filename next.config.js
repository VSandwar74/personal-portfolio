/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'media.licdn.com',
          port: '',
          pathname: '/dms/image/**'
        },
        {
          protocol: 'https',
          hostname: '**.example.com',
        },
      ],
    },
  }
