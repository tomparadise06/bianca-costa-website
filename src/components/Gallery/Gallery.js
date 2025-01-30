import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryData = [
    // Photos
    {
      id: 1,
      type: 'photo',
      category: 'live',
      image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80',
      title: 'Live in Rio',
      alt: 'Bianca Costa performing in Rio'
    },
    {
      id: 2,
      type: 'photo',
      category: 'studio',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
      title: 'Studio Session',
      alt: 'Recording new tracks'
    },
    // Vidéos
    {
      id: 3,
      type: 'video',
      category: 'live',
      thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
      title: 'Concert Highlights',
    },
    {
      id: 4,
      type: 'video',
      category: 'backstage',
      thumbnail: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/ANOTHER_VIDEO_ID',
      title: 'Behind the Scenes',
    }
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'photos', label: 'Photos' },
    { id: 'videos', label: 'Videos' },
    { id: 'live', label: 'Live Shows' },
    { id: 'studio', label: 'Studio' },
    { id: 'backstage', label: 'Backstage' }
  ];

  // Filtrer les médias
  const filteredMedia = galleryData.filter(item => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'photos') return item.type === 'photo';
    if (selectedFilter === 'videos') return item.type === 'video';
    return item.category === selectedFilter;
  });

  // Navigation dans le lightbox
  const navigate = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredMedia.length 
      : (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
    setCurrentIndex(newIndex);
    setSelectedMedia(filteredMedia[newIndex]);
  };

  // Gérer le clic sur un média
  const handleMediaClick = (media, index) => {
    setSelectedMedia(media);
    setCurrentIndex(index);
  };

  // Fermer le lightbox
  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <h2 className="section-title">Gallery</h2>
        
        <div className="gallery-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${selectedFilter === filter.id ? 'active' : ''}`}
              onClick={() => setSelectedFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredMedia.map((item, index) => (
            <div
              key={item.id}
              className={`gallery-item ${item.type}`}
              onClick={() => handleMediaClick(item, index)}
            >
              <img 
                src={item.type === 'photo' ? item.image : item.thumbnail} 
                alt={item.title}
              />
              <div className="gallery-item-overlay">
                <h3 className="gallery-item-title">{item.title}</h3>
                {item.type === 'video' && (
                  <span className="video-play-icon">▶</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox amélioré */}
        {selectedMedia && (
          <div className="lightbox" onClick={closeLightbox}>
            <button className="lightbox-nav prev" onClick={(e) => {
              e.stopPropagation();
              navigate('prev');
            }}>❮</button>
            
            {selectedMedia.type === 'photo' ? (
              <img
                src={selectedMedia.image}
                alt={selectedMedia.title}
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <div className="video-container" onClick={(e) => e.stopPropagation()}>
                <iframe
                  src={selectedMedia.videoUrl}
                  title={selectedMedia.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            <button className="lightbox-nav next" onClick={(e) => {
              e.stopPropagation();
              navigate('next');
            }}>❯</button>
            
            <span className="lightbox-close">&times;</span>
            <div className="lightbox-title">{selectedMedia.title}</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;