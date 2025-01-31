import React from "react";
import "./Videos.css";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";

function Videos() {
  const { t } = useLanguage();
  return (
    <motion.section
      id="videos"
      className="videos-section container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2>{t.videos.title}</h2>
      <div className="video-wrapper">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/s5IGIED_HMI"
          title="YouTube Video"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </motion.section>
  );
}

export default Videos;
