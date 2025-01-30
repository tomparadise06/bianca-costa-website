import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>

        <div className="contact-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className={status === 'sending' ? 'sending' : ''}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {status === 'sent' && (
            <div className="success-message">
              Message sent successfully!
            </div>
          )}
        </div>

        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <h3>Email</h3>
            <p>contact@biancacosta.com</p>
          </div>

          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Location</h3>
            <p>Paris, France</p>
          </div>

          <div className="info-item">
            <i className="fas fa-phone"></i>
            <h3>Management</h3>
            <p>+33 1 23 45 67 89</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;