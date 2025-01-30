import React from 'react';
import './Tour.css';

function Tour() {
  const tourDates = [
    {
      date: "15 MAR 2024",
      venue: "Le Trianon",
      city: "Paris",
      country: "France",
      ticketLink: "#"
    },
    {
      date: "22 MAR 2024",
      venue: "Casa do Povo",
      city: "São Paulo",
      country: "Brasil",
      ticketLink: "#"
    }
  ];

  return (
    <section id="tour" className="tour">
      <h2 className="section-title">TOUR DATES</h2>
      <div className="tour-dates">
        {tourDates.map((show, index) => (
          <div key={index} className="tour-date">
            <div className="date-info">
              <span className="date">{show.date}</span>
              <span className="venue">{show.venue}</span>
              <span className="location">{show.city}, {show.country}</span>
            </div>
            <a href={show.ticketLink} className="ticket-button">
              BILLETS
            </a>
          </div>
        ))}
      </div>
      <div className="newsletter-signup">
        <h3>RESTEZ INFORMÉ</h3>
        <form className="signup-form">
          <input type="email" placeholder="Votre email" />
          <button type="submit">S'INSCRIRE</button>
        </form>
      </div>
    </section>
  );
}

export default Tour;