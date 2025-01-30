import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "https://placehold.co/1920x1080",
      title: "BIANCA COSTA",
      subtitle: "Latest Release: Shinoba",
      cta: "Listen Now"
    },
    {
      image: "https://placehold.co/1920x1080",
      title: "World Tour 2024",
      subtitle: "Get Your Tickets",
      cta: "Book Now"
    },
    {
      image: "https://placehold.co/1920x1080",
      title: "New Album",
      subtitle: "Coming Soon",
      cta: "Pre-save"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button className="cta-button">{slide.cta}</button>
            </div>
          </div>
        ))}
      </div>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;