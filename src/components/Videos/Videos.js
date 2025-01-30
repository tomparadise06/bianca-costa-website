import React from 'react';
import './Videos.css';

function Videos() {
  const videos = [
    {
      id: 1,
      title: "Shinoba - Official Video",
      thumbnail: "/assets/videos/shinoba-thumb.jpg",
      youtubeId: "XXXXX"
    },
    {
      id: 2,
      title: "Ounana - Live Performance",
      thumbnail: "/assets/videos/ounana-thumb.jpg",
      youtubeId: "XXXXX"
    }
  ];

  return (
    <section id="videos" className="videos">
      <h2 className="section-title">VIDÉOS</h2>
      <div className="videos-grid">
        {videos.map(video => (
          <div key={video.id} className="video-card">
            <div className="video-thumbnail">
              <img src={video.thumbnail} alt={video.title} />
              <div className="play-button">
                <i className="fas fa-play"></i>
              </div>
            </div>
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Videos;