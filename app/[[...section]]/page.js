import HomePageClient from './HomePageClient';

// Section metadata for SEO
const sectionMeta = {
  home: {
    title: 'Fitzhugh Analytics - Data-driven Guidance',
    description: 'Expert strategic guidance to transform challenges into measurable growth and sustainable success.',
  },
  services: {
    title: 'Services - Fitzhugh Analytics',
    description: 'Data-driven consulting services including Google Analytics strategy, data governance, fundraising BI, and operational tools.',
  },
  about: {
    title: 'About - Fitzhugh Analytics',
    description: 'Learn about Fitz Haile and Fitzhugh Consulting. Over 15 years of experience in scalable growth and turnaround management.',
  },
  contact: {
    title: 'Contact - Fitzhugh Analytics',
    description: 'Get in touch with Fitzhugh Analytics. Schedule a free discovery call to explore how we can help your business.',
  },
};

// Generate metadata for each route (Server Component)
export async function generateMetadata({ params }) {
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

// Generate static params for all sections
export function generateStaticParams() {
  return [
    { section: [] }, // home
    { section: ['services'] },
    { section: ['about'] },
    { section: ['contact'] },
  ];
}

// Server Component that passes section to Client Component
export default async function HomePage({ params }) {
  const resolvedParams = await params;
  const section = resolvedParams.section?.[0] || 'home';
  
  return <HomePageClient section={section} />;
}

