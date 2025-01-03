import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faCogs, faServer, faCloud } from '@fortawesome/free-solid-svg-icons'; // Importing relevant icons
import './styles/upwork.css'; // Custom CSS file for styling

const Upwork = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/alxventurs');
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="upwork-section">
      <div className="container1">
        <h2 className="section-title">Full Stack MERN Developer</h2>
          <hr />
        <div className="cards-container">
          <div className="card">
            <FontAwesomeIcon icon={faDatabase} className="card-icon" />
            <div className="card-content">
              <h3 className="subheading">MERN Stack Skills & Services</h3>
              <ul className="services-list">
                <li><strong>MongoDB:</strong> Database design, data modeling, optimization, and complex queries.</li>
                <li><strong>Express.js:</strong> RESTful API development and integration with front-end technologies.</li>
                <li><strong>React:</strong> Building dynamic, responsive, user-friendly single-page applications.</li>
                <li><strong>Node.js:</strong> Server-side development, handling requests and managing backend services.</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faCogs} className="card-icon" />
            <div className="card-content">
              <h3 className="subheading">Additional Services</h3>
              <ul className="services-list">
                <li><strong>Authentication & Authorization:</strong> Secure login and role management with JWT and OAuth.</li>
                <li><strong>Deployment:</strong> Deploy applications on platforms like AWS, Heroku, DigitalOcean, and others.</li>
                <li><strong>Real-time Apps:</strong> Building real-time messaging apps using WebSockets and Socket.io.</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faServer} className="card-icon" />
            <div className="card-content">
              <h3 className="subheading">Project Highlights</h3>
              <ul className="project-list">
                <li><strong>E-Commerce Website:</strong> Built with React, Node.js, MongoDB for seamless shopping experience.</li>
                <li><strong>Real-Time Chat Application:</strong> Built with React and Node.js for live messaging with WebSockets.</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faCloud} className="card-icon" />
            <div className="card-content">
              <h3 className="subheading">Cloud Platforms & Version Control</h3>
              <ul className="services-list">
                <li><strong>Cloud Platforms:</strong> Deploy applications to cloud services like AWS, DigitalOcean.</li>
                <li><strong>Version Control (Git):</strong> Efficient collaboration with GitHub/GitLab for code management.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="button-container">
          <button className="navigate-button" onClick={handleNavigate}>AlxVenturs Experience</button>
        </div>
        <div className="container1">
           <h2 className="section-title">certificate</h2>
            <hr />
           <div className='co1'>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Upwork;
