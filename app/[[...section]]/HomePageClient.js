'use client'

import React, { useState, useEffect } from 'react';

export default function HomePageClient({ section }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Scroll to section on mount or when section changes
  useEffect(() => {
    const targetId = section === 'home' ? 'hero' : section;
    
    if (section === 'contact') {
      setIsModalOpen(true);
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [section]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormSubmitted(false);
  };

  const submitContactForm = (e) => {
    e.preventDefault();
    console.log("Form submitted successfully!");
    setFormSubmitted(true);
  };

  const handleContactTrigger = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsModalOpen(true);
    setIsMobileMenuOpen(false);
    window.history.pushState({}, '', '/contact');
  };

  const handleNavClick = (e, targetId, path) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState({}, '', path);
    }
  };

  return (
    <div className="app">
      {/* HEADER & NAVIGATION */}
      <header className="header">
        <div className="header__container">
          <a 
            href="/"
            onClick={(e) => handleNavClick(e, 'hero', '/')}
            className="header__logo"
          >
            <span className="header__logo-green">Fitzhugh</span>{' '}
            <span className="header__logo-navy">Analytics</span>
          </a>
          
          <nav className="nav">
            <a href="/services" onClick={(e) => handleNavClick(e, 'services', '/services')} className="nav__link">Services</a>
            <a href="/about" onClick={(e) => handleNavClick(e, 'about', '/about')} className="nav__link">About</a>
            <a 
              href="/contact" 
              onClick={handleContactTrigger}
              className="nav__link--cta button"
            >
              Get Started
            </a>
          </nav>
          
          <button 
            onClick={toggleMobileMenu} 
            className="header__menu-button"
          >
            <svg className="header__menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <div className={`mobile-menu ${isMobileMenuOpen ? '' : 'mobile-menu--hidden'}`}>
          <a href="/services" onClick={(e) => handleNavClick(e, 'services', '/services')} className="mobile-menu__link">Services</a>
          <a href="/about" onClick={(e) => handleNavClick(e, 'about', '/about')} className="mobile-menu__link">About</a>
          <a 
            href="/contact"
            onClick={handleContactTrigger}
            className="mobile-menu__link--cta"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="main">
        {/* HERO SECTION */}
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

        {/* SERVICES SECTION */}
        <section id="services" className="services">
          <div className="services__container">
            <h2 className="services__title">Data-Driven Consulting Services</h2>
            
            <p className="services__subtitle">
              We specialize in transforming complex data challenges into clear, actionable strategies across four key pillars of organizational growth.
            </p>

            <div className="services__grid">
              {[
                { title: "Research & Insight Development", content: "<p>Turned data into direction — uncovering patterns, opportunities, and actionable insights.</p><ul><li>Conducted industry and donor analysis to identify sector-based fundraising potential.</li><li>Designed donor surveys to inform pricing and engagement strategies.</li><li>Analyzed caller characteristics and behavior with Tableau to improve service outcomes.</li></ul>" },
                { title: "Google Analytics & Measurement", content: "<p>Measured what matters, translating web and campaign data into meaningful results.</p><ul><li>Measured campaign performance via acquisition and funnel analysis in Google Analytics.</li><li>Built backend Google Analytics infrastructure for a new fundraising platform.</li><li>Created performance reports to guide marketing and outreach decisions.</li></ul>" },
                { title: "Data Management & Quality Control", content: "<p>Ensured clean, consistent, and reliable data across complex organizational systems.</p><ul><li>Identified and corrected data quality issues in large, multi-source databases.</li><li>Developed and enforced consistent data collection and entry standards.</li><li>Managed and refined datasets to support accurate and repeatable analysis.</li></ul>" },
                { title: "Systems & Process Optimization", content: "<p>Improved how teams work by aligning tools, communication, and workflows for better outcomes.</p><ul><li>Advocated for and implemented communication and project management tools.</li><li>Improved data workflows to strengthen cross-department collaboration.</li><li>Streamlined reporting processes to reduce errors and improve efficiency.</li></ul>" },
              ].map((service, index) => (
                <div 
                  key={index}
                  className="service-card"
                >
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__content" dangerouslySetInnerHTML={{ __html: service.content }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="about">
          <div className="about__container">
            <div className="about__content">
              <h2 className="about__title">Hi, I'm Fitz</h2>
              
              <p className="about__text">
                Fitzhugh Consulting was founded on the principle that the most effective advice is both <strong>strategic and practical</strong>. We don't just deliver a report; we partner with you to implement the changes and ensure they stick.
              </p>
              
              <p className="about__text">
                Our lead consultant, <strong>Fitz Haile</strong>, brings over 15 years of experience across multiple industries, specializing in scalable growth and turnaround management.
              </p>
              
              <button 
                onClick={handleContactTrigger}
                className="about__cta"
              >
                Give me a shout &rarr;
              </button>
            </div>
            
            <div className="about__image-container">
              <img 
                src="/img/IMG_2044.jpeg"
                alt="Fitz Haile" 
                className="about__image"
              />
            </div>
          </div>
        </section>

        {/* CONTACT/CTA SECTION */}
        <section id="contact" className="contact">
          <div className="contact__container">
            <h2 className="contact__title">Ready to Elevate Your Business?</h2>
            
            <p className="contact__subtitle">
              Start a conversation today to explore how expert guidance can solve your toughest challenges.
            </p>
            
            <div className="contact__actions">
              <button 
                onClick={handleContactTrigger}
                className="contact__button"
              >
                Book a Free Discovery Call
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__content">
            <div className="footer__contact">
              <a href="mailto:fitz@fitzhughanalytics.com" className="footer__link">
                <svg className="footer__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>fitz@fitzhughanalytics.com</span>
              </a>
            </div>
            
            <div className="footer__contact">
              <a href="https://www.linkedin.com/in/fitzhaile/" target="_blank" rel="noopener noreferrer" className="footer__link">
                <svg className="footer__icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
            
            <div className="footer__contact">
              <a href="tel:+15555551234" className="footer__link">
                <svg className="footer__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>(555) 555-1234</span>
              </a>
            </div>
          </div>
          
          <div className="footer__bottom">
            <p className="footer__copyright">&copy; 2025 Fitzhugh Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* CONTACT FORM MODAL */}
      {isModalOpen && (
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
                    required
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
                  onClick={closeModal} 
                  className="modal__button modal__button--submit"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

