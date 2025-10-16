/**
 * ===== HEADER COMPONENT =====
 * Sticky header with logo, desktop navigation, and mobile menu
 * Handles navigation between sections with smooth scrolling
 */

'use client'

// Base path for GitHub Pages deployment (empty for custom domain)
const basePath = '';

/**
 * Header component with responsive navigation
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isMobileMenuOpen - Whether mobile menu is currently visible
 * @param {Function} props.toggleMobileMenu - Function to toggle mobile menu visibility
 * @param {Function} props.handleNavClick - Function to handle section navigation
 * @param {Function} props.handleContactTrigger - Function to open contact modal
 * @returns {JSX.Element} Header with navigation
 */
export default function Header({ 
  isMobileMenuOpen, 
  toggleMobileMenu, 
  handleNavClick, 
  handleContactTrigger 
}) {
  return (
    <header className="header">
      <div className="container container--header">
        {/* Logo with two-tone styling - H1 for SEO */}
        <h1 className="header__logo">
          <a 
            href={`${basePath}/`}
            onClick={(e) => handleNavClick(e, 'hero', '/')}
          >
            <span className="header__logo-link-text header__logo-link-text--first-part" >Fitz</span>{' '}
            <span className="header__logo-link-text header__logo-link-text--second-part">Haile</span>
          </a>
        </h1>
        
        {/* Desktop navigation */}
        <nav className="nav">
          <a href={`${basePath}/services`} onClick={(e) => handleNavClick(e, 'services', '/services')} className="nav__link">Services</a>
          <a href={`${basePath}/about`} onClick={(e) => handleNavClick(e, 'about', '/about')} className="nav__link">About</a>
          <a 
            href={`${basePath}/contact`}
            onClick={handleContactTrigger}
            className="nav__link--cta button button--sm"
          >
            Get Started
          </a>
        </nav>
        
        {/* Mobile menu hamburger button */}
        <button 
          onClick={toggleMobileMenu} 
          className="header__menu-button"
          aria-label="Toggle mobile menu"
        >
          <svg className="header__menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile navigation menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? '' : 'mobile-menu--hidden'}`}>
        <div className="mobile-menu__content">
          <div className="mobile-menu__inner">
            <a href={`${basePath}/services`} onClick={(e) => handleNavClick(e, 'services', '/services')} className="mobile-menu__link">Services</a>
            <a href={`${basePath}/about`} onClick={(e) => handleNavClick(e, 'about', '/about')} className="mobile-menu__link">About</a>
            <a 
              href={`${basePath}/contact`}
              onClick={handleContactTrigger}
              className="mobile-menu__link--cta"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

