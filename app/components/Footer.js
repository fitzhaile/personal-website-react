/**
 * ===== FOOTER COMPONENT =====
 * Site footer with contact links and copyright
 * Displays LinkedIn profile and email address with icons
 */

'use client'

/**
 * Footer component with social links and copyright
 * Uses id="contact" for navigation targeting
 * 
 * @returns {JSX.Element} Footer section
 */
export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        {/* Contact links section */}
        <div className="footer__content">
          {/* LinkedIn profile link */}
          <div className="footer__contact">
            <a 
              href="https://www.linkedin.com/in/fitzhaile/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer__link"
            >
              <svg className="footer__icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
          
          {/* Email contact link */}
          <div className="footer__contact">
            <a href="mailto:fitz@fitzhaile.com" className="footer__link">
              <svg className="footer__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>fitz@fitzhaile.com</span>
            </a>
          </div>
        </div>
        
        {/* Copyright notice */}
        <div className="footer__bottom">
          <p className="footer__copyright">&copy; {new Date().getFullYear()} Fitz Haile. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

