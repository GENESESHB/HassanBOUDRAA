import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/mongo.css'; // Add custom CSS for styling

const MongoDB = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/mongodb');
  };

  return (
    <section className="mongodb-section">
      <div className="container1">
        <h2 className="section-title">MongoDB: NoSQL Database</h2>
        <div className="mongodb-details">
          <p className="intro-text">
            MongoDB is a powerful, flexible, and scalable NoSQL database widely used in modern web applications. As a document-based database, it stores data in JSON-like format (BSON) and allows for highly dynamic, schema-less structures. Below, I detail the various MongoDB features and capabilities I've worked with, as well as the use cases for this technology in the context of full-stack development.
          </p>

          <div className="mongodb-capabilities">
            <h3 className="subheading">Key MongoDB Capabilities</h3>
            <ul className="capabilities">
              <li><strong>Flexible Schema</strong> - MongoDB uses a flexible schema design, allowing for easy modification of data models without complex migrations.</li>
              <li><strong>Horizontal Scalability</strong> - MongoDB is designed to scale horizontally, making it suitable for handling large datasets and high traffic volumes.</li>
              <li><strong>Replication & High Availability</strong> - MongoDB supports replication, ensuring data redundancy and availability through replica sets.</li>
              <li><strong>Sharding</strong> - MongoDB allows horizontal partitioning of data into shards, ensuring optimal performance and scalability for large datasets.</li>
              <li><strong>Aggregation Framework</strong> - MongoDB offers an advanced aggregation pipeline for transforming and combining data, making complex queries and analysis easier.</li>
              <li><strong>Indexing</strong> - MongoDB supports a variety of indexing techniques to optimize search performance, including compound indexes, geospatial indexes, and text indexes.</li>
              <li><strong>JSON-Like Data Format (BSON)</strong> - MongoDB stores data as BSON (Binary JSON), allowing for rich data representation and fast access.</li>
            </ul>
          </div>

          <div className="mongodb-usecases">
            <h3 className="subheading">Common Use Cases</h3>
            <ul className="usecases">
              <li>
                <strong>Content Management Systems (CMS)</strong> - MongoDB is an excellent choice for CMS due to its ability to handle unstructured and semi-structured data with ease.
              </li>
              <li>
                <strong>Real-Time Analytics</strong> - The aggregation framework in MongoDB enables real-time data processing and analytics for performance optimization in applications.
              </li>
              <li>
                <strong>E-commerce Platforms</strong> - MongoDB is used in e-commerce platforms to manage product catalogs, user data, inventory, and order processing.
              </li>
              <li>
                <strong>Mobile & IoT Applications</strong> - MongoDB's scalability and schema flexibility make it ideal for mobile and IoT applications where data can be highly variable.
              </li>
              <li>
                <strong>Social Networks</strong> - MongoDB helps manage user-generated content, media files, and activity logs for social networking platforms.
              </li>
              <li>
                <strong>Gaming Backends</strong> - MongoDB is used in gaming platforms to store user profiles, game data, and high-speed transactional data.
              </li>
            </ul>
          </div>

          <div className="mongodb-tools">
            <h3 className="subheading">MongoDB Tools & Ecosystem</h3>
            <ul className="tools">
              <li><strong>MongoDB Atlas</strong> - MongoDB's fully managed cloud service, which provides automated backups, scaling, and monitoring features.</li>
              <li><strong>MongoDB Compass</strong> - A GUI tool for managing and analyzing MongoDB data visually.</li>
              <li><strong>Mongoose</strong> - A powerful ODM (Object Data Modeling) library for Node.js that simplifies MongoDB interactions in Express-based applications.</li>
              <li><strong>Mongo Shell</strong> - A command-line interface for querying and managing MongoDB databases.</li>
            </ul>
          </div>

          <div className="mongodb-stats">
            <div className="stat-item">
              <p><span className="highlight">10+ projects</span> using MongoDB as the primary database</p>
            </div>
            <div className="stat-item">
              <p><span className="highlight">4+ years</span> of experience in building scalable applications with MongoDB</p>
            </div>
          </div>

          <button className="navigate-button" onClick={handleNavigate}>Explore MongoDB in Action</button>
        </div>
      </div>
    </section>
  );
};

export default MongoDB;

