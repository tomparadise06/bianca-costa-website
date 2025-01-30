import React from 'react';
import './Music.css';

function Music() {
  const releases = [
    {
      title: "Shinoba",
      year: "2024",
      image: "/assets/releases/shinoba.jpg",
      spotify: "spotify:track:xxxxx"
    },
    {
      title: "Ounana",
      year: "2023",
      image: "/assets/releases/ounana.jpg",
      spotify: "spotify:track:xxxxx"
    }
  ];

  return (
    <section id="music" className="music">
      <h2 className="section-title">DERNIÈRES SORTIES</h2>
      <div className="releases-grid">
        {releases.map((release, index) => (
          <div key={index} className="release-card">
            <div className="release-image">
              <img src={release.image} alt={release.title} />
              <div className="play-overlay">
                <i className="fas fa-play"></i>
              </div>
            </div>
            <div className="release-info">
              <h3>{release.title}</h3>
              <p>{release.year}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="spotify-player">
        <iframe 
          src="https://open.spotify.com/embed/artist/1DcL22xdIWcdNa4ZHaXZjT?utm_source=generator" 
          width="100%" 
          height="380" 
          frameBorder="0" 
          allowtransparency="true" 
          allow="encrypted-media"
        ></iframe>
      </div>
    </section>
  );
}

export default Music;