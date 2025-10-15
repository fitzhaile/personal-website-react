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
 */

import HomePageClient from './HomePageClient';

/**
 * Section-specific metadata for SEO optimization
 * Each section has unique title and description for better search engine visibility
 */
const sectionMeta = {
  home: {
    title: 'Fitz Haile - Data Driven Decision Making',
    description: 'Strategic guidance to transform data into measurable growth and smarter decision making.',
  },
  services: {
    title: 'Services - Fitz Haile',
    description: 'Data-driven consulting services including Google Analytics strategy, data governance, fundraising BI, and operational tools.',
  },
  about: {
    title: 'About - Fitz Haile',
    description: 'Learn about Fitz Haile and Fitz Haile Consulting. Over 15 years of experience in scalable growth and turnaround management.',
  },
  contact: {
    title: 'Contact - Fitz Haile',
    description: 'Get in touch with Fitz Haile. Schedule a free discovery call to explore how we can help your business.',
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
  const meta = sectionMeta[section] || sectionMeta.home;
  
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
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
  
  return <HomePageClient section={section} />;
}

