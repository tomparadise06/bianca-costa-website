import React from 'react';

const Videos = () => {
  return (
    <section id="videos" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-white">Vidéos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Vidéo clips */}
          <div className="video-card">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/VIDEOID"
              title="Tout le quartier"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* Ajoutez d'autres vidéos ici */}
        </div>
      </div>
    </section>
  );
};

export default Videos;