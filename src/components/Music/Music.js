import React from 'react';
import './Music.css';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

function Music() {
  const { t } = useLanguage();

  return (
    <motion.section
      id="music"
      className="music-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>{t.music.title}</h2>
      <p>{t.music.description}</p>
      <div className="spotify-player">
        <iframe
          src="https://open.spotify.com/embed/artist/1DcL22xdIWcdNa4ZHaXZjT?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="0"
          allow="encrypted-media"
          title="Spotify Player"
        />
      </div>
    </motion.section>
  );
}

export default Music;
