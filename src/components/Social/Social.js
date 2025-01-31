import React from "react";
import "./Social.css";

function Social() {
  return (
    <section className="social-section container">
      <h3>Follow Me</h3>
      <div className="social-links">
        <a
          href="https://www.instagram.com/biancacosta"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://x.com/jstcallmebibi"
          target="_blank"
          rel="noreferrer"
        >
          X
        </a>
        <a
          href="https://www.youtube.com/biancacostaoff"
          target="_blank"
          rel="noreferrer"
        >
          YouTube
        </a>
      </div>
    </section>
  );
}

export default Social;
