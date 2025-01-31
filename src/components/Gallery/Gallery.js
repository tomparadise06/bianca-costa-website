import React, { useState } from "react";
import "./Gallery.css";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";

const data = [
  { id: 1, type: "photo", src: "/bibi.png", alt: "Photo 1" },
  { id: 2, type: "photo", src: "/bibi3.jpg", alt: "Photo 2" },
  { id: 3, type: "video", src: "https://www.youtube.com/embed/s5IGIED_HMI", alt: "Video" }
];

function Gallery() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");
  const handleFilter = (type) => {
    setFilter(type);
  };
  const filteredData =
    filter === "all" ? data : data.filter((item) => item.type === filter);

  return (
    <motion.section
      id="gallery"
      className="gallery-section container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2>{t.gallery.title}</h2>
      <div className="gallery-filters">
        <button onClick={() => handleFilter("all")}>{t.gallery.filterAll}</button>
        <button onClick={() => handleFilter("photo")}>{t.gallery.filterPhotos}</button>
        <button onClick={() => handleFilter("video")}>{t.gallery.filterVideos}</button>
      </div>
      <div className="gallery-grid">
        {filteredData.map((item) =>
          item.type === "photo" ? (
            <img key={item.id} src={item.src} alt={item.alt} />
          ) : (
            <div key={item.id} className="video-wrapper">
              <iframe
                width="100%"
                height="200"
                src={item.src}
                title="Video"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          )
        )}
      </div>
    </motion.section>
  );
}

export default Gallery;
