import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/home.css';
import Introduction from './comphome/intro';
import alxAfrica from '../assets/alxafrica.jpeg';
import upwork from '../assets/upwork_logo.jpeg';
import alxVentures from '../assets/alxventurs.jpeg';
import universite from '../assets/umi.png';
import holberton from '../assets/holberton.jpeg';
import reactIcon from '../assets/React_Logo_SVG.svg.png';
import nodejsIcon from '../assets/nodejs.png';
import mongodbIcon from '../assets/mongodb.webp';
import algo from '../assets/algo.jpeg';
import tfm from '../assets/tfm.jpeg';
import express from '../assets/express.webp';

// Import FontAwesome icons
import { FaChalkboardTeacher, FaBriefcase, FaLaptopCode, FaCogs, FaCalendarAlt } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="home-page">
      <Introduction />
      <section className="experience">
        <h2 className='exp' >Expérience</h2>
        <div className="card-container">
          {[
            { img: alxAfrica, title: 'ALX Africa', role: 'role: software engineering tutor', duration: 'duration: 2 ans', roleIcon: <FaChalkboardTeacher />, durationIcon: <FaCalendarAlt />, path: '/alxafrica' },
            { img: upwork, title: 'Upwork', role: 'role: Développeur freelance', duration: 'duration: 3 ans', roleIcon: <FaLaptopCode />, durationIcon: <FaCalendarAlt />, path: '/upwork' },
            { img: alxVentures, title: 'ALX Ventures', role: 'role: besniss student ', duration: 'duration: 1 an', roleIcon: <FaBriefcase />, durationIcon: <FaCalendarAlt />, path: '/alxventurs' },
            { img: algo, title: 'Algorithmics', role: 'role: algorithmics teacher', duration: 'duration: 6 mois', roleIcon: <FaBriefcase/>, durationIcon: <FaCalendarAlt />, path: '/algorithmics' },
            { img: tfm, title: 'TFM', role: 'role: teacher', duration: 'duration: 1 an', roleIcon: <FaBriefcase />, durationIcon: <FaCalendarAlt />, path: '/tfm' }
          ]
          .map(({ img, title, role, duration, roleIcon, durationIcon, path }) => (
            <div className="card" key={title}>
              <img src={img} alt={title} />
              <h3>{title}</h3>
              <p>{roleIcon} {role}</p> {/* Role and its icon */}
              <p>{durationIcon} {duration}</p> {/* Duration and its icon */}
              <button onClick={() => handleNavigation(path)}>See more...</button>
            </div>
          ))}
        </div>
      </section>
      <section className="education">
        <h2 className='exp' >Éducation</h2>
        <div className="card-container">
          {[
            { img: universite, title: 'Université', desc: 'Bachelor en Électronique et Informatique Industrielle', path: '/umi' },
            { img: holberton, title: 'Holberton School', desc: 'Software Engineering', path: '/holberton' }
          ]
          .map(({ img, title, desc, path }) => (
            <div className="card" key={title}>
              <img src={img} alt={title} />
              <h3>{title}</h3>
              <p>{desc}</p>
              <button onClick={() => handleNavigation(path)}>See more...</button>
            </div>
          ))}
        </div>
      </section>
      <section className="services">
        <h2 className='exp' >Services</h2>
        <div className="card-container">
          {[
            { img: reactIcon, title: 'React', desc: 'Développement Web avec React', path: '/react' },
            { img: nodejsIcon, title: 'Node.js', desc: 'Développement Backend avec Node.js', path: '/nodejs' },
            { img: mongodbIcon, title: 'MongoDB', desc: 'Base de données avec MongoDB', path: '/mongodb' },
            { img: express, title: 'Express', desc: 'Conception et implémentation de bases de données NoSQL', path: '/express' }
          ]
          .map(({ img, title, desc, path }) => (
            <div className="card" key={title}>
              <img src={img} alt={title} />
              <h3>{title}</h3>
              <p>{desc}</p>
              <button onClick={() => handleNavigation(path)}>See more...</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
