/**
 * ===== SERVICES COMPONENT =====
 * Displays service offerings in a responsive grid layout
 * Each service card contains a title, summary, and bullet points
 */

'use client'

/**
 * Service offerings data
 * HTML content includes formatted paragraphs and unordered lists
 */
const services = [
  { 
    title: "Research & Insight Development", 
    content: "<p>Turned data into direction — uncovering patterns, opportunities, and actionable insights.</p><ul><li>Conducted industry and donor analysis to identify sector-based fundraising potential.</li><li>Designed donor surveys to inform pricing and engagement strategies.</li><li>Analyzed caller characteristics and behavior with Tableau to improve service outcomes.</li></ul>" 
  },
  { 
    title: "Google Analytics & Measurement", 
    content: "<p>Measured what matters, translating web and campaign data into meaningful results.</p><ul><li>Measured campaign performance via acquisition and funnel analysis in Google Analytics.</li><li>Built backend Google Analytics infrastructure for a new fundraising platform.</li><li>Created performance reports to guide marketing and outreach decisions.</li></ul>" 
  },
  { 
    title: "Data Management & Quality Control", 
    content: "<p>Ensured clean, consistent, and reliable data across complex organizational systems.</p><ul><li>Identified and corrected data quality issues in large, multi-source databases.</li><li>Developed and enforced consistent data collection and entry standards.</li><li>Managed and refined datasets to support accurate and repeatable analysis.</li></ul>" 
  },
  { 
    title: "Systems & Process Optimization", 
    content: "<p>Improved how teams work by aligning tools, communication, and workflows for better outcomes.</p><ul><li>Advocated for and implemented organization-wide communication and project management platforms.</li><li>Improved data workflows to strengthen cross-department collaboration.</li><li>Streamlined reporting processes to reduce errors and improve efficiency.</li></ul>" 
  },
];

/**
 * Services section component
 * Renders a grid of service cards with detailed descriptions
 * 
 * @returns {JSX.Element} Services section with grid layout
 */
export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services__container">
        {/* Section heading */}
        <h2 className="services__title">Data-Driven Consulting Services</h2>

        {/* Section description */}
        <p className="services__subtitle">
          We specialize in transforming complex data challenges into clear, actionable strategies across four key pillars of organizational growth.
        </p>

        {/* Responsive grid of service cards */}
        <div className="services__grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
            >
              <h3 className="service-card__title">{service.title}</h3>
              {/* Using dangerouslySetInnerHTML for formatted HTML content */}
              <div className="service-card__content" dangerouslySetInnerHTML={{ __html: service.content }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

