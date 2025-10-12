'use client'

export default function ContactModal({ 
  isModalOpen, 
  formSubmitted, 
  closeModal, 
  submitContactForm 
}) {
  if (!isModalOpen) return null;

  return (
    <div className="modal">
      <div className="modal__content">
        {!formSubmitted ? (
          <>
            <h3 className="modal__title">Contact Me</h3>
            
            <p className="modal__description">
              Let me know what's on your mind. I'll be in touch shortly.
            </p>
            
            <form onSubmit={submitContactForm} className="modal__form">
              <input
                type="text"
                placeholder="Your Name"
                className="modal__input"
                required
              />
              
              <input
                type="email"
                placeholder="Your Email"
                className="modal__input"
                required
              />
              
              <textarea
                placeholder="Tell us about your project..."
                rows="4"
                className="modal__textarea"
              />
              
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
          <div className="modal__success">
            <p className="modal__success-icon" role="img" aria-label="Success">✅</p>
            
            <h3 className="modal__success-title">Thank You!</h3>
            
            <p className="modal__success-message">
              Your inquiry has been received. We will be in touch within 24 hours.
            </p>
            
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

