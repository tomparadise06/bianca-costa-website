import React from 'react';
import './Hero.css';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="hero-container">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>{t.hero.title}</h1>
        <p>{t.hero.subtitle}</p>
      </motion.div>
      <motion.div
        className="hero-image"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="/bibi.png" alt="Bianca Costa" />
      </motion.div>
    </section>
  );
}

export default Hero;
