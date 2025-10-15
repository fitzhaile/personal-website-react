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
    title: "Donor & Industry Insight", 
    content: "<p>Turn data into direction — uncovering patterns, opportunities, and actionable insights.</p><ul><li>Conduct industry and donor analysis to identify sector-based fundraising potential.</li><li>Design donor surveys to inform pricing and engagement strategies.</li><li>Analyze caller characteristics and behavior to improve service outcomes.</li></ul>" 
  },
  { 
    title: "Google Analytics & Campaign Insight", 
    content: "<p>Measure what matters, translating web and campaign data into meaningful results.</p><ul><li>Measure campaign performance via acquisition and funnel analysis in Google Analytics.</li><li>Build backend Google Analytics infrastructure for a new fundraising platform.</li><li>Create performance reports to guide marketing and outreach decisions.</li></ul>" 
  },
  { 
    title: "Data Management & Quality Control", 
    content: "<p>Ensure clean, consistent, and reliable data across complex organizational systems.</p><ul><li>Identify and correct data quality issues in large, multi-source databases.</li><li>Develop and enforce consistent data collection and entry standards.</li><li>Manage and refine datasets to support accurate and repeatable analysis.</li></ul>" 
  },
  { 
    title: "Systems & Process Optimization", 
    content: "<p>Improve how teams work by aligning tools, communication, and workflows for better outcomes.</p><ul><li>Advocate for and implement organization-wide communication and project management platforms.</li><li>Improve data workflows to strengthen cross-department collaboration.</li><li>Streamline reporting processes to reduce errors and improve efficiency.</li></ul>" 
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
      <div className="container">
        {/* Section heading */}
        <h2 className="services__title">Consulting Services</h2>

        {/* Section description */}
        <p className="services__subtitle">
          I specialize in transforming complex data challenges into clear, actionable strategies across four key pillars of organizational growth.
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

