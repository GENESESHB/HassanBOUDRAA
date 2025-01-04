import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode, faProjectDiagram, faRocket, faToolbox } from '@fortawesome/free-solid-svg-icons'; // Importing relevant icons
import './styles/upwork.css'; // Custom CSS file for styling

const NodeJS = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="nodejs-section">
      <div className="container1">
        <h2 className="section-title">Node.js: The JavaScript Runtime</h2>

        <div className="cards-container">
          {/* Card 1: Capabilities */}
          <div className="card">
            <FontAwesomeIcon icon={faCode} className="card-icon" />
            <div className="card-content">
              <h3 className="subheading">Key Node.js Capabilities</h3>
              <ul className="services-list">
                <li><strong>Asynchronous & Event-Driven:</strong> Non-blocking, event-driven architecture for efficiency.</li>
                <li><strong>Single-Threaded:</strong> Lightweight and efficient for I/O-bound tasks.</li>
                <li><strong>Scalability:</strong> Handles many connections concurrently.</li>
                <li><strong>Real-Time Data Handling:</strong> Ideal for chat, gaming, and collaboration tools.</li>
              </ul>
            </div>
          </div>

          {/* Card 2: Use Cases */}
          <div className="card">
            <FontAwesomeIcon icon={faProjectDiagram} className="card-icon" />
            <div className="card-content">
              <h3 className="subheading">Common Use Cases</h3>
              <ul className="services-list">
                <li><strong>Web Servers & APIs:</strong> Fast and scalable solutions.</li>
                <li><strong>Real-Time Applications:</strong> Messaging apps and gaming platforms.</li>
                <li><strong>Microservices:</strong> Independent and scalable components.</li>
                <li><strong>IoT Applications:</strong> Efficiently handles many devices.</li>
              </ul>
            </div>
          </div>

          {/* Card 3: Tools */}
          <div className="card">
            <FontAwesomeIcon icon={faToolbox} className="card-icon" />
            <div className="card-content">
              <h3 className="subheading">Popular Tools & Frameworks</h3>
              <ul className="services-list">
                <li><strong>Express.js:</strong> Fast, unopinionated web framework.</li>
                <li><strong>Socket.io:</strong> Real-time communication library.</li>
                <li><strong>NestJS:</strong> Progressive server-side framework.</li>
                <li><strong>PM2:</strong> Process manager for Node.js apps.</li>
              </ul>
            </div>
          </div>

          {/* Card 4: Experience */}
          <div className="card">
            <FontAwesomeIcon icon={faRocket} className="card-icon" />
            <div className="card-content">
              <h3 className="subheading">Experience & Stats</h3>
              <ul className="services-list">
                <li><strong>32+ Projects:</strong> Built using Node.js.</li>
                <li><strong>3+ Years:</strong> Expertise in scalable applications.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="button-container">
         <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
          <button className="navigate-button" >Explore Node.js in Action</button>
         </a>
        </div>
      </div>
    </section>
  );
};

export default NodeJS;
