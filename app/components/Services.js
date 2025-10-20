/**
 * ===== SERVICES COMPONENT =====
 * Displays service offerings in a responsive grid layout
 * Each service card contains a title, summary, and bullet points
 * Clicking a card opens a modal with the full case study
 */

'use client'

import { useState, useEffect } from 'react';
import { services } from './servicesData';

/**
 * Services section component
 * Renders a grid of service cards with detailed descriptions
 * Manages case study modal state with URL-based routing
 * 
 * @returns {JSX.Element} Services section with grid layout and case study modal
 */
export default function Services() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);

  // Check URL path on mount to open case study if present
  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith('/case-studies/')) {
      // Remove '/case-studies/' prefix and any trailing slashes
      const slug = path.replace('/case-studies/', '').replace(/\/$/, '');
      const service = services.find(s => s.slug === slug);
      if (service) {
        setSelectedCase(service);
      }
    }
  }, []);

  const openCaseStudy = (service) => {
    // Save current scroll position before opening
    setSavedScrollPosition(window.scrollY);
    setSelectedCase(service);
    window.history.pushState({}, '', `/case-studies/${service.slug}`);
  };

  const closeCaseStudy = () => {
    setSelectedCase(null);
    window.history.pushState({}, '', '/services');
    // Restore scroll position after a brief delay to ensure DOM is ready
    setTimeout(() => {
      window.scrollTo(0, savedScrollPosition);
    }, 0);
  };

  return (
    <section id="services" className="services">
      <div className="container">
        {/* Section heading */}
        <h2 className="services__title">Consulting Services</h2>

        {/* Section description */}
        <p className="services__subtitle">
          I specialize in transforming complex data challenges into clear, actionable strategies across four key pillars of organizational growth.
        </p>

        {/* Responsive grid of service cards */}
        <div className="services__grid">
          {services.map((service, index) => {
            const CardWrapper = service.hasCaseStudy ? 'a' : 'div';
            const cardProps = service.hasCaseStudy
              ? {
                  href: `/case-studies/${service.slug}`,
                  onClick: (e) => {
                    e.preventDefault();
                    openCaseStudy(service);
                  }
                }
              : {};
            
            return (
              <CardWrapper
                key={index}
                className={`service-card ${service.hasCaseStudy ? 'service-card--clickable' : ''}`}
                {...cardProps}
              >
                <h3 className="service-card__title">{service.title}</h3>
                {/* Using dangerouslySetInnerHTML for formatted HTML content */}
                <div className="service-card__content" dangerouslySetInnerHTML={{ __html: service.content }} />
                {service.hasCaseStudy && (
                  <span className="service-card__cta">View Example →</span>
                )}
              </CardWrapper>
            );
          })}
        </div>
      </div>

          {/* Case Study Modal */}
          {selectedCase && (
            <div className="case-study-modal" onClick={closeCaseStudy}>
              <div className="case-study-modal__content" onClick={(e) => e.stopPropagation()}>
                <button
                  className="case-study-modal__close"
                  onClick={closeCaseStudy}
                  aria-label="Close case study"
                >
                  ×
                </button>

                <h2 className="case-study-modal__title">{selectedCase.title}</h2>
                <p className="case-study-modal__subtitle">{selectedCase.caseStudy.subtitle}</p>

                {/* Case study content */}
                <div dangerouslySetInnerHTML={{ __html: selectedCase.caseStudy.content }} />
              </div>
            </div>
          )}
    </section>
  );
}

