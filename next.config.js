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
  // Base path for GitHub Pages (update 'repo-name' to your actual repo name)
  // basePath: '/repo-name',
  // assetPrefix: '/repo-name',
}

module.exports = nextConfig

