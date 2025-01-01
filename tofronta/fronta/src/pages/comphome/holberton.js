import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Holberton.css'; // Add custom CSS for styling

const Holberton = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/holberton');
  };

  return (
    <section className="holberton-section">
      <div className="container1">
        <h2 className="section-title">My Holberton School Experience</h2>
        <div className="holberton-details">
          <p className="intro-text">
            I had the privilege of studying at Holberton School, where I gained extensive knowledge in software engineering, covering a wide range of technologies, programming languages, and development practices. Below is a summary of the key skills and projects I completed during my studies.
          </p>
          <div className="skills-list">
            <h3 className="subheading">Skills & Technologies Learned</h3>
            <ul className="skills">
              <li><strong>JavaScript (JS)</strong> - Mastered the fundamentals of JavaScript and ES6+ features for building modern web applications.</li>
              <li><strong>HTML & CSS</strong> - Learned to build responsive, accessible, and user-friendly websites using HTML5 and CSS3.</li>
              <li><strong>Python</strong> - Gained proficiency in Python, working on algorithms, data structures, and backend development.</li>
              <li><strong>C Language</strong> - Developed low-level programming skills in C, working on memory management and optimization techniques.</li>
              <li><strong>SQL</strong> - Gained experience in querying databases and managing relational databases using SQL.</li>
              <li><strong>Flask</strong> - Built backend applications using the Flask framework, focusing on RESTful APIs and web services.</li>
              <li><strong>React</strong> - Worked with React to build dynamic and interactive user interfaces, including state management and component design.</li>
              <li><strong>DevOps Tools</strong> - Explored DevOps tools for CI/CD, containerization, and cloud deployment, including Docker and GitLab CI.</li>
            </ul>
          </div>

          <div className="projects-list">
            <h3 className="subheading">Projects Completed</h3>
            <ul className="projects">
              <li>
                <strong>Airbnb Clone</strong> - Developed a full-stack Airbnb-like platform with a focus on user authentication, booking functionality, and real-time data handling.
              </li>
              <li>
                <strong>Portfolio Website</strong> - Designed and implemented a personal portfolio website showcasing my skills, projects, and achievements.
              </li>
              <li>
                <strong>Landing Pages</strong> - Created responsive and engaging landing pages for various applications, focusing on user experience and conversion optimization.
              </li>
              <li>
                <strong>API Development</strong> - Developed several RESTful APIs using Flask and Node.js to handle user data, authentication, and other business logic.
              </li>
            </ul>
          </div>

          <div className="holberton-stats">
            <div className="stat-item">
              <p><span className="highlight">1+ year</span> of full-stack development experience</p>
            </div>
            <div className="stat-item">
              <p><span className="highlight">10+ projects</span> completed during my time at Holberton</p>
            </div>
          </div>

          <button className="navigate-button" onClick={handleNavigate}>Explore My Holberton Journey</button>
        </div>
      </div>
    </section>
  );
};

export default Holberton;
