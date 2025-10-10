// Import React library and two important hooks:
// - useState: allows us to add state (data that can change) to our component
// - useEffect: allows us to run code when the component loads or when things change
import React, { useState, useEffect } from 'react';

// ===== COLOR CONSTANTS =====
// These are our brand colors stored as variables so we can reuse them throughout the app
// Using constants makes it easy to change colors site-wide in one place
const PRIMARY_NAVY = '#1E3A8A'; // Main brand color - a deep navy blue
const SECONDARY_GREEN = '#059669'; // Accent color - a modern emerald green
const BACKGROUND_LIGHT = '#f7f9fb'; // Subtle off-white background color

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
 * - style: optional custom CSS styles
 */
const NavLink = ({ to, children, isCta = false, onClick, style = {} }) => {
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
    return (
        <a 
            href={to} 
            onClick={handleClick}
            // className applies Tailwind CSS classes for styling
            // The backticks (`) allow us to use template strings with conditions
            className={`
                font-medium transition duration-300 
                ${isCta 
                    ? `px-4 py-2 text-white rounded-sm shadow-md hover:bg-blue-700`
                    : `hover:text-gray-800`
                }
            `}
            // Inline styles: if it's a CTA button, use navy background, otherwise transparent
            // ...style spreads any additional custom styles passed in
            style={{ backgroundColor: isCta ? PRIMARY_NAVY : 'transparent', ...style }}
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
        // Uses inline styles for font and background color
        // className adds Tailwind CSS utility classes
        <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: BACKGROUND_LIGHT }} className="text-gray-800 antialiased">
            
            {/* ===== HEADER & NAVIGATION ===== */}
            {/* 
                This is the top navigation bar that stays visible while scrolling
                - sticky: sticks to top when scrolling
                - top-0: no gap from top
                - z-50: appears above other content (higher z-index = on top)
            */}
            <header className="shadow-sm bg-white sticky top-0 z-50">
                {/* Container to center content and limit width on large screens */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20"> 
                    
                    {/* LOGO - clicking it takes you back to the top (hero section) */}
                    <NavLink 
                        to="/" 
                        className="font-extrabold tracking-tight"
                        style={{ fontSize: '2.5rem' }} // 40px font size
                    >
                        {/* Two-tone logo: "Ascend" in green, "Consulting" in navy */}
                        <span style={{ color: SECONDARY_GREEN }}>Ascend</span> <span style={{ color: PRIMARY_NAVY }} className="font-bold">Consulting</span>
                    </NavLink>
                    
                    {/* DESKTOP NAVIGATION - only visible on medium+ screens (md:flex)
                        hidden on mobile to save space */}
                    <nav className="hidden md:flex space-x-8 text-lg font-medium items-center">
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/about">About</NavLink>
                        {/* CTA (Call-To-Action) button styled differently */}
                        <NavLink 
                            to="/contact" 
                            isCta={true} // Makes this look like a button
                            onClick={handleContactTrigger} // Opens the contact modal
                        >
                            Get Started
                        </NavLink>
                    </nav>
                    
                    {/* MOBILE MENU BUTTON (hamburger icon)
                        Only shows on small screens (md:hidden = hidden on medium+ screens) */}
                    <button 
                        onClick={toggleMobileMenu} 
                        className="md:hidden p-2 rounded-lg text-gray-800 hover:bg-gray-100 transition duration-300"
                    >
                        {/* SVG hamburger icon (three horizontal lines) */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>

                {/* MOBILE MENU DROPDOWN
                    Shows/hides based on isMobileMenuOpen state
                    ${condition ? 'true-class' : 'false-class'} is a ternary operator */}
                <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100 py-2`}>
                    {/* Each link closes the menu when clicked (onClick={toggleMobileMenu}) */}
                    <NavLink to="/services" onClick={toggleMobileMenu} className="mobile-nav-link block px-4 py-2 text-base font-medium hover:bg-gray-50">Services</NavLink>
                    <NavLink to="/about" onClick={toggleMobileMenu} className="mobile-nav-link block px-4 py-2 text-base font-medium hover:bg-gray-50">About</NavLink>
                    <NavLink 
                        to="/contact" 
                        isCta={true} 
                        onClick={handleContactTrigger} // Closes menu AND opens modal
                        className="mobile-nav-link block px-4 py-2 mt-2 mx-4 text-center"
                    >
                        Get Started
                    </NavLink>
                </div>
            </header>

            {/* ===== MAIN CONTENT ===== */}
            <main>
                {/* ===== HERO SECTION ===== 
                    This is the first big section visitors see with the main headline
                    - id="hero": allows navigation links to scroll to this section
                    - py-20 md:py-32: padding top/bottom (more padding on medium+ screens)
                    - text-center: centers all text */}
                <section id="hero" className="py-20 md:py-32 text-center bg-white">
                    {/* Container limits width and centers content */}
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Main headline 
                            text-4xl: large text on mobile
                            md:text-6xl: even larger on medium+ screens */}
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
                            Unlock Your <span style={{ color: SECONDARY_GREEN }}>Full Potential</span>.
                        </h1>
                        
                        {/* Subheadline/tagline */}
                        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Expert strategic guidance to transform challenges into measurable growth and sustainable success.
                        </p>
                        
                        {/* Primary Call-To-Action button
                            hover:scale-105: slightly grows on hover for interactive feedback
                            transform: needed for scale to work */}
                        <button 
                            onClick={handleContactTrigger} 
                            className="inline-block px-10 py-4 text-xl font-semibold text-white rounded-sm shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
                            style={{ backgroundColor: PRIMARY_NAVY, transition: 'background-color 0.3s' }}
                        >
                            Schedule a Consultation
                        </button>
                    </div>
                </section>

                {/* ===== SERVICES SECTION ===== 
                    Displays the four main service offerings in a grid */}
                <section id="services" className="py-16 md:py-20" style={{ backgroundColor: BACKGROUND_LIGHT }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Section title */}
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Data-Driven Consulting Services</h2>
                        
                        {/* Section description */}
                        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            We specialize in transforming complex data challenges into clear, actionable strategies across four key pillars of organizational growth.
                        </p>

                        {/* GRID LAYOUT FOR SERVICE CARDS
                            grid-cols-1: 1 column on mobile (stacked)
                            sm:grid-cols-2: 2 columns on small screens
                            lg:grid-cols-4: 4 columns on large screens
                            gap-8: space between cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                                   key={index}: React requires a unique "key" for list items (helps React track changes)
                                   hover:-translate-y-1: lifts the card up slightly on hover */
                                <div 
                                    key={index}
                                    className="bg-white p-8 rounded-2xl shadow-lg border-t-4 hover:shadow-2xl transition duration-500 transform hover:-translate-y-1"
                                    style={{ borderColor: PRIMARY_NAVY }}
                                >
                                    {/* Service title */}
                                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                    
                                    {/* Service description
                                        dangerouslySetInnerHTML: allows HTML tags in the content (like <strong>)
                                        Named "dangerous" because it can be a security risk if you use user input
                                        Safe here because we control the content */}
                                    <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.content }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== ABOUT SECTION ===== 
                    Two-column layout with text on left, image on right */}
                <section id="about" className="py-12 md:py-16">
                    {/* GRID LAYOUT
                        grid-cols-1: stacks vertically on mobile
                        lg:grid-cols-2: side-by-side on large screens
                        items-center: vertically aligns items in the middle */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* LEFT COLUMN - Text content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Ascend Difference</h2>
                            
                            {/* Company philosophy */}
                            <p className="text-lg text-gray-600 mb-6">
                                Ascend Consulting was founded on the principle that the most effective advice is both <strong>strategic and practical</strong>. We don't just deliver a report; we partner with you to implement the changes and ensure they stick.
                            </p>
                            
                            {/* About the consultant */}
                            <p className="text-lg text-gray-600 mb-6">
                                Our lead consultant, <strong>Alex Reed</strong>, brings over 15 years of experience across multiple industries, specializing in scalable growth and turnaround management.
                            </p>
                            
                            {/* "Learn more" style button (looks like a link with underline) */}
                            <button 
                                onClick={handleContactTrigger}
                                className="inline-block text-lg font-semibold border-b-2 hover:border-gray-800 transition duration-300"
                                style={{ color: SECONDARY_GREEN, borderColor: SECONDARY_GREEN, background: 'transparent' }}
                            >
                                Meet Alex and the Team &rarr;
                            </button>
                        </div>
                        
                        {/* RIGHT COLUMN - Placeholder image
                            In a real site, you'd replace this with actual photos */}
                        <div className="rounded-2xl overflow-hidden shadow-2xl h-80 w-full bg-gray-200 flex items-center justify-center">
                            {/* Placeholder image from placehold.co
                                Using template strings to dynamically insert the navy color */}
                            <img 
                                src={`https://placehold.co/600x400/${PRIMARY_NAVY.substring(1)}/ffffff?text=Professional+Placeholder`} 
                                alt="Professional Consulting Image" 
                                className="w-full h-full object-cover opacity-80"
                            />
                        </div>
                    </div>
                </section>

                {/* ===== CONTACT/CTA SECTION ===== 
                    Full-width navy section with contact options */}
                <section id="contact" className="py-20 md:py-24 text-white border-b-2 border-white" style={{ backgroundColor: PRIMARY_NAVY }}>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        {/* Call-to-action headline */}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Business?</h2>
                        
                        {/* Supporting text */}
                        <p className="text-xl opacity-90 mb-8">
                            Start a conversation today to explore how expert guidance can solve your toughest challenges.
                        </p>
                        
                        {/* Button container
                            flex-col on mobile (stacked)
                            sm:flex-row on small+ screens (side-by-side) */}
                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            {/* Primary CTA - opens contact modal */}
                            <button 
                                onClick={handleContactTrigger}
                                className="px-8 py-3 text-xl font-semibold bg-white text-gray-800 rounded-sm shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
                            >
                                Book a Free Discovery Call
                            </button>
                            
                            {/* Secondary CTA - email link (actually opens user's email app) */}
                            <a href="mailto:info@ascendconsulting.com" className="px-8 py-3 text-xl font-semibold text-white border-2 border-white rounded-sm shadow-lg hover:bg-white hover:text-gray-800 transition duration-300 transform hover:scale-105">
                                Send an Email
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* ===== FOOTER ===== 
                Bottom of every page with copyright and social links */}
            <footer className="text-white py-10" style={{ backgroundColor: SECONDARY_GREEN }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Copyright text
                        &copy; is the HTML entity for the © symbol */}
                    <p className="text-sm">&copy; 2025 Ascend Consulting. All rights reserved.</p>
                    
                    {/* Social media links container */}
                    <div className="mt-4 flex justify-center space-x-6">
                        {/* Social Links
                            href="#" is a placeholder - you'd replace with actual URLs
                            In a real site, these would link to LinkedIn, Twitter, etc. */}
                        <a href="#" className="text-gray-200 hover:text-white transition duration-300">LinkedIn</a>
                        <a href="#" className="text-gray-200 hover:text-white transition duration-300">Twitter</a>
                    </div>
                </div>
            </footer>

            {/* ===== CONTACT FORM MODAL ===== 
                Popup overlay that appears when clicking "Get Started" or "Book a Call"
                
                CONDITIONAL RENDERING: {isModalOpen && (...)}
                This means: "only show this if isModalOpen is true"
                && is a logical AND operator - if left side is true, it returns the right side */}
            {isModalOpen && (
                // MODAL OVERLAY - dark semi-transparent background
                // fixed: positioned relative to the viewport (stays in place when scrolling)
                // inset-0: stretches to cover entire screen (top:0, right:0, bottom:0, left:0)
                // z-[99]: very high z-index so it appears on top of everything
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[99]">
                    {/* MODAL CONTENT BOX - white box in center */}
                    <div id="contact-form-content" className="bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full m-4">
                        
                        {/* CONDITIONAL CONTENT - show different things based on formSubmitted state
                            If form NOT submitted: show the form
                            If form IS submitted: show thank you message */}
                        {!formSubmitted ? (
                            // <> is a React Fragment - groups elements without adding extra HTML
                            <>
                                {/* CONTACT FORM VIEW */}
                                <h3 className="text-2xl font-bold mb-4" style={{ color: SECONDARY_GREEN }}>Contact Us</h3>
                                
                                <p className="text-gray-700 mb-6">
                                    We'll be in touch shortly to discuss your needs. Please submit your information.
                                </p>
                                
                                {/* FORM - onSubmit calls our submitContactForm function */}
                                <form onSubmit={submitContactForm}>
                                    {/* Name input field
                                        w-full: full width of container
                                        focus:ring-blue-800: adds blue glow when focused/clicked */}
                                    <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-blue-800 focus:border-blue-800" />
                                    
                                    {/* Email input field
                                        type="email": browser validates email format */}
                                    <input type="email" placeholder="Your Email" className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:ring-blue-800 focus:border-blue-800" />
                                    
                                    {/* Message textarea
                                        rows="4": shows 4 lines of text initially */}
                                    <textarea placeholder="Tell us about your project..." rows="4" className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:ring-blue-800 focus:border-blue-800" />
                                    
                                    {/* Button container */}
                                    <div className="flex justify-end space-x-3">
                                        {/* Close button
                                            type="button": prevents form submission
                                            onClick={closeModal}: closes the modal without submitting */}
                                        <button type="button" onClick={closeModal} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-200">Close</button>
                                        
                                        {/* Submit button
                                            type="submit": triggers form submission (runs onSubmit) */}
                                        <button type="submit" className="px-4 py-2 text-white rounded-lg hover:bg-blue-700 transition duration-200" style={{ backgroundColor: PRIMARY_NAVY }}>Submit Inquiry</button>
                                    </div>
                                </form>
                            </>
                        ) : (
                            // THANK YOU VIEW (shown after form submission)
                            <div className="text-center py-8">
                                {/* Success checkmark emoji
                                    role="img": tells screen readers this is an image
                                    aria-label: describes the image for accessibility */}
                                <p className="text-3xl mb-4" role="img" aria-label="Success">✅</p>
                                
                                <h3 className="text-2xl font-bold mb-3" style={{ color: PRIMARY_NAVY }}>Thank You!</h3>
                                
                                <p className="text-gray-700 mb-6">Your inquiry has been received. We will be in touch within 24 hours.</p>
                                
                                {/* Close button that reloads the page
                                    window.location.reload(): refreshes the entire page
                                    This resets all state back to initial values */}
                                <button type="button" onClick={() => window.location.reload()} className="px-4 py-2 text-white rounded-lg hover:bg-blue-700 transition duration-200" style={{ backgroundColor: PRIMARY_NAVY }}>Close</button>
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

