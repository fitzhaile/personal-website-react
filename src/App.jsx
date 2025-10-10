// Import React library and two important hooks:
// - useState: allows us to add state (data that can change) to our component
// - useEffect: allows us to run code when the component loads or when things change
import React, { useState, useEffect } from 'react';

// ===== COMPONENTS =====
// Components are reusable pieces of UI. Think of them like custom HTML tags.

/**
 * NavLink Component
 * 
 * This is a custom navigation link that:
 * 1. Smoothly scrolls to different sections on the page
 * 2. Updates the browser URL without refreshing the page
 * 3. Can be styled as either a regular link or a Call-To-Action (CTA) button
 * 
 * Props (inputs to this component):
 * - to: where the link should go (e.g., "/services")
 * - children: the text/content inside the link
 * - isCta: boolean (true/false) - should this look like a button?
 * - onClick: optional function to run when clicked
 * - className: additional CSS classes to apply
 */
const NavLink = ({ to, children, isCta = false, onClick, className = '' }) => {
    // handleClick runs when someone clicks the link
    const handleClick = (e) => {
        // Prevent the default link behavior (which would refresh the page)
        e.preventDefault();
        
        // Figure out which section to scroll to
        // If going to "/" (home), scroll to "hero" section
        // Otherwise, remove the "/" from the path (e.g., "/services" becomes "services")
        const targetId = to === '/' ? 'hero' : to.substring(1);
        
        // Find the HTML element with that ID on the page
        const targetElement = document.getElementById(targetId);

        // If we found the element, smoothly scroll to it
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Update the browser's URL bar without refreshing the page
        // This makes the back/forward browser buttons work properly
        try {
            window.history.pushState({}, '', to);
        } catch (error) {
            // If this fails (like in some restricted environments), log the error
            console.error("Failed to execute pushState. This is likely due to iframe security restrictions.", error);
        }
        
        // If there's an additional onClick function passed in (like to close the mobile menu),
        // run it now
        if (onClick) {
            onClick();
        }
    };

    // Return the actual link element that will be displayed
    // Now using BEM class names instead of Tailwind
    return (
        <a 
            href={to} 
            onClick={handleClick}
            className={`${isCta ? 'nav__link--cta' : 'nav__link'} ${className}`}
        >
            {children}
        </a>
    );
};

/**
 * ===== MAIN APP COMPONENT =====
 * 
 * This is the main component that contains the entire website.
 * Everything you see on the page is rendered by this component.
 */
const App = () => {
    // ===== STATE VARIABLES =====
    // State is data that can change over time in your app.
    // When state changes, React automatically re-renders the component to show the updates.
    // 
    // useState returns two things: [currentValue, functionToUpdateValue]
    
    // Track whether the mobile menu is open or closed (starts as false/closed)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    // Track whether the contact modal popup is showing (starts as false/hidden)
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Track whether the contact form has been submitted (starts as false)
    const [formSubmitted, setFormSubmitted] = useState(false);

    // ===== EVENT HANDLER FUNCTIONS =====
    // These functions run when users interact with the page (clicking, submitting forms, etc.)
    
    /**
     * Toggle Mobile Menu
     * Opens the menu if closed, closes it if open
     */
    const toggleMobileMenu = () => {
        // ! means "NOT" - so this flips the value (true becomes false, false becomes true)
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    /**
     * Close Modal
     * Hides the contact modal and resets the form submission status
     */
    const closeModal = () => {
        setIsModalOpen(false);
        setFormSubmitted(false);
    };

    /**
     * Submit Contact Form
     * Runs when user submits the contact form
     * In a real app, this would send data to a server
     */
    const submitContactForm = (e) => {
        // Prevent the form from refreshing the page (default form behavior)
        e.preventDefault();
        
        // Log to browser console (useful for debugging)
        console.log("Form submitted successfully!");
        
        // Mark the form as submitted (this will show a "Thank You" message)
        setFormSubmitted(true);
    };

    /**
     * Handle Contact Trigger
     * Opens the contact modal when any "Contact Us" or "Get Started" button is clicked
     */
    const handleContactTrigger = (e) => {
        // Only prevent default if an event was passed in
        if (e && e.preventDefault) e.preventDefault();
        
        // Show the modal
        setIsModalOpen(true);
        
        // Close mobile menu if it's open
        setIsMobileMenuOpen(false);
        
        // Update the URL to show /contact
        try {
            window.history.pushState({}, '', '/contact');
        } catch (error) {
            console.error("Failed to execute pushState on contact trigger.", error);
        }
    };

    // ===== USEEFFECT HOOK =====
    // useEffect runs code at specific times:
    // - When the component first loads (mounts)
    // - When specified dependencies change
    // - When the component is about to be removed (cleanup)
    //
    // The empty array [] at the end means: "only run this once when the component first loads"
    useEffect(() => {
        /**
         * Handle Location Change
         * This function runs when:
         * 1. The page first loads
         * 2. The user clicks the back/forward browser buttons
         */
        const handleLocationChange = () => {
            // Get the current URL path (e.g., "/services" or "/about")
            const path = window.location.pathname;
            
            // Convert the path to an element ID
            // If path is empty (just "/"), use "hero"
            // Otherwise remove the leading "/" (e.g., "/services" becomes "services")
            const targetId = path.substring(1) || 'hero';

            // Find the element on the page with this ID
            const targetElement = document.getElementById(targetId);

            // If we found the element...
            if (targetElement) {
                // Special case: if going to contact, show the modal instead of scrolling
                if (targetId === 'contact') {
                    setIsModalOpen(true);
                } else {
                    // For all other sections, smoothly scroll to them
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        // Listen for the back/forward browser button clicks
        // "popstate" is the event that fires when user uses browser navigation
        window.addEventListener('popstate', handleLocationChange);
        
        // Run once immediately when page loads to handle direct URL visits
        handleLocationChange();

        // CLEANUP FUNCTION (returned function)
        // This runs when the component is removed from the page
        // It removes the event listener to prevent memory leaks
        return () => {
            window.removeEventListener('popstate', handleLocationChange);
        };
    }, []); // Empty array = only run once on mount

    // ===== RETURN STATEMENT =====
    // Everything inside return() is JSX - it looks like HTML but it's actually JavaScript
    // React converts this into real HTML elements that display in the browser
    return (
        // Main container for the entire app
        // Now using BEM class name
        <div className="app">
            
            {/* ===== HEADER & NAVIGATION ===== */}
            {/* 
                This is the top navigation bar that stays visible while scrolling
                Using BEM class names for all elements
            */}
            <header className="header">
                {/* Container to center content and limit width on large screens */}
                <div className="header__container"> 
                    
                    {/* LOGO - clicking it takes you back to the top (hero section) */}
                    <a 
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                            window.history.pushState({}, '', '/');
                        }}
                        className="header__logo"
                    >
                        {/* Two-tone logo: "Fitzhugh" in green, "Consulting" in navy */}
                        <span className="header__logo-green">Fitzhugh</span>{' '}
                        <span className="header__logo-navy">Analytics</span>
                    </a>
                    
                    {/* DESKTOP NAVIGATION - only visible on medium+ screens */}
                    <nav className="nav">
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/about">About</NavLink>
                        {/* CTA (Call-To-Action) button styled differently */}
                        <NavLink 
                            to="/contact" 
                            isCta={true}
                            onClick={handleContactTrigger}
                            className="button"
                        >
                            Get Started
                        </NavLink>
                    </nav>
                    
                    {/* MOBILE MENU BUTTON (hamburger icon) - only shows on small screens */}
                    <button 
                        onClick={toggleMobileMenu} 
                        className="header__menu-button"
                    >
                        {/* SVG hamburger icon (three horizontal lines) */}
                        <svg className="header__menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {/* MOBILE MENU DROPDOWN - shows/hides based on isMobileMenuOpen state */}
                <div className={`mobile-menu ${isMobileMenuOpen ? '' : 'mobile-menu--hidden'}`}>
                    {/* Each link closes the menu when clicked */}
                    <NavLink to="/services" onClick={toggleMobileMenu} className="mobile-menu__link">Services</NavLink>
                    <NavLink to="/about" onClick={toggleMobileMenu} className="mobile-menu__link">About</NavLink>
                    <a 
                        href="/contact"
                        onClick={handleContactTrigger}
                        className="mobile-menu__link--cta"
                    >
                        Get Started
                    </a>
                </div>
            </header>

            {/* ===== MAIN CONTENT ===== */}
            <main className="main">
                {/* ===== HERO SECTION ===== 
                    This is the first big section visitors see with the main headline */}
                <section id="hero" className="hero">
                    {/* Container limits width and centers content */}
                    <div className="hero__container">
                        {/* Main headline */}
                        <h1 className="hero__title">
                            Unlock Your <span className="hero__title-highlight">Full Potential</span>.
                        </h1>
                        
                        {/* Subheadline/tagline */}
                        <p className="hero__subtitle">
                            Expert strategic guidance to transform challenges into measurable growth and sustainable success.
                        </p>
                        
                        {/* Primary Call-To-Action button */}
                        <button 
                            onClick={handleContactTrigger} 
                            className="hero__cta"
                        >
                            Schedule a Consultation
                        </button>
                    </div>
                </section>

                {/* ===== SERVICES SECTION ===== 
                    Displays the four main service offerings in a grid */}
                <section id="services" className="services">
                    <div className="services__container">
                        {/* Section title */}
                        <h2 className="services__title">Data-Driven Consulting Services</h2>
                        
                        {/* Section description */}
                        <p className="services__subtitle">
                            We specialize in transforming complex data challenges into clear, actionable strategies across four key pillars of organizational growth.
                        </p>

                        {/* GRID LAYOUT FOR SERVICE CARDS */}
                        <div className="services__grid">
                            {/* SERVICE CARDS - Using .map() to generate cards from an array
                                This is a common React pattern: create an array of data,
                                then use .map() to convert each item into JSX */}
                            {[
                                { title: "Google Analytics Strategy", content: "We specialize in end-to-end <strong>Google Analytics</strong> support, from working with engineers to build the necessary <strong>backend infrastructure</strong> for new platforms to performing deep <strong>acquisition and funnel analysis</strong> to inform campaign strategy." },
                                { title: "Data Governance & Quality", content: "We establish robust <strong>data collection standards</strong>, identify <strong>data quality issues</strong> within large databases, and implement processes for <strong>data cleaning</strong> and error discovery to ensure all insights are reliable and actionable." },
                                { title: "Fundraising & BI", content: "We leverage <strong>Tableau</strong> and advanced visualization techniques to analyze and understand client and caller characteristics. Additionally, we conduct <strong>industry and donor analysis</strong> and design targeted <strong>donor surveys</strong> to maximize fundraising effectiveness." },
                                { title: "Operational Tools & Workflow", content: "We focus on internal process health and adoption, <strong>advocating for and rolling out</strong> essential organization communication and project management tools across the company to streamline workflows and improve collaboration." },
                            ].map((service, index) => (
                                /* Each card in the grid
                                   key={index}: React requires a unique "key" for list items (helps React track changes) */
                                <div 
                                    key={index}
                                    className="service-card"
                                >
                                    {/* Service title */}
                                    <h3 className="service-card__title">{service.title}</h3>
                                    
                                    {/* Service description
                                        dangerouslySetInnerHTML: allows HTML tags in the content (like <strong>)
                                        Named "dangerous" because it can be a security risk if you use user input
                                        Safe here because we control the content */}
                                    <p className="service-card__content" dangerouslySetInnerHTML={{ __html: service.content }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== ABOUT SECTION ===== 
                    Two-column layout with text on left, image on right */}
                <section id="about" className="about">
                    {/* GRID LAYOUT - stacks vertically on mobile, side-by-side on large screens */}
                    <div className="about__container">
                        {/* LEFT COLUMN - Text content */}
                        <div className="about__content">
                            <h2 className="about__title">Hi, I'm Fitz</h2>
                            
                            {/* Company philosophy */}
                            <p className="about__text">
                                Fitzhugh Consulting was founded on the principle that the most effective advice is both <strong>strategic and practical</strong>. We don't just deliver a report; we partner with you to implement the changes and ensure they stick.
                            </p>
                            
                            {/* About the consultant */}
                            <p className="about__text">
                                Our lead consultant, <strong>Fitz Haile</strong>, brings over 15 years of experience across multiple industries, specializing in scalable growth and turnaround management.
                            </p>
                            
                            {/* "Learn more" style button (looks like a link with underline) */}
                            <button 
                                onClick={handleContactTrigger}
                                className="about__cta"
                            >
                                Give me a shout &rarr;
                            </button>
                        </div>
                        
                        {/* RIGHT COLUMN - Placeholder image
                            In a real site, you'd replace this with actual photos */}
                        <div className="about__image-container">
                            {/* Placeholder image from placehold.co
                                Using template strings to dynamically insert the navy color */}
                            <img 
                                src={`https://placehold.co/600x400/1E3A8A/ffffff?text=Professional+Placeholder`} 
                                alt="Professional Consulting Image" 
                                className="about__image"
                            />
                        </div>
                    </div>
                </section>

                {/* ===== CONTACT/CTA SECTION ===== 
                    Full-width navy section with contact options */}
                <section id="contact" className="contact">
                    <div className="contact__container">
                        {/* Call-to-action headline */}
                        <h2 className="contact__title">Ready to Elevate Your Business?</h2>
                        
                        {/* Supporting text */}
                        <p className="contact__subtitle">
                            Start a conversation today to explore how expert guidance can solve your toughest challenges.
                        </p>
                        
                        {/* Button container - stacked on mobile, side-by-side on small+ screens */}
                        <div className="contact__actions">
                            {/* Primary CTA - opens contact modal */}
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

            {/* ===== FOOTER ===== 
                Bottom of every page with copyright and social links */}
            <footer className="footer">
                <div className="footer__container">

                    <div className="footer__social">
                        <a href="https://www.linkedin.com/in/fitzhaile/" target="blank" className="footer__link">LinkedIn</a>
                    </div>
                    <p className="footer__copyright">&copy; 2025 Fitzhugh Consulting. All rights reserved.</p>
                </div>
            </footer>

            {/* ===== CONTACT FORM MODAL ===== 
                Popup overlay that appears when clicking "Get Started" or "Book a Call"
                
                CONDITIONAL RENDERING: {isModalOpen && (...)}
                This means: "only show this if isModalOpen is true"
                && is a logical AND operator - if left side is true, it returns the right side */}
            {isModalOpen && (
                // MODAL OVERLAY - dark semi-transparent background
                <div className="modal">
                    {/* MODAL CONTENT BOX - white box in center */}
                    <div className="modal__content">
                        
                        {/* CONDITIONAL CONTENT - show different things based on formSubmitted state
                            If form NOT submitted: show the form
                            If form IS submitted: show thank you message */}
                        {!formSubmitted ? (
                            // <> is a React Fragment - groups elements without adding extra HTML
                            <>
                                {/* CONTACT FORM VIEW */}
                                <h3 className="modal__title">Contact Me</h3>
                                
                                <p className="modal__description">
                                    Let me know what's on your mind. I'll be in touch shortly.
                                </p>
                                
                                {/* FORM - onSubmit calls our submitContactForm function */}
                                <form onSubmit={submitContactForm} className="modal__form">
                                    {/* Name input field */}
                                    <input 
                                        type="text" 
                                        placeholder="Your Name" 
                                        className="modal__input" 
                                    />
                                    
                                    {/* Email input field - browser validates email format */}
                                    <input 
                                        type="email" 
                                        placeholder="Your Email" 
                                        className="modal__input" 
                                    />
                                    
                                    {/* Message textarea - shows 4 lines initially */}
                                    <textarea 
                                        placeholder="Tell us about your project..." 
                                        rows="4" 
                                        className="modal__textarea" 
                                    />
                                    
                                    {/* Button container */}
                                    <div className="modal__actions">
                                        {/* Close button - closes modal without submitting */}
                                        <button 
                                            type="button" 
                                            onClick={closeModal} 
                                            className="modal__button modal__button--close"
                                        >
                                            Close
                                        </button>
                                        
                                        {/* Submit button - triggers form submission */}
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
                            // THANK YOU VIEW (shown after form submission)
                            <div className="modal__success">
                                {/* Success checkmark emoji - for accessibility */}
                                <p className="modal__success-icon" role="img" aria-label="Success">✅</p>
                                
                                <h3 className="modal__success-title">Thank You!</h3>
                                
                                <p className="modal__success-message">
                                    Your inquiry has been received. We will be in touch within 24 hours.
                                </p>
                                
                                {/* Close button that reloads the page
                                    window.location.reload(): refreshes the entire page */}
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
            )}
        </div>
    );
};

// EXPORT - makes this component available to import in other files
// This is how we use it in main.jsx
export default App;
