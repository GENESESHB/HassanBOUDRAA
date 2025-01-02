import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faFlask, faLaptopCode, faProjectDiagram, faStar } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faDocker } from '@fortawesome/free-brands-svg-icons';
import './styles/upwork.css'; // Add custom CSS for styling

const Holberton = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/holberton');
  };

  return (
    <section className="holberton-section">
      <div className="container1">
        <h2 className="section-title">My Holberton School Experience</h2>
        <div className="cards-container">
          <h3 className="subheading">Skills & Technologies</h3>
          <div className="card">
            <FontAwesomeIcon icon={faCode} className="card-icon" />
            <div className="card-content">
              <h3>JavaScript & Python</h3>
              <p>
                Mastered modern JavaScript (ES6+) and Python, working on algorithms, data structures, and web applications.
              </p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faDatabase} className="card-icon" />
            <div className="card-content">
              <h3>SQL & Relational Databases</h3>
              <p>
                Gained experience in querying and managing relational databases, optimizing queries for performance.
              </p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faFlask} className="card-icon" />
            <div className="card-content">
              <h3>Flask & Backend Development</h3>
              <p>
                Built RESTful APIs and web services using Flask, focusing on scalability and reliability.
              </p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faReact} className="card-icon" />
            <div className="card-content">
              <h3>React</h3>
              <p>
                Developed dynamic user interfaces using React, implementing state management and responsive design.
              </p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faDocker} className="card-icon" />
            <div className="card-content">
              <h3>DevOps Tools</h3>
              <p>
                Explored containerization with Docker and CI/CD pipelines with GitLab CI for efficient deployment.
              </p>
            </div>
          </div>
        </div>

        <h3 className="subheading">Projects Completed</h3>
        <div className="projects-container">
          <div className="card">
            <FontAwesomeIcon icon={faLaptopCode} className="card-icon" />
            <div className="card-content">
              <h3>Airbnb Clone</h3>
              <p>
                Developed a full-stack platform with authentication, booking, and real-time data handling.
              </p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faProjectDiagram} className="card-icon" />
            <div className="card-content">
              <h3>Portfolio Website</h3>
              <p>
                Designed a personal portfolio showcasing my skills, projects, and achievements.
              </p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faStar} className="card-icon" />
            <div className="card-content">
              <h3>API Development</h3>
              <p>
                Created RESTful APIs using Flask and Node.js to manage data and user authentication.
              </p>
            </div>
          </div>
        </div>

        <div className="holberton-stats">
          <div className="stat-item">
            <p><span className="highlight">1+ year</span> of full-stack development experience</p>
          </div>
          <div className="stat-item">
            <p><span className="highlight">10+ projects</span> completed during my time at Holberton</p>
          </div>
        </div>

        <div className="button-container">
          <button className="navigate-button" onClick={handleNavigate}>
            Explore My Holberton Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Holberton;
