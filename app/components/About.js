/**
 * ===== ABOUT COMPONENT =====
 * Personal introduction section with bio text and profile photo
 * Includes call-to-action button to initiate contact
 */

'use client'

// Base path for GitHub Pages deployment (empty for custom domain)
const basePath = '';

/**
 * About section component
 * Magazine-style layout: text wraps around a small floated photo (top-left)
 * 
 * @param {Object} props - Component props
 * @param {Function} props.handleContactTrigger - Function to open contact modal
 * @returns {JSX.Element} About section
 */
export default function About({ handleContactTrigger }) {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__content">
          {/* Profile photo - floats to the left, text wraps around it */}
          <div className="about__image-container">
            <img 
              src={`${basePath}/img/me_nyc.jpeg`}
              alt="Fitz Haile" 
              className="about__image"
            />
          </div>
          
          <p className="about__greeting">Hi, I'm Fitz</p>
          
          <p className="about__text">
          I'm an independent data and analytics consultant based in Savannah, GA, helping organizations make sense of their data and use it to make smarter decisions.
          </p>
          
          <p className="about__text">
          My career began in economic development, creating methods to identify and analyze local industries, using large datasets to understand economic patterns and produce reporting that helped substantiate emerging sectors and attract funding.
          </p>
          
          <p className="about__text">
          I later spent several years in New York and San Francisco building content management systems and the infrastructure behind them—tools that helped organizations organize and deliver information both to the web and within larger applications. That work gave me a strong foundation for how I now approach managing and structuring datasets, combining technical understanding with clear, practical analysis.
          </p>

          <p className="about__text">
          Today, I help organizations bring consistency and clarity to their data, turning complex information into insight that supports stronger strategy, clearer communication, and more confident decision making. My work blends analytical rigor with an appreciation for the systems that keep information reliable and usable - and the storytelling that turns it into strategic insight people can act on.
          </p>
          
          {/* Call-to-action button */}
          <button 
            onClick={handleContactTrigger}
            className="about__cta"
          >
            Let's Talk →
          </button>
        </div>
      </div>
    </section>
  );
}

