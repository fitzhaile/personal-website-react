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
          Turn your data into <span className="hero__title-highlight">smarter decisions.</span>
        </div>

        {/* Value proposition subtitle */}
        <p className="hero__subtitle">
        I help people find the story their data tells and the meaning behind it — leading to more informed, confident decisions.
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

