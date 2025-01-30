import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Music from './components/Music/Music';
import Videos from './components/Videos/Videos';
import Tour from './components/Tour/Tour';
import Gallery from './components/Gallery/Gallery';
import Social from './components/Social/Social';
import Shop from './components/Shop/Shop';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/global.css';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div className="loader">
          <div className="loader-content">
            <img src="/assets/logo.png" alt="Bianca Costa" />
          </div>
        </div>
      ) : (
        <>
          <Header />
          <Hero />
          <Music />
          <Videos />
          <Tour />
          <Gallery />
          <Social />
          <Shop />
          <Contact />
          <Footer />
          <LanguageProvider />
        </>
      )}
    </div>
  );
}

export default App;