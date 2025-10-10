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
              Unlock Your <span className="hero__title-highlight">Full Potential</span>.
            </h1>
            
            <p className="hero__subtitle">
              Expert strategic guidance to transform challenges into measurable growth and sustainable success.
            </p>
            
            <button 
              onClick={handleContactTrigger} 
              className="hero__cta"
            >
              Schedule a Consultation
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
                { title: "Google Analytics Strategy", content: "We specialize in end-to-end <strong>Google Analytics</strong> support, from working with engineers to build the necessary <strong>backend infrastructure</strong> for new platforms to performing deep <strong>acquisition and funnel analysis</strong> to inform campaign strategy." },
                { title: "Data Governance & Quality", content: "We establish robust <strong>data collection standards</strong>, identify <strong>data quality issues</strong> within large databases, and implement processes for <strong>data cleaning</strong> and error discovery to ensure all insights are reliable and actionable." },
                { title: "Fundraising & BI", content: "We leverage <strong>Tableau</strong> and advanced visualization techniques to analyze and understand client and caller characteristics. Additionally, we conduct <strong>industry and donor analysis</strong> and design targeted <strong>donor surveys</strong> to maximize fundraising effectiveness." },
                { title: "Operational Tools & Workflow", content: "We focus on internal process health and adoption, <strong>advocating for and rolling out</strong> essential organization communication and project management tools across the company to streamline workflows and improve collaboration." },
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
                src={`https://placehold.co/600x400/1E3A8A/ffffff?text=Professional+Placeholder`} 
                alt="Professional Consulting Image" 
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
          <div className="footer__social">
            <a href="https://www.linkedin.com/in/fitzhaile/" target="_blank" rel="noopener noreferrer" className="footer__link">LinkedIn</a>
          </div>
          <p className="footer__copyright">&copy; 2025 Fitzhugh Consulting. All rights reserved.</p>
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

