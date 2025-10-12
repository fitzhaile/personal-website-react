'use client'

export default function Hero({ handleContactTrigger }) {
  return (
    <section id="hero" className="hero">
      <div className="hero__container">
        <h1 className="hero__title">
          Data-Driven Strategy <span className="hero__title-highlight">That works.</span>
        </h1>

        <p className="hero__subtitle">
          I help organizations turn their data into actionable insights—building analytics systems, measuring what matters, and making better decisions.
        </p>

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

