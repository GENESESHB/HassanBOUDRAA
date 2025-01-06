import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './comphome/styles/upwork.css';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null);
  const [error, setError] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [a, setA] = useState(null);
  const [b, setB] = useState(null);

  useEffect(() => {
    const randomA = Math.floor(Math.random() * 10);
    const randomB = Math.floor(Math.random() * 10);
    setCorrectAnswer(randomA + randomB);
    setA(randomA);
    setB(randomB);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setFormData({
        ...formData,
        [name]: value.charAt(0).toUpperCase() + value.slice(1),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (name === 'email' && value.length > 36) {
      setError('Email cannot exceed 36 characters.');
    } else if (name === 'subject' && value.length > 36) {
      setError('Subject cannot exceed 36 characters.');
    } else if (name === 'message' && value.length > 420) {
      setError('Message cannot exceed 420 characters.');
    } else if (name === 'name' && value.length > 16) {
      setError('Name cannot exceed 16 characters.');
    } else {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (parseInt(captchaAnswer) !== correctAnswer) {
      alert('You are a bot!');
      return;
    }

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('All fields must be filled out.');
      return;
    }

    if (error) return;

    const endpoint = "https://formspree.io/f/xqaagbjk";
    const formDataToSend = new FormData();

    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('subject', formData.subject);
    formDataToSend.append('message', formData.message);

    axios
      .post(endpoint, formDataToSend)
      .then((response) => {
        setStatus('SUCCESS');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setCaptchaAnswer('');
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
                maxLength="18"
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
                maxLength="37"
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
                maxLength="37"
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
                maxLength="421"
              />
            </label>
            <label htmlFor="captcha">
              Solve: {a} + {b} = ?
              <input
                type="number"
                id="captcha"
                name="captcha"
                value={captchaAnswer}
                onChange={(e) => setCaptchaAnswer(e.target.value)}
                required
              />
            </label>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit" className="navigate-button" disabled={!!error || !captchaAnswer}>
              Send Message
            </button>

            {status === 'SUCCESS' && <p style={{ color: 'green' }}>Message sent successfully!</p>}
            {status === 'ERROR' && <p style={{ color: 'red' }}>Oops! There was an error sending the message.</p>}
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
