import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/AlxAfrica.css';  // Add this for custom styling

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
            <ul className="task-list">
              <li>Instructed students on fundamental and advanced topics in <strong>Algorithmics</strong>, including algorithm design, time complexity, sorting algorithms, and graph theory.</li>
              <li>Guided students through the implementation of <strong>data structures</strong> like linked lists, trees, stacks, and queues.</li>
              <li>Taught <strong>Python</strong> for problem-solving, focusing on object-oriented programming, functions, and modules.</li>
              <li>Helped students understand <strong>front-end development</strong> technologies like HTML, CSS, and JavaScript, focusing on creating responsive web pages and user interfaces.</li>
              <li>Designed and conducted hands-on coding exercises to improve problem-solving and coding skills in real-world applications.</li>
              <li>Led workshops and provided one-on-one mentorship, offering personalized feedback on code and algorithm improvements.</li>
            </ul>
            <div className="experience-stats">
              <div className="stat-item">
                <p><span className="highlight">3+ years</span> of teaching experience in software development</p>
              </div>
              <div className="stat-item">
                <p><span className="highlight">100+ students</span> taught in algorithmics and programming</p>
              </div>
              <div className="stat-item">
                <p><span className="highlight">50+ projects</span> mentored, including real-world applications</p>
              </div>
            </div>
          </div>
          <button className="navigate-button" onClick={handleNavigate}>View More Details</button>
        </div>
      </div>
    </section>
  );
};

export default Algorithmics;
