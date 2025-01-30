import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const images = [
    { id: 1, category: 'live', src: '/assets/gallery/live1.jpg', alt: 'Live Performance' },
    { id: 2, category: 'backstage', src: '/assets/gallery/backstage1.jpg', alt: 'Backstage' },
    { id: 3, category: 'studio', src: '/assets/gallery/studio1.jpg', alt: 'Studio Session' }
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <section id="gallery" className="gallery">
      <h2 className="section-title">GALERIE</h2>
      
      <div className="gallery-filters">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          TOUT
        </button>
        <button 
          className={filter === 'live' ? 'active' : ''} 
          onClick={() => setFilter('live')}
        >
          LIVE
        </button>
        <button 
          className={filter === 'backstage' ? 'active' : ''} 
          onClick={() => setFilter('backstage')}
        >
          BACKSTAGE
        </button>
        <button 
          className={filter === 'studio' ? 'active' : ''} 
          onClick={() => setFilter('studio')}
        >
          STUDIO
        </button>
      </div>

      <div className="gallery-grid">
        {filteredImages.map(image => (
          <div 
            key={image.id} 
            className="gallery-item"
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage.src} alt={selectedImage.alt} />
          <button className="close-lightbox">&times;</button>
        </div>
      )}
    </section>
  );
}

export default Gallery;