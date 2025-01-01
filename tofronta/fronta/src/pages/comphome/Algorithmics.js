import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/algo.css';  // Add this for custom styling
import { FaPython, FaCode, FaLaptopCode, FaProjectDiagram, FaGraduationCap } from 'react-icons/fa'; // Importing Font Awesome icons

const Algorithmics = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/algorithmics');
  };

  return (
    <section className="algorithmics-section">
      <div className="container1">
        <h2 className="section-title">Teaching Experience in Algorithmics and Software Development</h2>
        <div className="experience-details">
          <p className="intro-text">
            As an instructor, I've had the privilege of teaching algorithmic problem solving, data structures, and various programming languages. I have guided students through complex topics in Python, JavaScript, HTML, CSS, and front-end development, equipping them with the skills needed to build efficient algorithms and intuitive user interfaces.
          </p>

          <div className="experience-content">
            <h3 className="subheading">Key Teaching Areas</h3>
            <ul className="task-list">
              <li><FaCode /> <strong>Algorithmics</strong>: Algorithm design, time complexity, sorting algorithms, graph theory.</li>
              <li><FaPython /> <strong>Data Structures</strong>: Linked lists, trees, stacks, and queues.</li>
              <li><FaLaptopCode /> <strong>Python</strong>: Problem-solving, object-oriented programming, functions, and modules.</li>
              <li><FaCode /> <strong>Front-End Development</strong>: HTML, CSS, JavaScript, building responsive web pages.</li>
              <li><FaProjectDiagram /> <strong>Real-World Projects</strong>: Hands-on coding exercises, real-world problem-solving.</li>
              <li><FaGraduationCap /> <strong>Mentorship</strong>: Workshops, one-on-one feedback, and personalized guidance.</li>
            </ul>

            <div className="experience-stats">
              <div className="stat-item">
                <FaGraduationCap /> <p><span className="highlight">3+ years</span> of teaching experience</p>
              </div>
              <div className="stat-item">
                <FaCode /> <p><span className="highlight">100+ students</span> taught in algorithmics and programming</p>
              </div>
              <div className="stat-item">
                <FaProjectDiagram /> <p><span className="highlight">50+ projects</span> mentored, including real-world applications</p>
              </div>
            </div>
          </div>

          <div className="button-container">
            <button className="navigate-button" onClick={handleNavigate}>View More Details</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Algorithmics;
