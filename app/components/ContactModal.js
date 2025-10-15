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
            <h3 className="modal__title">Let's Connect</h3>
            
            {/* Introduction text */}
            <p className="modal__description">
              Drop me a note about what you're working on—I usually respond within a day.
            </p>
            
            {/* Contact form */}
            <form onSubmit={submitContactForm} className="modal__form">
              {/* Name input */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="modal__input"
                required
              />
              
              {/* Email input */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="modal__input"
                required
              />
              
              {/* Message textarea */}
              <textarea
                name="message"
                placeholder="What's on your mind? Tell me about your data challenges..."
                rows="4"
                className="modal__textarea"
                required
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
            <h3 className="modal__success-title">Thanks for reaching out!</h3>
            
            {/* Success message */}
            <p className="modal__success-message">
              I got your message and I'll get back to you within a day. Looking forward to chatting!
            </p>
            
            {/* Close button */}
            <button
              type="button"
              onClick={closeModal}
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

