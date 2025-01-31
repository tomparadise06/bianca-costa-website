import React from 'react';
import Hero from '../components/Hero/Hero';
import Music from '../components/Music/Music';
import Videos from '../components/Videos/Videos';
import Concerts from '../components/Concerts/Concerts';
import Gallery from '../components/Gallery/Gallery';
import Shop from '../components/Shop/Shop';
import Contact from '../components/Contact/Contact';
import Social from '../components/Social/Social';

function HomePage() {
  return (
    <div>
      <Hero />
      <Music />
      <Videos />
      <Concerts />
      <Gallery />
      <Shop />
      <Contact />
      <Social />
    </div>
  );
}

export default HomePage;
