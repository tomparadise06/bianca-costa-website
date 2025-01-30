import React, { useState } from 'react';
import './Concerts.css';

const Concerts = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const concerts = [
    {
      date: "2024-03-15",
      city: "Paris",
      country: "France",
      venue: "L'Olympia",
      status: "upcoming",
      ticketLink: "#"
    },
    {
      date: "2024-04-20",
      city: "Rio de Janeiro",
      country: "Brazil",
      venue: "Circo Voador",
      status: "upcoming",
      ticketLink: "#"
    },
    {
      date: "2024-05-10",
      city: "London",
      country: "UK",
      venue: "O2 Academy Brixton",
      status: "upcoming",
      ticketLink: "#"
    },
    {
      date: "2024-06-15",
      city: "New York",
      country: "USA",
      venue: "Brooklyn Steel",
      status: "upcoming",
      ticketLink: "#"
    }
  ];

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  const filteredConcerts = concerts.filter(concert => 
    activeFilter === 'all' || concert.status === activeFilter
  );

  return (
    <section className="concerts" id="concerts">
      <div className="concerts-container">
        <h2 className="section-title">Tour Dates</h2>
        
        <div className="concerts-filter">
          <button 
            className={activeFilter === 'all' ? 'active' : ''} 
            onClick={() => setActiveFilter('all')}
          >
            All Shows
          </button>
          <button 
            className={activeFilter === 'upcoming' ? 'active' : ''} 
            onClick={() => setActiveFilter('upcoming')}
          >
            Upcoming
          </button>
          <button 
            className={activeFilter === 'past' ? 'active' : ''} 
            onClick={() => setActiveFilter('past')}
          >
            Past Shows
          </button>
        </div>

        <div className="concerts-list">
          {filteredConcerts.map((concert, index) => (
            <div className="concert-item" key={index}>
              <div className="concert-date">
                <span>{formatDate(concert.date)}</span>
              </div>
              <div className="concert-info">
                <h3>{concert.city}, {concert.country}</h3>
                <p>{concert.venue}</p>
              </div>
              <div className="concert-action">
                {concert.status === 'upcoming' ? (
                  <a href={concert.ticketLink} className="ticket-button" target="_blank" rel="noopener noreferrer">
                    Get Tickets
                  </a>
                ) : (
                  <span className="past-show">Past Show</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="newsletter-signup">
          <h3>Don't Miss a Show!</h3>
          <p>Subscribe to get tour updates and exclusive presale access.</p>
          <form className="signup-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Concerts;