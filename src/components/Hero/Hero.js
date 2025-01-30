import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>BIANCA COSTA</h1>
        <p>WORLD TOUR 2024</p>
        <div className="hero-buttons">
          <button className="btn primary">ÉCOUTER</button>
          <button className="btn secondary">BILLETS</button>
        </div>
      </div>
      <div className="hero-scroll">
        <span>SCROLL</span>
        <div className="scroll-indicator"></div>
      </div>
    </section>
  );
}

export default Hero;