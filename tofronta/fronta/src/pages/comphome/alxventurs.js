import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faLightbulb, faCogs, faUsers, faCode, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import './styles/upwork.css'; // Custom CSS for styling
import alxV from '../../assets/alxV.png';

const AlxVentures = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/tfm');
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="alx-ventures-section">
      <div className="container1">
        <h2 className="section-title">Startup Reports & Tech Solutions</h2>
          <hr />
        <div className="cards-container">
          <div className="card">
            <FontAwesomeIcon icon={faChartBar} className="card-icon" />
            <div className="card-content">
              <h3>Market Studies</h3>
              <p>
                Conducted in-depth studies to understand startup demands and challenges in the tourism sector.
              </p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faLightbulb} className="card-icon" />
            <div className="card-content">
              <h3>Customized Tech Solutions</h3>
              <p>
                Developed tailored solutions to enhance product offerings and meet unique startup needs.
              </p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faUsers} className="card-icon" />
            <div className="card-content">
              <h3>Tourist-Centric Products</h3>
              <p>
                Collaborated on designing innovative products to improve customer experiences.
              </p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faCogs} className="card-icon" />
            <div className="card-content">
              <h3>Actionable Insights</h3>
              <p>
                Provided strategies for scaling products and enhancing market visibility.
              </p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faCode} className="card-icon" />
            <div className="card-content">
              <h3>Tech Development</h3>
              <p>
                Built scalable applications using front-end and back-end technologies like Node.js and MongoDB.
              </p>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faProjectDiagram} className="card-icon" />
            <div className="card-content">
              <h3>Project Management</h3>
              <p>
                Managed projects and coordinated teams for seamless delivery of tech solutions.
              </p>
            </div>
          </div>
        </div>

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

        <div className="button-container">
          <button className="navigate-button" onClick={handleNavigate}>
            View More Details
          </button>
        </div>
        <div className="container1">
           <h2 className="section-title">certificate</h2>
            <hr />
           <div className='co1'>
              <img src={alxV} alt='image'/>
           </div>
        </div>
      </div>
    </section>
  );
};

export default AlxVentures;
