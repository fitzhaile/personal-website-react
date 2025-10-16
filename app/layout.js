/**
 * ===== ROOT LAYOUT =====
 * Root layout component for the Next.js application
 * Defines global metadata, favicon, fonts, and HTML structure
 */

import '../src/index.css'

// Global metadata for SEO and social sharing
export const metadata = {
  title: 'Fitz Haile - Data Driven Decision Making - Savannah, GA',
  description: 'Independent data and analytics consultant helping organizations turn complex data into actionable insights and smarter decisions.',
  keywords: ['analytics', 'consulting', 'data strategy', 'data analytics', 'business intelligence'],
  authors: [{ name: 'Fitz Haile' }],
  
  // Custom favicon configuration (PNG format for better browser compatibility)
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  
  // Open Graph metadata for social media sharing
  openGraph: {
    title: 'Fitz Haile',
    description: 'Independent data and analytics consultant helping organizations turn complex data into actionable insights and smarter decisions.',
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
        {/* Google Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GED32DB63G"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GED32DB63G');
            `,
          }}
        />

        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Inter font family with multiple weights */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
        {/* Web App Manifest for PWA support */}
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  )
}

