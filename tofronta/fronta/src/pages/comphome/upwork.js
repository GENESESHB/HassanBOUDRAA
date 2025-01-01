import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/upwork.css'; // Custom CSS file for styling

const Upwork = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/upwork');
  };

  return (
    <section className="upwork-section">
      <div className="container1">
        <h2 className="section-title">My Upwork Experience - Full Stack MERN Developer</h2>

        <p className="intro-text">
          Over the years, I have worked on various freelance projects through Upwork, specializing in Full Stack MERN development. 
          I have successfully delivered projects involving MongoDB, Express.js, React, and Node.js, helping clients create dynamic, responsive, and scalable web applications.
        </p>

        <div className="skills-and-services">
          <h3 className="subheading">MERN Stack Skills & Services</h3>
          <p>
            I offer a wide range of services as a Full Stack MERN Developer, including:
          </p>
          <ul className="services-list">
            <li><strong>MongoDB:</strong> Database design, data modeling, optimization, and complex queries using MongoDB for handling large-scale data.</li>
            <li><strong>Express.js:</strong> RESTful API development, backend logic, and integration with front-end technologies to build responsive and efficient applications.</li>
            <li><strong>React:</strong> Building dynamic, responsive, and user-friendly single-page applications (SPAs), with a focus on reusable components and state management using hooks.</li>
            <li><strong>Node.js:</strong> Server-side development with Node.js to handle client requests, integrate with databases, and manage backend services.</li>
            <li><strong>Authentication & Authorization:</strong> Implementing secure authentication and authorization mechanisms using JWT, OAuth, and Passport.js.</li>
            <li><strong>Deployment:</strong> Deploying applications to cloud platforms like AWS, Heroku, DigitalOcean, and others, ensuring high availability and scalability.</li>
            <li><strong>Version Control (Git):</strong> Using Git for code versioning, collaborating with teams, and managing codebases efficiently with GitHub or GitLab.</li>
            <li><strong>Testing & Debugging:</strong> Writing unit and integration tests using Jest, Mocha, and other testing frameworks to ensure code quality and reliability.</li>
            <li><strong>Real-time Applications:</strong> Building real-time chat applications, notifications, and live data updates using WebSockets or Socket.io.</li>
          </ul>
        </div>

        <div className="project-showcase">
          <h3 className="subheading">Notable Upwork Projects</h3>
          <p>
            Here are some of the projects I have worked on as a full stack MERN developer:
          </p>
          <ul className="project-list">
            <li>
              <strong>Project 1: E-Commerce Website</strong>
              <p>A full-fledged e-commerce application built with React, Node.js, and MongoDB, allowing users to browse products, make purchases, and manage orders.</p>
            </li>
            <li>
              <strong>Project 2: Real-Time Chat Application</strong>
              <p>A chat app developed with React and Node.js that supports real-time messaging and notifications, using WebSockets for live communication.</p>
            </li>
            <li>
              <strong>Project 3: Task Management System</strong>
              <p>A task management tool where users can create, update, and assign tasks. Integrated with MongoDB for data persistence and React for the front-end interface.</p>
            </li>
            <li>
              <strong>Project 4: Portfolio Website</strong>
              <p>A personal portfolio website to showcase my skills, experience, and projects, developed using React and Node.js, with a custom backend for form submissions.</p>
            </li>
          </ul>
        </div>

        <div className="button-container">
          <button className="navigate-button" onClick={handleNavigate}>Explore My Upwork Portfolio</button>
        </div>
      </div>
    </section>
  );
};

export default Upwork;
