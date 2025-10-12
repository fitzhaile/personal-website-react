import '../src/index.css'

export const metadata = {
  title: 'Fitzhugh Analytics - Data-driven Guidance',
  description: 'Expert strategic guidance to transform challenges into measurable growth and sustainable success.',
  keywords: ['analytics', 'consulting', 'data strategy', 'business intelligence'],
  authors: [{ name: 'Fitz Haile' }],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Fitzhugh Analytics',
    description: 'Expert strategic guidance to transform challenges into measurable growth and sustainable success.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}

