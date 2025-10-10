/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static site generation (if deploying to GitHub Pages)
  images: {
    unoptimized: true, // Required for static export
  },
  // Trailing slashes for better compatibility
  trailingSlash: true,
  // Suppress hydration warnings caused by browser extensions
  reactStrictMode: false,
  // Base path for GitHub Pages project repo
  basePath: '/personal-website-react',
  assetPrefix: '/personal-website-react',
}

module.exports = nextConfig

