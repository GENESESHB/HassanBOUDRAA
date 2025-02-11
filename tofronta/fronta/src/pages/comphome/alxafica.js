import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCalendarAlt, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import './styles/upwork.css'; // Custom CSS file for styling
import {useNavigate} from 'react-router-dom';
import alxaf  from '../../assets/images/certi-image.png';
import alxlettre from '../../assets/image-lettre.png';

const AlxAfrica = () => {
  const navigate = useNavigate();
  const nav = () => {
    navigate('/algorithmics');
  }
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
  <div>
    <section className="alx-africa-section">
      <div className="container1">
        <h2 className="section-title">ALX Africa Tutor Experience</h2>
         <hr />
        <div className="cards-container">
          <div className="card">
            <FontAwesomeIcon icon={faUsers} className="card-icon" />
            <div className="card-content">
              <h3 className="subheading">Mentorship</h3>
              <ul className="services-list">
                <li>Mentored over <strong>50 students</strong> in MERN stack fundamentals.</li>
                <li>Conducted weekly live coding sessions and troubleshooting.</li>
                <li>Provided constructive feedback and code reviews to improve practices.</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faCalendarAlt} className="card-icon" />
            <div className="card-content">
              <h3 className="subheading">Curriculum Development</h3>
              <ul className="services-list">
                <li>Developed and taught topics like JavaScript, React, Node.js, and MongoDB.</li>
                <li>Collaborated with instructors to refine materials based on feedback.</li>
                <li>Integrated real-world examples to enhance learning.</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon icon={faProjectDiagram} className="card-icon" />
            <div className="card-content">
              <h3 className="subheading">Project Guidance</h3>
              <ul className="services-list">
                <li>Guided <strong>30+ projects</strong> to successful completion.</li>
                <li>Helped students build full-stack applications and RESTful APIs.</li>
                <li>Prepared students for real-world tech challenges.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="button-container">
          <button className="navigate-button" onClick={nav}>
            Explore Other Experience
          </button>
        </div>
        <div className="container1">
           <h2 className="section-title">certificate</h2>
            <hr />
           <div className='co1'>
              <img src={alxaf} alt='image'/>
              <img src={alxlettre} alt='image'/>
           </div>
        </div>
      </div>
    </section>
  </div>
  );
};

export default AlxAfrica;
