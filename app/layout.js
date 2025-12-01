/**
 * ===== ROOT LAYOUT =====
 * Root layout component for the Next.js application
 * Defines global metadata, favicon, fonts, and HTML structure
 */

import '../src/index.css'

// Global metadata for SEO and social sharing
export const metadata = {
  // Primary SEO tags
  title: {
    default: 'Fitz Haile - Data & Analytics Consultant',
    template: '%s | Fitz Haile', // Used by child pages for consistent branding
  },
  description: 'Fitz Haile is an independent data and analytics consultant in Savannah, GA - helping organizations turn their data into more informed, smarter decisions.',
  keywords: ['analytics', 'consulting', 'data strategy', 'data analytics', 'business intelligence', 'Savannah GA consultant', 'donor analytics', 'Google Analytics expert', 'systems optimization'],
  authors: [{ name: 'Fitz Haile' }],
  creator: 'Fitz Haile',
  
  // Robots - tell search engines how to crawl
  robots: {
    index: true, // Allow search engines to index this site
    follow: true, // Allow search engines to follow links
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Custom favicon configuration (PNG format for better browser compatibility)
  // Google recommends favicon larger than 48x48px for search results
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }, // Larger favicon for Google Search
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  
  // Open Graph metadata for social media sharing (Facebook, LinkedIn)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fitzhaile.com', // Update with your actual domain
    siteName: 'Fitz Haile - Data & Analytics Consulting',
    title: 'Fitz Haile - Data & Analytics Consultant',
    description: 'Independent data and analytics consultant in Savannah, GA - helping organizations turn their data into more informed, smarter decisions.',
    // Optional: Add an og:image for social sharing
    // images: [
    //   {
    //     url: 'https://fitzhaile.com/og-image.jpg',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Fitz Haile - Data & Analytics Consulting',
    //   },
    // ],
  },
  
  // Twitter Card metadata for Twitter sharing
  twitter: {
    card: 'summary_large_image', // Use 'summary' for smaller card
    title: 'Fitz Haile - Data & Analytics Consultant',
    description: 'Independent data and analytics consultant in Savannah, GA - helping organizations turn their data into more informed, smarter decisions.',
    creator: '@fitzhaile', // Add your Twitter handle if you have one
    // Optional: Add a Twitter image
    // images: ['https://fitzhaile.com/twitter-image.jpg'],
  },
  
  // Verification tags (add these when you set them up)
  // verification: {
  //   google: 'your-google-verification-code',
  //   yandex: 'your-yandex-verification-code',
  //   bing: 'your-bing-verification-code',
  // },
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

