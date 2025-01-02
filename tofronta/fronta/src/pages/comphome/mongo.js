import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faCloud, faCogs, faChartLine, faMobileAlt, faGamepad, faTools } from '@fortawesome/free-solid-svg-icons';
import './styles/upwork.css'; // Add custom CSS for styling

const MongoDB = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/mongodb');
  };

  return (
    <section className="mongodb-section">
      <div className="container1">
        <h2 className="section-title">MongoDB: NoSQL Database</h2>
        <p className="intro-text">
          MongoDB is a powerful, flexible, and scalable NoSQL database widely used in modern web applications. As a document-based database, it stores data in JSON-like format (BSON) and allows for highly dynamic, schema-less structures. Below, I detail the various MongoDB features and capabilities I've worked with, as well as the use cases for this technology in the context of full-stack development.
        </p>

        <div className="cards-container">
          <h3 className="subheading">Key MongoDB Capabilities</h3>
          <div className="card">
            <FontAwesomeIcon icon={faDatabase} className="card-icon" />
            <div className="card-content">
              <h3>Flexible Schema</h3>
              <p>Makes modifying data models easier without complex migrations.</p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faCloud} className="card-icon" />
            <div className="card-content">
              <h3>Horizontal Scalability</h3>
              <p>Designed to scale horizontally for large datasets and high traffic.</p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faCogs} className="card-icon" />
            <div className="card-content">
              <h3>Replication & High Availability</h3>
              <p>Ensures data redundancy and availability through replica sets.</p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faChartLine} className="card-icon" />
            <div className="card-content">
              <h3>Aggregation Framework</h3>
              <p>Offers advanced data transformation and analysis capabilities.</p>
            </div>
          </div>
        </div>

        <div className="cards-container">
          <h3 className="subheading">Common Use Cases</h3>
          <div className="card">
            <FontAwesomeIcon icon={faMobileAlt} className="card-icon" />
            <div className="card-content">
              <h3>Mobile & IoT Applications</h3>
              <p>Ideal for highly variable data in mobile and IoT solutions.</p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faGamepad} className="card-icon" />
            <div className="card-content">
              <h3>Gaming Backends</h3>
              <p>Supports user profiles, game data, and high-speed transactions.</p>
            </div>
          </div>
        </div>

        <div className="cards-container">
          <h3 className="subheading">MongoDB Tools & Ecosystem</h3>
          <div className="card">
            <FontAwesomeIcon icon={faTools} className="card-icon" />
            <div className="card-content">
              <h3>MongoDB Atlas</h3>
              <p>Fully managed cloud service with automated scaling and monitoring.</p>
            </div>
          </div>
        </div>

        <div className="mongodb-stats">
          <div className="stat-item">
            <p><span className="highlight">10+ projects</span> using MongoDB as the primary database</p>
          </div>
          <div className="stat-item">
            <p><span className="highlight">4+ years</span> of experience in building scalable applications with MongoDB</p>
          </div>
        </div>

        <div className="button-container">
          <button className="navigate-button" onClick={handleNavigate}>
            Explore MongoDB in Action
          </button>
        </div>
      </div>
    </section>
  );
};

export default MongoDB;
