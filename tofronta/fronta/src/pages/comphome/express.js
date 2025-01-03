import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faShieldAlt, faSyncAlt, faDatabase, faCogs, faFileAlt, faUpload, faLock, faBook } from '@fortawesome/free-solid-svg-icons';
import './styles/upwork.css'; // Add custom CSS for styling

const Express = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/express');
  };

  return (
    <section className="express-section">
      <div className="container1">
        <h2 className="section-title">Services We Offer with Express.js</h2>
         <hr />
        <div className="cards-container">
          <div className="card">
            <FontAwesomeIcon icon={faCode} className="card-icon" />
            <div className="card-content">
              <h3>API Development</h3>
              <p>
                Build RESTful APIs for mobile and web applications with easy routing, middleware support, and fast performance.
              </p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faShieldAlt} className="card-icon" />
            <div className="card-content">
              <h3>Authentication Services</h3>
              <p>
                Implement secure authentication and authorization using JWT, OAuth, and other strategies.
              </p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faSyncAlt} className="card-icon" />
            <div className="card-content">
              <h3>Real-time Applications</h3>
              <p>
                Build real-time web applications like chat systems or live dashboards with WebSockets integration.
              </p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faDatabase} className="card-icon" />
            <div className="card-content">
              <h3>Database Integration</h3>
              <p>
                Connect with databases like MongoDB, MySQL, or PostgreSQL to store and manage data efficiently.
              </p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faCogs} className="card-icon" />
            <div className="card-content">
              <h3>Middleware Customization</h3>
              <p>
                Create and use custom middleware for handling requests, logging, error management, and more.
              </p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faFileAlt} className="card-icon" />
            <div className="card-content">
              <h3>Static File Hosting</h3>
              <p>
                Serve static files such as HTML, CSS, JS, and images with ease for web applications.
              </p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faUpload} className="card-icon" />
            <div className="card-content">
              <h3>File Upload Services</h3>
              <p>
                Manage file uploads, including images and documents, with middleware like Multer.
              </p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faLock} className="card-icon" />
            <div className="card-content">
              <h3>Authentication APIs</h3>
              <p>
                Create secure login systems, integrate third-party authentication providers, and manage sessions.
              </p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faBook} className="card-icon" />
            <div className="card-content">
              <h3>API Documentation</h3>
              <p>
                Generate API documentation for easy consumption and integration by developers.
              </p>
            </div>
          </div>
        </div>

        <div className="service-stats">
          <div className="stat-item">
            <p><span className="highlight">5+ years</span> of experience using Express.js in production</p>
          </div>
          <div className="stat-item">
            <p><span className="highlight">30+ apps</span> built using Express.js for various industries</p>
          </div>
        </div>

        <div className="button-container">
          <button className="navigate-button" onClick={handleNavigate}>
            Learn More About Our Express Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Express;
