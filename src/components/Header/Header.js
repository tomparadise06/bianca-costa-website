import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('FR');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const menuItems = {
    FR: ['ACCUEIL', 'MUSIQUE', 'VIDÉOS', 'TOURNÉE', 'GALERIE', 'BOUTIQUE', 'CONTACT'],
    EN: ['HOME', 'MUSIC', 'VIDEOS', 'TOUR', 'GALLERY', 'SHOP', 'CONTACT']
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="container">
        <nav>
          {/* Logo */}
          <a href="/" className="logo">
            BIANCA COSTA
          </a>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {menuItems[currentLanguage].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="language-switcher">
            <button
              onClick={() => setCurrentLanguage('FR')}
              className={`language-button ${currentLanguage === 'FR' ? 'active' : ''}`}
            >
              FR
            </button>
            <span style={{ color: 'white' }}>|</span>
            <button
              onClick={() => setCurrentLanguage('EN')}
              className={`language-button ${currentLanguage === 'EN' ? 'active' : ''}`}
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="mobile-menu-button"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            {menuItems[currentLanguage].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="mobile-menu-link"
                onClick={() => {
                  toggleMenu();
                }}
              >
                {item}
              </a>
            ))}
            <div style={{ marginTop: '2rem' }}>
              <button
                onClick={() => {
                  setCurrentLanguage('FR');
                  toggleMenu();
                }}
                className={`language-button ${currentLanguage === 'FR' ? 'active' : ''}`}
              >
                FR
              </button>
              <span style={{ color: 'white', margin: '0 0.5rem' }}>|</span>
              <button
                onClick={() => {
                  setCurrentLanguage('EN');
                  toggleMenu();
                }}
                className={`language-button ${currentLanguage === 'EN' ? 'active' : ''}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;