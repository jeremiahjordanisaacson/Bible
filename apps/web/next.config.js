/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  transpilePackages: ['@open-bible/schemas'],
};

module.exports = nextConfig;
