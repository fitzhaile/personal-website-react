import React from 'react';

export default function Contact({ handleContactTrigger }) {
  return (
    <section id="cta" className="contact">
      <div className="contact__container">
        <h2 className="contact__title">Ready to Get Started?</h2>
        <p className="contact__subtitle">
          Let's discuss how data-driven insights can transform your organization.
        </p>
        <div className="contact__actions">
          <button onClick={handleContactTrigger} className="contact__button">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

