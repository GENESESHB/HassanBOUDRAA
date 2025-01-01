import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/express.css'; // Add custom CSS for styling

const Express = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/express');
  };

  return (
    <section className="express-section">
      <div className="container1">
        <h2 className="section-title">Services We Offer with Express.js</h2>
        <div className="service-details">
          <p className="intro-text">
            Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features to build web and mobile applications. Below are the services we offer by utilizing Express for various use cases.
          </p>
          <div className="service-content">
            <ul className="service-list">
              <li>
                <strong>API Development</strong> - Build RESTful APIs for mobile and web applications with easy routing, middleware support, and fast performance.
              </li>
              <li>
                <strong>Authentication Services</strong> - Implement secure authentication and authorization using JWT, OAuth, and other strategies.
              </li>
              <li>
                <strong>Real-time Applications</strong> - Build real-time web applications such as chat applications or live dashboards with WebSockets integration.
              </li>
              <li>
                <strong>Database Integration</strong> - Connect with databases (e.g., MongoDB, MySQL, PostgreSQL) for storing and managing data efficiently.
              </li>
              <li>
                <strong>Middleware Customization</strong> - Create and use custom middleware to handle requests, logging, error handling, and more.
              </li>
              <li>
                <strong>Static File Hosting</strong> - Serve static files (HTML, CSS, JS, images) with ease for web applications.
              </li>
              <li>
                <strong>File Upload Services</strong> - Manage file uploads, including images and documents, with the help of middleware like Multer.
              </li>
              <li>
                <strong>Authentication APIs</strong> - Create secure login systems, integrate third-party authentication providers, and manage sessions.
              </li>
              <li>
                <strong>API Documentation</strong> - Generate API documentation for easy consumption and integration by developers.
              </li>
            </ul>
            <div className="service-stats">
              <div className="stat-item">
                <p><span className="highlight">5+ years</span> of experience using Express.js in production</p>
              </div>
              <div className="stat-item">
                <p><span className="highlight">30+ apps</span> built using Express.js for different industries</p>
              </div>
            </div>
          </div>
          <button className="navigate-button" onClick={handleNavigate}>Learn More About Our Express Services</button>
        </div>
      </div>
    </section>
  );
};

export default Express;
