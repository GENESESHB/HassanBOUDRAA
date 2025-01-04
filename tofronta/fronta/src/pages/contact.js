import React, { useState } from 'react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './comphome/styles/upwork.css';
import axios from 'axios'; // Import Axios

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null); // For tracking form submission status

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission and send data to Formspree
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this with your Formspree endpoint
    const endpoint = "https://formspree.io/f/xqaagbjk";

    axios
      .post(endpoint, formData)
      .then((response) => {
        setStatus('SUCCESS');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      })
      .catch((error) => {
        setStatus('ERROR');
        console.error('Error sending form data:', error);
      });
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
              <input
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className="mop" htmlFor="email">
              <input
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label className="mop" htmlFor="subject">
              <input
                placeholder="Subject"
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </label>
            <label className="mop" htmlFor="message">
              <textarea
                placeholder="Your message here..."
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

            {status === 'SUCCESS' && <p>Message sent successfully!</p>}
            {status === 'ERROR' && <p>Oops! There was an error sending the message.</p>}
          </form>

          {/* Email and WhatsApp Buttons */}
          <div className="card">
            <p>You can contact me through various channels—I’m always open to new opportunities and listening to every single chance. Feel free to reach out via:</p>
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

