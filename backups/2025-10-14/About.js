/**
 * ===== ABOUT COMPONENT =====
 * Personal introduction section with bio text and profile photo
 * Includes call-to-action button to initiate contact
 */

'use client'

// Base path for GitHub Pages deployment
const basePath = process.env.NODE_ENV === 'production' ? '/personal-website-react' : '';

/**
 * About section component
 * Two-column layout: text content on left, photo on right (stacks on mobile)
 * 
 * @param {Object} props - Component props
 * @param {Function} props.handleContactTrigger - Function to open contact modal
 * @returns {JSX.Element} About section
 */
export default function About({ handleContactTrigger }) {
  return (
    <section id="about" className="about">
      <div className="about__container">
        {/* Text content column */}
        <div className="about__content">
          <h2 className="about__title">Hi, I'm Fitz</h2>
          
          {/* Career background paragraph */}
          <p className="about__text">
            Fitz Haile is a Savannah-based data and analytics consultant who helps organizations turn information into insight. He began his career at the Creative Coast Alliance as an economic analyst and later co-executive director before spending a decade in New York and San Francisco leading web and software development teams, including at SurveyMonkey.
          </p>
          
          {/* Specializations and community involvement paragraph */}
          <p className="about__text">
            Fitz specializes in Google Analytics, data quality management, and visualization—using clean, reliable data to measure performance and inform strategy. A founding member of the Metro Savannah Rotary Club, he remains deeply engaged in the Savannah community.
          </p>
          
          {/* Call-to-action button */}
          <button 
            onClick={handleContactTrigger}
            className="about__cta"
          >
            Let's Talk →
          </button>
        </div>
        
        {/* Profile photo column */}
        <div className="about__image-container">
          <img 
            src={`${basePath}/img/me_nyc.jpeg`}
            alt="Fitz Haile" 
            className="about__image"
          />
        </div>
      </div>
    </section>
  );
}

