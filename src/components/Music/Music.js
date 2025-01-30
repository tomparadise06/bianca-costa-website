import React from 'react';
import './Music.css';

const Music = () => {
  const releases = [
    {
      title: "Shinoba",
      cover: "https://placehold.co/400x400",
      type: "Single",
      year: "2024",
      links: {
        spotify: "#",
        apple: "#",
        deezer: "#"
      }
    },
    {
      title: "Ounana",
      cover: "https://placehold.co/400x400",
      type: "Single",
      year: "2023",
      links: {
        spotify: "#",
        apple: "#",
        deezer: "#"
      }
    },
    {
      title: "Tropical Vibes",
      cover: "https://placehold.co/400x400",
      type: "EP",
      year: "2023",
      links: {
        spotify: "#",
        apple: "#",
        deezer: "#"
      }
    }
  ];

  return (
    <section className="music" id="music">
      <div className="music-container">
        <h2 className="section-title">Latest Releases</h2>
        
        <div className="releases-grid">
          {releases.map((release, index) => (
            <div className="release-card" key={index}>
              <div className="release-image">
                <img src={release.cover} alt={release.title} />
                <div className="play-overlay">
                  <div className="streaming-links">
                    <a href={release.links.spotify} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-spotify"></i>
                    </a>
                    <a href={release.links.apple} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-apple"></i>
                    </a>
                    <a href={release.links.deezer} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-deezer"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="release-info">
                <h3>{release.title}</h3>
                <p>{release.type} • {release.year}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="featured-player">
          <h3>Featured Track</h3>
          <div className="player-wrapper">
            <iframe
              src="https://open.spotify.com/embed/track/your-track-id"
              width="100%"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;