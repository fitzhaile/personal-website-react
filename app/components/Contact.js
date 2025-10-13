/**
 * ===== CONTACT CTA COMPONENT =====
 * Call-to-action section before footer
 * Provides visual separation and encourages users to reach out
 * Also adds necessary vertical spacing for proper section scrolling
 */

import React from 'react';

/**
 * Contact CTA component
 * Simple section with heading, description, and button
 * 
 * @param {Object} props - Component props
 * @param {Function} props.handleContactTrigger - Function to open contact modal
 * @returns {JSX.Element} Contact CTA section
 */
export default function Contact({ handleContactTrigger }) {
  return (
    <section id="cta" className="contact">
      <div className="contact__container">
        {/* Section heading */}
        <h2 className="contact__title">Ready to Get Started?</h2>
        
        {/* Description text */}
        <p className="contact__subtitle">
          Let's discuss how data-driven insights can transform your organization.
        </p>
        
        {/* Action button */}
        <div className="contact__actions">
          <button onClick={handleContactTrigger} className="contact__button">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

