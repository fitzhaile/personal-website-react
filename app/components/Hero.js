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
  return (
    <section id="hero" className="hero">
      <div className="container container--hero">
        {/* Main headline with highlighted text */}
        <div className="hero__title">
          Make smarter, <span className="hero__title-highlight">data-driven decisions.</span>
        </div>

        {/* Value proposition subtitle */}
        <p className="hero__subtitle">
          I help organizations turn their data into actionable insights. Building analytics systems, measuring what matters, and making smarter decisions.
        </p>

        {/* Primary call-to-action button */}
        <button
          onClick={handleContactTrigger}
          className="hero__cta"
        >
          Let's Talk
        </button>
      </div>
    </section>
  );
}

