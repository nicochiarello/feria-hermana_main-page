/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'feria-hermana.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'feria-hermana.s3.sa-east-1.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig
