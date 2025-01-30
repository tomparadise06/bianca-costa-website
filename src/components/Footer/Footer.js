import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Section Info */}
          <div className="footer-info">
            <h3>Bianca Costa</h3>
            <p>Franco-Brazilian singer-songwriter blending bossa nova, samba, and urban music into a unique sonic experience.</p>
            <div className="social-links">
              <a href="#" aria-label="Spotify">
                <i className="fab fa-spotify"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>

          {/* Section Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#music">Music</a></li>
              <li><a href="#concerts">Concerts</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Section Newsletter */}
          <div className="newsletter">
            <h4>Newsletter</h4>
            <p>Subscribe to stay updated with latest news and releases.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email" 
                required 
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© {currentYear} Bianca Costa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;