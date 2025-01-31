import React from "react";
import "./Shop.css";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";

function Shop() {
  const { t } = useLanguage();
  const products = [
    { id: 1, name: "Album CD", price: 15, img: "/cd.jpg" },
    { id: 2, name: "T-Shirt", price: 25, img: "/image.jpg" }
  ];
  return (
    <motion.section
      id="shop"
      className="shop-section container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2>{t.shop.title}</h2>
      <div className="shop-grid">
        {products.map((prod) => (
          <div key={prod.id} className="shop-item">
            <img src={prod.img} alt={prod.name} />
            <h3>{prod.name}</h3>
            <p>${prod.price}</p>
            <button>{t.shop.buy}</button>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Shop;
