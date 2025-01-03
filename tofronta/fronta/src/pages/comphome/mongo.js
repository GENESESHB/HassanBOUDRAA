import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDatabase,
  faCloud,
  faCogs,
  faChartLine,
  faMobileAlt,
  faGamepad,
  faTools,
  faServer,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import './styles/upwork.css'; // Ensure this path correctly points to your CSS file

const MongoDB = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/mongodb');
  };

  return (
    <section className="upwork-section">
      <div className="container1">
        <h2 className="section-title">MongoDB: NoSQL Database</h2>
        <hr />
        <p className='mop'>
          MongoDB is a powerful, flexible, and scalable NoSQL database widely used in modern web applications.
          As a document-based database, it stores data in JSON-like format (BSON) and allows for highly dynamic,
          schema-less structures. MongoDB provides a range of features that make it a great choice for applications
          requiring high scalability, flexibility, and performance.
        </p>

        <h3 className="subheading">Key MongoDB Capabilities</h3>
          <hr />
        <div className="cards-container">
          <div className="card">
            <FontAwesomeIcon icon={faDatabase} className="card-icon" />
            <div className="card-content">
              <h3>Flexible Schema</h3>
              <p>MongoDB allows schema flexibility, making it easy to modify data models without complex migrations. This dynamic nature is ideal for agile development and evolving application needs.</p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faCloud} className="card-icon" />
            <div className="card-content">
              <h3>Horizontal Scalability</h3>
              <p>MongoDB is designed to scale horizontally. By sharding data across multiple servers, MongoDB efficiently handles massive datasets and high traffic loads, ensuring high availability and performance.</p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faCogs} className="card-icon" />
            <div className="card-content">
              <h3>Replication & High Availability</h3>
              <p>MongoDB supports replica sets, which automatically synchronize data across multiple nodes, ensuring redundancy and high availability. This feature ensures no single point of failure in your database.</p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faChartLine} className="card-icon" />
            <div className="card-content">
              <h3>Aggregation Framework</h3>
              <p>MongoDB's aggregation framework provides powerful tools for data transformation, analytics, and reporting, making it easy to perform complex operations on your data, such as grouping, filtering, and sorting.</p>
            </div>
          </div>
        </div>

        <h3 className="subheading">Common Use Cases</h3>
          <hr />
        <div className="cards-container">
          <div className="card">
            <FontAwesomeIcon icon={faMobileAlt} className="card-icon" />
            <div className="card-content">
              <h3>Mobile & IoT Applications</h3>
              <p>MongoDB's ability to handle variable data types and structures makes it an ideal choice for mobile apps and IoT solutions, where data formats can change rapidly and vary between devices.</p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faGamepad} className="card-icon" />
            <div className="card-content">
              <h3>Gaming Backends</h3>
              <p>MongoDB supports high-speed transactions, user profiles, and game state storage, making it a reliable database solution for gaming applications that need to handle large amounts of real-time data.</p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faServer} className="card-icon" />
            <div className="card-content">
              <h3>Content Management Systems</h3>
              <p>For applications that require content storage, such as blogs or media platforms, MongoDB's flexible schema makes it easy to store diverse content types (e.g., text, images, videos) in one system.</p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faSearch} className="card-icon" />
            <div className="card-content">
              <h3>Search Engines</h3>
              <p>MongoDB's text search capabilities, along with its powerful indexing, make it an ideal database for implementing search functionality in applications, such as blogs or e-commerce sites.</p>
            </div>
          </div>
        </div>

        <h3 className="subheading">MongoDB Tools & Ecosystem</h3>
         <hr />
        <div className="cards-container">
          <div className="card">
            <FontAwesomeIcon icon={faTools} className="card-icon" />
            <div className="card-content">
              <h3>MongoDB Atlas</h3>
              <p>MongoDB Atlas is a fully managed cloud service that simplifies deployment and scaling. It offers automated backups, monitoring, and scaling to ensure optimal performance with minimal operational overhead.</p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faCogs} className="card-icon" />
            <div className="card-content">
              <h3>MongoDB Compass</h3>
              <p>MongoDB Compass is a graphical user interface (GUI) for MongoDB that allows you to explore and analyze your data, build queries, and visualize database schemas. It is a powerful tool for database developers and administrators.</p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faCloud} className="card-icon" />
            <div className="card-content">
              <h3>MongoDB Charts</h3>
              <p>MongoDB Charts provides built-in, drag-and-drop data visualization for MongoDB data. It helps you generate insightful reports directly from the database, enabling better decision-making based on your data.</p>
            </div>
          </div>
        </div>
        <div className="cards-container">
         <div className="card">
          <div className="stat-item">
              <span className="card-icon">10+ projects</span><p> using MongoDB as the primary database</p>
          </div>
         </div>
         <div className="card">
          <div className="stat-item">
              <span className="card-icon">4+ years</span><p> of experience in building scalable applications with MongoDB</p>
          </div>
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
