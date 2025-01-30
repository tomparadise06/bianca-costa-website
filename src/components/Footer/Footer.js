import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>BIANCA COSTA</h3>
          <p>© 2024 Tous droits réservés</p>
        </div>

        <div className="footer-links">
          <h4>LIENS RAPIDES</h4>
          <nav>
            <a href="#music">Musique</a>
            <a href="#videos">Vidéos</a>
            <a href="#tour">Tour</a>
            <a href="#shop">Shop</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="footer-newsletter">
          <h4>NEWSLETTER</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Votre email" />
            <button type="submit">S'INSCRIRE</button>
          </form>
        </div>

        <div className="footer-social">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-spotify"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;