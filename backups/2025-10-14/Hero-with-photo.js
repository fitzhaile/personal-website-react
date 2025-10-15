/**
 * ===== HERO COMPONENT =====
 * Landing section with main headline, value proposition, and CTA button
 * First visible section on the homepage
 */

'use client'

/**
 * Hero component with headline and call-to-action
 * 
 * @param {Object} props - Component props
 * @param {Function} props.handleContactTrigger - Function to open contact modal
 * @returns {JSX.Element} Hero section
 */
export default function Hero({ handleContactTrigger }) {
  // Base path for images in production vs development
  const basePath = process.env.NODE_ENV === 'production' ? '/personal-website-react' : '';
  
  return (
    <section id="hero" className="hero">
      <div className="hero__container">
        {/* Profile photo - adds personal warmth */}
        <div className="hero__photo-container">
          <img 
            src={`${basePath}/img/IMG_2044.jpeg`}
            alt="Fitz Haile"
            className="hero__photo"
          />
        </div>

        {/* Content wrapper for text and CTA */}
        <div className="hero__content">
          {/* Main headline with highlighted text */}
          <h1 className="hero__title">
            Hi, I'm Fitz. <span className="hero__title-highlight">I help you make sense of your data.</span>
          </h1>

          {/* Value proposition subtitle */}
          <p className="hero__subtitle">
            As a Savannah-based consultant, I partner with organizations to build analytics systems that actually work—measuring what matters and turning information into clear, actionable decisions.
          </p>

          {/* Primary call-to-action button */}
          <button
            onClick={handleContactTrigger}
            className="hero__cta"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
}

