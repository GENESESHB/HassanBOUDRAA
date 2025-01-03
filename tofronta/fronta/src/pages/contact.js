import React, { useState } from 'react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'; // Importing Font Awesome icons
import './comphome/styles/upwork.css'; // Importing the custom CSS file for styling

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // For now, just log the form data
    // Add your email or API logic here
  };

  return (
    <section className="contact-section">
      <div className="container1">
        <h2 className="section-title">Contact Me</h2>
        <hr />
        <div className="cards-container">
          {/* Contact Form */}
          <form className="card" onSubmit={handleSubmit}>
            <label className="mop" htmlFor="name">
              Name:
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label className="mop" htmlFor="email">
              Email:
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label className="mop" htmlFor="message">
              Message:
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit" className="navigate-button">
              Send Message
            </button>
          </form>

          {/* Email and WhatsApp Buttons */}
          <div className="card">
            <div className="mop">
              <div className="co1">
                <a href={`mailto:hassan.hbmama@gmail.com`} target="_blank" rel="noopener noreferrer">
                  <button className="navigate-button">
                    <FaEnvelope /> Email Me
                  </button>
                </a>
              </div>
            </div>

            <div className="mop">
              <div className="co1">
                <a href={`https://wa.me/212622283559`} target="_blank" rel="noopener noreferrer">
                  <button className="navigate-button">
                    <FaWhatsapp /> WhatsApp
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
