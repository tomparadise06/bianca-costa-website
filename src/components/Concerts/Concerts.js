import React from "react";
import "./Concerts.css";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";

function Concerts() {
  const { t } = useLanguage();
  const concertsData = [
    { date: "2025-03-15", city: "Paris", venue: "Le Zénith" },
    { date: "2025-04-10", city: "Rio de Janeiro", venue: "Vivo Rio" }
  ];
  return (
    <motion.section
      id="concerts"
      className="concerts-section container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2>{t.concerts.title}</h2>
      <ul className="concert-list">
        {concertsData.map((concert, index) => (
          <li key={index} className="concert-item">
            <span className="concert-date">{concert.date}</span>
            <span className="concert-city">{concert.city}</span>
            <span className="concert-venue">{concert.venue}</span>
            <button className="ticket-btn">{t.concerts.button}</button>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}

export default Concerts;
