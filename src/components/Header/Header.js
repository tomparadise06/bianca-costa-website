import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [currentLanguage, setCurrentLanguage] = useState('FR');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav-container">
        <a href="/" className="logo">BIANCA COSTA</a>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#music">MUSIQUE</a>
          <a href="#videos">VIDÉOS</a>
          <a href="#tour">TOUR</a>
          <a href="#gallery">GALERIE</a>
          <a href="#social">SOCIAL</a>
          <a href="#shop">SHOP</a>
          <a href="#contact">CONTACT</a>
        </div>

        <div className="language-switcher">
          {['FR', 'PT', 'EN'].map(lang => (
            <button
              key={lang}
              onClick={() => setCurrentLanguage(lang)}
              className={`lang-btn ${currentLanguage === lang ? 'active' : ''}`}
            >
              {lang}
            </button>
          ))}
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}

export default Header;