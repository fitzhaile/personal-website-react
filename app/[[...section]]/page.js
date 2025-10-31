/**
 * ===== DYNAMIC ROUTING PAGE =====
 * Server component that handles dynamic routing for section-based navigation
 * Generates SEO-friendly metadata for each section and pre-renders static paths
 * 
 * Routes handled:
 * - / (home)
 * - /services
 * - /about
 * - /contact
 * - /case-studies/:slug
 */

import HomePageClient from './HomePageClient';

/**
 * Section-specific metadata for SEO optimization
 * Each section has unique title and description for better search engine visibility
 */
const sectionMeta = {
  home: {
    title: 'Fitz Haile - Data & Analytics Consultant',
    description: 'Independent data and analytics consultant helping organizations turn complex data into actionable insights and smarter decisions.',
    url: '/',
  },
  services: {
    title: 'Services',
    description: 'Data consulting services: donor & industry insights, Google Analytics expertise, data management, and systems optimization.',
    url: '/services',
  },
  about: {
    title: 'About',
    description: 'Independent data and analytics consultant in Savannah, GA. Background in economic development, content systems, and data strategy.',
    url: '/about',
  },
  contact: {
    title: 'Contact',
    description: 'Get in touch with Fitz Haile. Send a message to discuss your data challenges and analytics needs.',
    url: '/contact',
  },
  'case-studies': {
    title: 'Case Study',
    description: 'Real-world examples of data-driven solutions and analytics implementations.',
    url: '/case-studies',
  },
};

/**
 * Generate dynamic metadata for each route
 * This runs on the server and provides unique metadata for each section
 * 
 * @param {Object} props - Component props
 * @param {Promise<Object>} props.params - Route parameters (async in Next.js 15)
 * @returns {Object} Metadata object with title, description, and Open Graph data
 */
export async function generateMetadata({ params }) {
  // Await params as required by Next.js 15
  const resolvedParams = await params;
  const section = resolvedParams.section?.[0] || 'home';
  
  // Handle case studies routes
  if (section === 'case-studies') {
    const baseUrl = 'https://fitzhaile.com'; // Update with your actual domain
    const slug = resolvedParams.section?.[1];

    // If a specific case study slug is present, derive metadata from servicesData
    if (slug) {
      try {
        const { services } = await import('../components/servicesData');
        const svc = services.find(s => s.slug === slug);
        const title = svc ? `${svc.title} — Case Study` : 'Case Study';
        const description = svc?.caseStudy?.subtitle || 'Real-world example of data-driven solutions and analytics implementation.';
        const url = `/case-studies/${slug}`;

        return {
          title,
          description,
          alternates: { canonical: `${baseUrl}${url}` },
          openGraph: {
            title,
            description,
            url: `${baseUrl}${url}`,
            type: 'article',
            locale: 'en_US',
            siteName: 'Fitz Haile - Data & Analytics Consulting',
          },
          twitter: {
            card: 'summary_large_image',
            title,
            description,
          },
        };
      } catch (_e) {
        // Fallback to generic case study metadata
        const meta = sectionMeta['case-studies'];
        return {
          title: meta.title,
          description: meta.description,
          alternates: { canonical: `${baseUrl}${meta.url}` },
          openGraph: {
            title: meta.title,
            description: meta.description,
            url: `${baseUrl}${meta.url}`,
            type: 'website',
            locale: 'en_US',
            siteName: 'Fitz Haile - Data & Analytics Consulting',
          },
          twitter: {
            card: 'summary_large_image',
            title: meta.title,
            description: meta.description,
          },
        };
      }
    }

    // No slug, use generic case studies listing metadata
    const meta = sectionMeta['case-studies'];
    return {
      title: meta.title,
      description: meta.description,
      alternates: { canonical: `${baseUrl}${meta.url}` },
      openGraph: {
        title: meta.title,
        description: meta.description,
        url: `${baseUrl}${meta.url}`,
        type: 'website',
        locale: 'en_US',
        siteName: 'Fitz Haile - Data & Analytics Consulting',
      },
      twitter: {
        card: 'summary_large_image',
        title: meta.title,
        description: meta.description,
      },
    };
  }
  
  const meta = sectionMeta[section] || sectionMeta.home;
  const baseUrl = 'https://fitzhaile.com'; // Update with your actual domain
  
  // For home page, return metadata without title to use the default from layout.js
  // This prevents "Fitz Haile - Data & Analytics Consultant | Fitz Haile" duplication
  if (section === 'home') {
    return {
      description: meta.description,
      alternates: {
        canonical: `${baseUrl}${meta.url}`,
      },
      openGraph: {
        title: 'Fitz Haile - Data & Analytics Consultant',
        description: meta.description,
        url: `${baseUrl}${meta.url}`,
        type: 'website',
        locale: 'en_US',
        siteName: 'Fitz Haile - Data & Analytics Consulting',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Fitz Haile - Data & Analytics Consultant',
        description: meta.description,
      },
    };
  }
  
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${baseUrl}${meta.url}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}${meta.url}`,
      type: 'website',
      locale: 'en_US',
      siteName: 'Fitz Haile - Data & Analytics Consulting',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  };
}

/**
 * Generate static paths for all sections at build time
 * Required for static export (output: 'export' in next.config.js)
 * 
 * @returns {Array<Object>} Array of path objects for static generation
 */
export function generateStaticParams() {
  return [
    { section: [] },           // Home page
    { section: ['services'] }, // Services section
    { section: ['about'] },    // About section
    { section: ['contact'] },  // Contact modal trigger
    { section: ['case-studies', 'donor-industry-insight'] },    // Case study 1
    { section: ['case-studies', 'google-analytics'] },          // Case study 2
    { section: ['case-studies', 'data-management'] },           // Case study 3
    { section: ['case-studies', 'systems-optimization'] },      // Case study 4
  ];
}

/**
 * HomePage server component
 * Extracts the section from route params and passes it to the client component
 * 
 * @param {Object} props - Component props
 * @param {Promise<Object>} props.params - Route parameters (async in Next.js 15)
 * @returns {JSX.Element} HomePageClient component with section prop
 */
export default async function HomePage({ params }) {
  // Await params as required by Next.js 15
  const resolvedParams = await params;
  const section = resolvedParams.section?.[0] || 'home';
  
  // For case studies, scroll to services section - the Services component will handle the modal
  const displaySection = section === 'case-studies' ? 'services' : section;
  
  return <HomePageClient section={displaySection} />;
}

