import React from 'react';
import './Social.css';

function Social() {
  const socialLinks = [
    {
      platform: 'Instagram',
      username: '@biancacosta',
      url: 'https://instagram.com/biancacosta',
      icon: 'fab fa-instagram'
    },
    {
      platform: 'TikTok',
      username: '@biancacosta',
      url: 'https://tiktok.com/@biancacosta',
      icon: 'fab fa-tiktok'
    },
    {
      platform: 'YouTube',
      username: 'Bianca Costa',
      url: 'https://youtube.com/biancacosta',
      icon: 'fab fa-youtube'
    },
    {
      platform: 'Spotify',
      username: 'Bianca Costa',
      url: 'https://open.spotify.com/artist/biancacosta',
      icon: 'fab fa-spotify'
    }
  ];

  return (
    <section id="social" className="social">
      <h2 className="section-title">SUIVEZ-MOI</h2>
      <div className="social-grid">
        {socialLinks.map((social, index) => (
          <a 
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            <i className={social.icon}></i>
            <h3>{social.platform}</h3>
            <p>{social.username}</p>
          </a>
        ))}
      </div>
      <div className="social-feed">
        <h3>INSTAGRAM FEED</h3>
        <div className="instagram-grid">
          {/* Instagram Feed Integration */}
        </div>
      </div>
    </section>
  );
}

export default Social;