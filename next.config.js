/**
 * ===== NEXT.JS CONFIGURATION =====
 * Configuration for Next.js 15 with static export and GitHub Pages deployment
 * 
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Enable static site generation for deployment to GitHub Pages
  output: 'export',
  
  // Image optimization settings for static export
  images: {
    unoptimized: true, // Required when using output: 'export'
  },
  
  // Add trailing slashes to URLs for better server compatibility
  trailingSlash: true,
  
  // Disable React strict mode to suppress hydration warnings from browser extensions
  reactStrictMode: false,
  
  // Base path configuration for GitHub Pages project repository
  // Uses environment variable for production builds, empty string for local development
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

module.exports = nextConfig

