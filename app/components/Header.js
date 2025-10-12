'use client'

const basePath = process.env.NODE_ENV === 'production' ? '/personal-website-react' : '';

export default function Header({ 
  isMobileMenuOpen, 
  toggleMobileMenu, 
  handleNavClick, 
  handleContactTrigger 
}) {
  return (
    <header className="header">
      <div className="header__container">
        <a 
          href={`${basePath}/`}
          onClick={(e) => handleNavClick(e, 'hero', '/')}
          className="header__logo"
        >
          <span className="header__logo-green">Fitz</span>{' '}
          <span className="header__logo-navy">Haile</span>
        </a>
        
        <nav className="nav">
          <a href={`${basePath}/services`} onClick={(e) => handleNavClick(e, 'services', '/services')} className="nav__link">Services</a>
          <a href={`${basePath}/about`} onClick={(e) => handleNavClick(e, 'about', '/about')} className="nav__link">About</a>
          <a 
            href={`${basePath}/contact`}
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
    </header>
  );
}

