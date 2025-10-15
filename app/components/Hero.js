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
      {/* Simple decorative shapes for visual interest */}
      <div className="hero__shape hero__shape--1"></div>
      <div className="hero__shape hero__shape--2"></div>
      <div className="hero__shape hero__shape--3"></div>
      
      <div className="hero__container">
        {/* Main headline with highlighted text */}
        <h1 className="hero__title">
          Data-Driven Strategy <span className="hero__title-highlight">That works.</span>
        </h1>

        {/* Value proposition subtitle */}
        <p className="hero__subtitle">
          I help organizations turn their data into actionable insights—building analytics systems, measuring what matters, and making better decisions.
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

