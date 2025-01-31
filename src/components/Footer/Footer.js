import React, { useState } from "react";
import "./Footer.css";
import { useLanguage } from "../../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");

  const handleNewsletter = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    alert("Merci pour votre inscription !");
    setEmail("");
  };

  return (
    <footer className="footer-container">
      <form onSubmit={handleNewsletter} className="newsletter-form">
        <label>{t.footer.newsletter}</label>
        <div className="newsletter-input">
          <input
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">{t.footer.subscribe}</button>
        </div>
      </form>
      <p>© 2025 Bianca Costa - All rights reserved.</p>
    </footer>
  );
}

export default Footer;
