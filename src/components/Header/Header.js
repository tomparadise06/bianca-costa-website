import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './Header.css';

function Header() {
  const { language, switchLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerClick = () => setIsOpen(!isOpen);

  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">{t.hero.title}</Link>
      </div>
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#hero">{t.header.home}</a>
        <a href="#music">{t.header.music}</a>
        <a href="#videos">{t.header.videos}</a>
        <a href="#concerts">{t.header.concerts}</a>
        <a href="#gallery">{t.header.gallery}</a>
        <a href="#shop">{t.header.shop}</a>
        <a href="#contact">{t.header.contact}</a>
      </nav>
      <div className="language-switch">
        <button onClick={() => switchLanguage('fr')} className={language === 'fr' ? 'active' : ''}>FR</button>
        <button onClick={() => switchLanguage('en')} className={language === 'en' ? 'active' : ''}>EN</button>
      </div>
      <div className="burger" onClick={handleBurgerClick}>
        <span />
        <span />
        <span />
      </div>
    </header>
  );
}

export default Header;
