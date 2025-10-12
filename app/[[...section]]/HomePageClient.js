'use client'

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

// Base path for GitHub Pages deployment
const basePath = process.env.NODE_ENV === 'production' ? '/personal-website-react' : '';

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
    window.history.pushState({}, '', `${basePath}/contact`);
  };

  const handleNavClick = (e, targetId, path) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState({}, '', `${basePath}${path}`);
    }
  };

  return (
    <div className="app">
      <Header 
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        handleNavClick={handleNavClick}
        handleContactTrigger={handleContactTrigger}
      />

      <main className="main">
        <Hero handleContactTrigger={handleContactTrigger} />
        <Services />
        <About handleContactTrigger={handleContactTrigger} />
        <Contact handleContactTrigger={handleContactTrigger} />
      </main>

      <Footer />

      <ContactModal 
        isModalOpen={isModalOpen}
        formSubmitted={formSubmitted}
        closeModal={closeModal}
        submitContactForm={submitContactForm}
      />
    </div>
  );
}
