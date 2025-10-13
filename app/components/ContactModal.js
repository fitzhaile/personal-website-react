/**
 * ===== CONTACT MODAL COMPONENT =====
 * Modal overlay with contact form
 * Shows form initially, then success message after submission
 * Appears when user clicks any "Get Started" or "Let's Talk" button
 */

'use client'

/**
 * ContactModal component manages the contact form overlay
 * Conditionally renders form or success state based on submission status
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isModalOpen - Whether modal is currently visible
 * @param {boolean} props.formSubmitted - Whether form has been submitted successfully
 * @param {Function} props.closeModal - Function to close modal and reset state
 * @param {Function} props.submitContactForm - Function to handle form submission
 * @returns {JSX.Element|null} Modal overlay or null if not open
 */
export default function ContactModal({ 
  isModalOpen, 
  formSubmitted, 
  closeModal, 
  submitContactForm 
}) {
  // Don't render anything if modal is closed
  if (!isModalOpen) return null;

  return (
    <div className="modal">
      <div className="modal__content">
        {/* Show contact form if not yet submitted */}
        {!formSubmitted ? (
          <>
            {/* Modal heading */}
            <h3 className="modal__title">Give me a shout</h3>
            
            {/* Introduction text */}
            <p className="modal__description">
              Let me know what's on your mind. I'll be in touch shortly.
            </p>
            
            {/* Contact form */}
            <form onSubmit={submitContactForm} className="modal__form">
              {/* Name input */}
              <input
                type="text"
                placeholder="Your Name"
                className="modal__input"
                required
              />
              
              {/* Email input */}
              <input
                type="email"
                placeholder="Your Email"
                className="modal__input"
                required
              />
              
              {/* Message textarea */}
              <textarea
                placeholder="Tell us about your project..."
                rows="4"
                className="modal__textarea"
              />
              
              {/* Form action buttons */}
              <div className="modal__actions">
                <button
                  type="button"
                  onClick={closeModal}
                  className="modal__button modal__button--close"
                >
                  Close
                </button>
                
                <button
                  type="submit"
                  className="modal__button modal__button--submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        ) : (
          /* Show success message after form submission */
          <div className="modal__success">
            {/* Success heading */}
            <h3 className="modal__success-title">Thank You!</h3>
            
            {/* Success message */}
            <p className="modal__success-message">
              Your inquiry has been received. We will be in touch within 24 hours.
            </p>
            
            {/* Close button (reloads page to reset state) */}
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="modal__button modal__button--submit"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

