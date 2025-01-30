import React, { useState } from 'react';
import './Header.css';

const Header = ({ currentLanguage, setCurrentLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
    closeMenu();
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="#home" onClick={closeMenu}>BIANCA COSTA</a>
        </div>

        <button
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger"></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#music" onClick={closeMenu}>Music</a></li>
            <li><a href="#concerts" onClick={closeMenu}>Concerts</a></li>
            <li><a href="#gallery" onClick={closeMenu}>Gallery</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>

          <div className="language-selector">
            <button
              className={currentLanguage === 'fr' ? 'active' : ''}
              onClick={() => handleLanguageChange('fr')}
            >
              FR
            </button>
            <button
              className={currentLanguage === 'en' ? 'active' : ''}
              onClick={() => handleLanguageChange('en')}
            >
              EN
            </button>
            <button
              className={currentLanguage === 'pt' ? 'active' : ''}
              onClick={() => handleLanguageChange('pt')}
            >
              PT
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="menu-overlay" onClick={closeMenu}></div>
        )}
      </div>
    </header>
  );
};

export default Header;