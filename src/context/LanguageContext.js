import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    header: {
      home: 'Home',
      music: 'Music',
      videos: 'Videos',
      concerts: 'Concerts',
      gallery: 'Gallery',
      shop: 'Shop',
      contact: 'Contact',
    },
    hero: {
      title: 'Bianca Costa',
      subtitle: 'Official Website',
    },
    music: {
      title: 'Music',
      description: 'Listen to my latest tracks.',
    },
    videos: {
      title: 'Videos',
    },
    concerts: {
      title: 'Concerts',
      button: 'Buy Tickets',
    },
    gallery: {
      title: 'Gallery',
      filterAll: 'All',
      filterPhotos: 'Photos',
      filterVideos: 'Videos',
    },
    shop: {
      title: 'Shop',
      buy: 'Buy Now',
    },
    contact: {
      title: 'Contact',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send',
    },
    footer: {
      newsletter: 'Subscribe to our newsletter',
      subscribe: 'Subscribe',
    },
  },
  fr: {
    header: {
      home: 'Accueil',
      music: 'Musique',
      videos: 'Vidéos',
      concerts: 'Concerts',
      gallery: 'Galerie',
      shop: 'Boutique',
      contact: 'Contact',
    },
    hero: {
      title: 'Bianca Costa',
      subtitle: 'Site Officiel',
    },
    music: {
      title: 'Musique',
      description: 'Écoutez mes derniers morceaux.',
    },
    videos: {
      title: 'Vidéos',
    },
    concerts: {
      title: 'Concerts',
      button: 'Acheter des billets',
    },
    gallery: {
      title: 'Galerie',
      filterAll: 'Tous',
      filterPhotos: 'Photos',
      filterVideos: 'Vidéos',
    },
    shop: {
      title: 'Boutique',
      buy: 'Acheter maintenant',
    },
    contact: {
      title: 'Contact',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      submit: 'Envoyer',
    },
    footer: {
      newsletter: 'Abonnez-vous à notre newsletter',
      subscribe: 'S’abonner',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  const switchLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
