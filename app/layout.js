/**
 * ===== ROOT LAYOUT =====
 * Root layout component for the Next.js application
 * Defines global metadata, favicon, fonts, and HTML structure
 */

import '../src/index.css'

// Global metadata for SEO and social sharing
export const metadata = {
  title: 'Fitz Haile - Data Driven Decision Making',
  description: 'Expert strategic guidance to transform challenges into measurable growth and sustainable success.',
  keywords: ['analytics', 'consulting', 'data strategy', 'business intelligence'],
  authors: [{ name: 'Fitz Haile' }],
  
  // Custom favicon configuration (PNG format for better browser compatibility)
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
  },
  
  // Open Graph metadata for social media sharing
  openGraph: {
    title: 'Fitz Haile',
    description: 'Expert strategic guidance to transform challenges into measurable growth and sustainable success.',
    type: 'website',
  },
}

/**
 * RootLayout component wraps all pages with consistent HTML structure
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Inter font family with multiple weights */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}

