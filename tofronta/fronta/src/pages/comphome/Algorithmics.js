import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faProjectDiagram, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import './styles/upwork.css'; // Add this for custom styling
import imaalgo from '../../assets/algoima.png';

const Algorithmics = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/upwork');
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="algorithmics-section">
      <div className="container1">
        <h2 className="section-title">Teaching Experience in Algorithmics </h2>
         <hr />
        <div className="cards-container">
          <div className="card">
            <FontAwesomeIcon icon={faLaptopCode} className="card-icon" />
            <div className="card-content">
              <h3 className="subheading">Core Teaching Areas</h3>
              <ul className="services-list">
                <li><strong>Algorithmics:</strong> Algorithm design, time complexity, sorting algorithms, and graph theory.</li>
                <li><strong>Data Structures:</strong> Linked lists, trees, stacks, and queues.</li>
                <li><strong>Python:</strong> Problem-solving, object-oriented programming, and modular programming.</li>
                <li><strong>Front-End Development:</strong> Building responsive web pages with HTML, CSS, and JavaScript.</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faProjectDiagram} className="card-icon" />
            <div className="card-content">
              <h3 className="subheading">Project-Based Learning</h3>
              <ul className="services-list">
                <li>Hands-on coding exercises to solve real-world problems.</li>
                <li>Guided <strong>50+ projects</strong>, including web applications and algorithmic solutions.</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faGraduationCap} className="card-icon" />
            <div className="card-content">
              <h3 className="subheading">Teaching Highlights</h3>
              <ul className="services-list">
                <li><strong>Experience:</strong> 4+ months of teaching algorithmics and software development.</li>
                <li><strong>Mentorship:</strong> One-on-one guidance, workshops, and personalized feedback for students.</li>
                <li><strong>Impact:</strong> Trained 40+ students, helping them excel in tech careers.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="button-container">
          <button className="navigate-button" onClick={handleNavigate}>Upwork Experience</button>
        </div>
      </div>
      <div className="container1">
           <h2 className="section-title">certificate</h2>
            <hr />
           <div className='co1'>
              <img src={imaalgo} alt='image'/>
           </div>
      </div>
    </section>
  );
};

export default Algorithmics;
