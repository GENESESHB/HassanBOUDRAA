
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import certif  from '../../assets/certif.png';
import note from '../../assets/short.png';
import {
  faCode,
  faDatabase,
  faFlask,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';

import './styles/upwork.css';

const Holberton = () => {

  useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);

  return (
    <section className="holberton-section">
      <div className="container1">
        <h2 className="section-title">Holberton School Experience</h2>
        <hr />

        <div className="cards-container">
          <div className="card">
            <FontAwesomeIcon icon={faCode} className="card-icon" />
            <div className="card-content">
              <h3 className="subheading">Skills & Technologies</h3>
              <ul className="services-list">
                <strong>JavaScript</strong><p> Web development.</p>
                <strong>Python</strong><p> Scripting and application development.</p>
                <strong>React</strong><p> User interface development.</p>
              </ul>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faDatabase} className="card-icon" />
            <div className="card-content">
              <h3 className="subheading">Database Management</h3>
              <ul className="services-list">
                <strong>MongoDB</strong><p> Database design and optimization.</p>
                <strong>SQL</strong><p> Relational database management.</p>
              </ul>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faFlask} className="card-icon" />
            <div className="card-content">
              <h3 className="subheading">Backend Development</h3>
              <ul className="services-list">
                <strong>Flask</strong><p> RESTful API development.</p>
                <strong>Node.js</strong><p> Server-side development.</p>
              </ul>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faLaptopCode} className="card-icon" />
            <div className="card-content">
              <h3 className="subheading">Completed Projects</h3>
              <ul className="project-list">
                <strong>Airbnb Website Clone</strong><p> Full-stack development.</p>
                <strong>Real-time Messaging App</strong><p> Real-time application development.</p>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <span className="card-icon">19 months</span>
              <p>of full-stack development experience.</p>
            </div>
          </div>
          <div className="card">
             <div className="card-content">
               <span className="card-icon">100+ projects</span>
               <p>completed during my time at Holberton.</p>
             </div>
          </div>
        </div>
        <div className="button-container">
         <a href="https://www.holbertonschool.com/" target="_blank" rel="noopener noreferrer">
          <button className="navigate-button" >
            Explore My Holberton Experience
          </button>
         </a>
       </div>

        <div className="container1">
          <h2 className="section-title">Certificate</h2>
          <hr />
          <div className="co1">
              <img src={certif} alt='image' style={{height: 300 }} />
              <img src={note} alt='image'/>
         </div>
        </div>
      </div>
    </section>
  );
};

export default Holberton;
