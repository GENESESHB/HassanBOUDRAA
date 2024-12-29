import React from 'react';
import {useNavigate} from 'react-router-dom';
import './styles/home.css';
import Introduction from './comphome/intro';
import alxAfrica from '../assets/images/image-lettre.png';
import upwork from '../assets/images/image-lettre.png';
import alxVentures from '../assets/images/image-lettre.png';
import universite from '../assets/images/image-lettre.png';
import holberton from '../assets/images/image-lettre.png';
import reactIcon from '../assets/images/image-lettre.png';
import nodejsIcon from '../assets/images/image-lettre.png';
import mongodbIcon from '../assets/images/image-lettre.png';

const Home = () => {
  const navigate = useNavigate();
  const toalxafrica = () => {
      navigate("/alxafrica");
  };
  const toupwork = () => {
      navigate("/upwork");
  };
  const toalxveturs = () => {
      navigate("/alxventurs");
  };
  const toalgorithmics = () => {
      navigate("/algorithmics");
  };
  const totfm = () => {
      navigate("/tfm");
  };
  const toholberton = () => {
      navigate("/holberton");
  };
  const toumi = () => {
      navigate("/umi");
  };
  const toreact = () => {
      navigate("/react");
  };
  const tonodejs = () => {
      navigate("/nodejs");
  };
  const toexpress = () => {
      navigate("/express");
  };
  const tomongodb = () => {
      navigate("/mongodb");
  };

  return (
    <div className="home-page">
      <Introduction />
      <section className="experience">
        <h2>Expérience</h2>
        <div className="experience-cards">
          <div className="card">
            <img src={alxAfrica} alt="ALX Africa" />
            <h3>ALX Africa</h3>
            <p>Enseignant en algorithmique et développement web</p>
            <button onClick={toalxafrica}> see more ...</button>
          </div>
          <div className="card">
            <img src={upwork} alt="Upwork" />
            <h3>Upwork</h3>
            <p>Développeur freelance pour divers projets web</p>
            <button onClick={toupwork}> see more ...</button>
          </div>
          <div className="card">
            <img src={alxVentures} alt="ALX Ventures" />
            <h3>ALX Ventures</h3>
            <p>Développeur Full Stack pour des startups</p>
            <button onClick={toalxveturs}> see more ...</button>
          </div>
          <div className="card">
            <img src={alxVentures} alt="algorithmics" />
            <h3>Algorithmics</h3>
            <p>Développeur Full Stack pour des startups</p>
            <button onClick={toalgorithmics}> see more ...</button>
          </div>
          <div className="card">
            <img src={alxVentures} alt="ALX Ventures" />
            <h3>tfm</h3>
            <p>Développeur Full Stack pour des startups</p>
            <button onClick={totfm}> see more ...</button>
          </div>
        </div>
      </section>
      <section className="education">
        <h2>Éducation</h2>
        <div className="education-cards">
          <div className="card">
            <img src={universite} alt="Université" />
            <h3>Bachelor en Électronique et Informatique Industrielle</h3>
            <p>Université ...</p>
            <button onClick={toumi}> see more ...</button>
          </div>
          <div className="card">
            <img src={holberton} alt="Holberton School" />
            <h3>Software Engineering</h3>
            <p>ALX Holberton School</p>
            <button onClick={toholberton}> see more ...</button>
          </div>
        </div>
      </section>
      <section className="services">
        <h2>Services</h2>
        <div className="services-cards">
          <div className="card">
            <img src={reactIcon} alt="React" />
            <h3>Développement Web avec React</h3>
            <p>Création d'applications web responsives et interactives</p>
            <button onClick={toreact}> see more ...</button>
          </div>
          <div className="card">
            <img src={nodejsIcon} alt="Node.js" />
            <h3>Développement Backend avec Node.js et Express</h3>
            <p>Création d'APIs sécurisées et performantes</p>
            <button onClick={tonodejs}> see more ...</button>
          </div>
          <div className="card">
            <img src={mongodbIcon} alt="express" />
            <h3>Base de données avec MongoDB</h3>
            <p>Conception et implémentation de bases de données NoSQL</p>
            <button onClick={toexpress}> see more ...</button>
          </div>
          <div className="card">
            <img src={mongodbIcon} alt="MongoDB" />
            <h3>Base de données avec MongoDB</h3>
            <p>Conception et implémentation de bases de données NoSQL</p>
            <button onClick={tomongodb}> see more ...</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
