import React from 'react';
import './styles/AlxAfrica.css';  // Add this for custom styles

function AlxAfrica() {
  return (
    <section className="experience-section">
      <div className="container1">
        <h2 className="section-title">ALX Africa Tutor Experience</h2>
        <div className="experience-details">
          <p className="intro-text">
            I served as a software engineering tutor at ALX Africa, guiding students through a rigorous curriculum and hands-on projects. I worked to empower students to develop critical problem-solving skills, build real-world applications, and prepare them for successful careers in tech.
          </p>
          <div className="experience-content">
            <ul className="task-list">
              <li>Mentored over <strong>50 students</strong> in software development fundamentals, focusing on the MERN stack (MongoDB, Express.js, React, Node.js).</li>
              <li>Developed and taught a comprehensive curriculum covering key topics such as JavaScript, React, Node.js, MongoDB, and API design.</li>
              <li>Provided <strong>constructive feedback</strong> and code reviews to help students improve their code quality and development practices.</li>
              <li>Collaborated with fellow instructors to refine course materials, incorporating student feedback to improve course content and delivery.</li>
              <li>Helped students build projects, including full-stack applications, RESTful APIs, and interactive user interfaces.</li>
              <li>Organized and conducted weekly live coding sessions, Q&A, and troubleshooting for students.</li>
            </ul>
            <div className="experience-stats">
              <div className="stat-item">
                <p><span className="highlight">12 months</span> of tutoring experience</p>
              </div>
              <div className="stat-item">
                <p><span className="highlight">50+ students</span> mentored</p>
              </div>
              <div className="stat-item">
                <p><span className="highlight">20+ projects</span> guided to completion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AlxAfrica;
