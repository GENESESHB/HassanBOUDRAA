import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/AlxAfrica.css';  // Add this for custom styling

const AlxVentures = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/alxventurs');
  };

  return (
    <section className="alx-ventures-section">
      <div className="container1">
        <h2 className="section-title">ALX Ventures: Startup Reports & Tech Solutions</h2>
        <div className="experience-details">
          <p className="intro-text">
            As part of my work with ALX Ventures, I conducted comprehensive market studies and created tailored technology solutions for various tourist products. The goal was to align startup needs with technical innovations to improve both customer experiences and operational efficiency.
          </p>
          <div className="experience-content">
            <ul className="task-list">
              <li>Conducted thorough <strong>market studies</strong> to understand the demands and challenges faced by different startups in the tourism sector.</li>
              <li>Analyzed the needs of each startup and developed customized <strong>tech solutions</strong> to enhance their product offerings.</li>
              <li>Collaborated with teams to design and implement <strong>tourist-centric products</strong>, integrating cutting-edge technology to improve user experiences.</li>
              <li>Provided actionable insights and recommendations for scaling products, including enhancing their market visibility.</li>
              <li>Worked with front-end technologies (HTML, CSS, JS) and back-end solutions (Node.js, MongoDB) to build scalable applications for startups.</li>
              <li>Managed projects and coordinated cross-functional teams to ensure seamless delivery of tech solutions.</li>
            </ul>
            <div className="experience-stats">
              <div className="stat-item">
                <p><span className="highlight">5+ years</span> of experience in startup analysis and tech solutions</p>
              </div>
              <div className="stat-item">
                <p><span className="highlight">20+ startups</span> assisted with market studies and tech development</p>
              </div>
              <div className="stat-item">
                <p><span className="highlight">30+ products</span> enhanced with technology solutions</p>
              </div>
            </div>
          </div>
          <button className="navigate-button" onClick={handleNavigate}>View More Details</button>
        </div>
      </div>
    </section>
  );
};

export default AlxVentures;
