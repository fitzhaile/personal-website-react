/**
 * ===== HOME PAGE CLIENT COMPONENT =====
 * Main client-side component that handles all interactive functionality
 * Manages state, navigation, modal interactions, and smooth scrolling
 * 
 * This component receives the section prop from the server component
 * and handles all client-side routing and state management
 */

'use client'

import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

// Base path for GitHub Pages deployment
// In development: empty string
// In production: '/personal-website-react'
const basePath = process.env.NODE_ENV === 'production' ? '/personal-website-react' : '';

/**
 * HomePageClient component manages the entire application state and interactions
 * 
 * @param {Object} props - Component props
 * @param {string} props.section - Current section from URL params (home, services, about, contact)
 * @returns {JSX.Element} Complete single-page application
 */
export default function HomePageClient({ section }) {
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Contact modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  /**
   * Effect: Handle section-based scrolling and modal opening
   * Runs when the section prop changes from URL navigation
   */
  useEffect(() => {
    // Map 'home' to 'hero' section ID
    const targetId = section === 'home' ? 'hero' : section;
    
    // Contact section opens modal instead of scrolling
    if (section === 'contact') {
      setIsModalOpen(true);
    } else {
      // Smooth scroll to the target section
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [section]);

  /**
   * Toggle mobile navigation menu visibility
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  /**
   * Close contact modal and reset form submission state
   */
  const closeModal = () => {
    setIsModalOpen(false);
    setFormSubmitted(false);
    // Navigate back to home page
    window.history.pushState({}, '', `${basePath}/`);
  };

  /**
   * Handle contact form submission
   * Currently logs to console and shows success message
   * 
   * @param {Event} e - Form submit event
   */
  const submitContactForm = async (e) => {
    e.preventDefault();
    
    try {
      // Replace these with your EmailJS credentials
      await emailjs.sendForm(
        'service_c55tz7q',      // Get from EmailJS dashboard
        'template_ah3wpom',     // Get from EmailJS dashboard
        e.target,
        'RO8Qhf_Wq9ydawbyo'       // Get from EmailJS dashboard
      );
      
      console.log("Email sent successfully!");
      setFormSubmitted(true);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again or email me directly at fitz@fitzhaile.com');
    }
  };

  /**
   * Open contact modal and update URL to /contact
   * Closes mobile menu if open
   * 
   * @param {Event} e - Click event (optional)
   */
  const handleContactTrigger = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsModalOpen(true);
    setIsMobileMenuOpen(false);
    // Update browser URL without page reload
    window.history.pushState({}, '', `${basePath}/contact`);
  };

  /**
   * Handle navigation link clicks
   * Performs smooth scroll and updates URL without page reload
   * 
   * @param {Event} e - Click event
   * @param {string} targetId - ID of the target section element
   * @param {string} path - URL path to update in browser
   */
  const handleNavClick = (e, targetId, path) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(targetId);
    if (element) {
      // Smooth scroll to section
      element.scrollIntoView({ behavior: 'smooth' });
      // Update browser URL without page reload
      window.history.pushState({}, '', `${basePath}${path}`);
    }
  };

  return (
    <div className="app">
      {/* Sticky header with navigation */}
      <Header 
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        handleNavClick={handleNavClick}
        handleContactTrigger={handleContactTrigger}
      />

      {/* Main content sections */}
      <main className="main">
        <Hero handleContactTrigger={handleContactTrigger} />
        <Services />
        <About handleContactTrigger={handleContactTrigger} />
        <Contact handleContactTrigger={handleContactTrigger} />
      </main>

      {/* Footer with contact links */}
      <Footer />

      {/* Contact modal overlay */}
      <ContactModal 
        isModalOpen={isModalOpen}
        formSubmitted={formSubmitted}
        closeModal={closeModal}
        submitContactForm={submitContactForm}
      />
    </div>
  );
}
