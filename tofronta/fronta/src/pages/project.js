import React, {useEffect} from 'react';
import './comphome/styles/upwork.css';  // Ensure that you have linked the upwork.css file properly
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';  // Import GitHub icon from Font Awesome

const Projects = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="upwork-section">
      <div className="container1">
        <h2 className="section-title">Mes projets</h2>
          <hr />
        {/* Cards container for displaying projects */}
        <div className="cards-container">
          {/* Projet 1 */}
          <div className="card">
            <div className="card-icon">
              <i className="fas fa-code"></i> {/* Add any icon you want */}
            </div>
            <div className="card-content">
              <h3 className="subheading">Logiciel de shell (Langage C)</h3>
              <p>
                A shell-like software project developed in C. This software is designed to interact with the client demands, simulating the behavior of WSL (Windows Subsystem for Linux). It efficiently handles requests and provides responses, making use of binary trees and algorithms to organize and process client data.
              </p>
              <ul className="project-list">
                <li>Algorithmes sur arbre binaire</li>
                <li>Traitement des demandes clients</li>
              </ul>
              <p><strong>Durée:</strong> 3 mois</p>
              <p><strong>Technologies utilisées:</strong> C, Algorithmes, Structures de données</p>
            </div>
            <div className="button-container">
              <a href="https://github.com/yourusername/shell-project" target="_blank" rel="noopener noreferrer">
                <button className="navigate-button">
                  <FontAwesomeIcon icon={faGithub} /> Voir sur GitHub
                </button>
              </a>
            </div>
          </div>

          {/* Projet 2 */}
          <div className="card">
            <div className="card-icon">
              <i className="fas fa-code"></i> {/* Add any icon you want */}
            </div>
            <div className="card-content">
              <h3 className="subheading">Airbnb Clone</h3>
              <p>
                An Airbnb clone built using Python, SQL, and API services. The platform is structured using Object-Oriented Programming (OOP) principles, implementing Python classes to handle booking, search, and filtering logic. It uses an SQL database to store and retrieve data, making it a fully functional backend structure for a vacation rental service.
              </p>
              <ul className="project-list">
                <li>Backend: Python, API</li>
                <li>Base de données: SQL</li>
                <li>Filtrage et recherche des utilisateurs</li>
                <li>Structure OOP</li>
              </ul>
              <p><strong>Durée:</strong> 4 mois</p>
              <p><strong>Technologies utilisées:</strong> Python, SQL, API, OOP, JavaScript</p>
            </div>
            <div className="button-container">
              <a href="https://github.com/yourusername/airbnb-clone" target="_blank" rel="noopener noreferrer">
                <button className="navigate-button">
                  <FontAwesomeIcon icon={faGithub} /> Voir sur GitHub
                </button>
              </a>
            </div>
          </div>

          {/* Projet 3 */}
          <div className="card">
            <div className="card-icon">
              <i className="fas fa-code"></i> {/* Add any icon you want */}
            </div>
            <div className="card-content">
              <h3 className="subheading">Island4U.tech</h3>
              <p>
                Island4U.tech is a property listing platform built with Flask and Python. It connects users with local hosts offering vacation rental properties. The project utilizes SQLAlchemy to interact with the database and Jinja for dynamic rendering of HTML content. It provides a seamless experience for browsing properties, making reservations, and viewing available listings.
              </p>
              <ul className="project-list">
                <li>Backend: Flask, Python, SQLAlchemy</li>
                <li>Frontend: HTML, CSS</li>
                <li>Rendu dynamique: Jinja</li>
              </ul>
              <p><strong>Durée:</strong> 5 mois</p>
              <p><strong>Technologies utilisées:</strong> Flask, Python, SQLAlchemy, Jinja, HTML, CSS</p>
            </div>
            <div className="button-container">
              <a href="https://github.com/yourusername/island4u" target="_blank" rel="noopener noreferrer">
                <button className="navigate-button">
                  <FontAwesomeIcon icon={faGithub} /> Voir sur GitHub
                </button>
              </a>
            </div>
          </div>

          {/* Projet 4 */}
          <div className="card">
            <div className="card-icon">
              <i className="fas fa-code"></i> {/* Add any icon you want */}
            </div>
            <div className="card-content">
              <h3 className="subheading">LocalLens</h3>
              <p>
                LocalLens is a platform designed to connect local families with tourists, offering unique and authentic experiences. Built with React for the frontend and Django for the backend, it includes features like profile management, service offerings, and an integrated PostgreSQL database for data storage.
              </p>
              <ul className="project-list">
                <li>Frontend: React</li>
                <li>Backend: Django</li>
                <li>Base de données: PostgreSQL</li>
                <li>Gestion des profils et services</li>
              </ul>
              <p><strong>Durée:</strong> 6 mois</p>
              <p><strong>Technologies utilisées:</strong> React, Django, PostgreSQL, JavaScript, CSS</p>
            </div>
            <div className="button-container">
              <a href="https://github.com/yourusername/locallens" target="_blank" rel="noopener noreferrer">
                <button className="navigate-button">
                  <FontAwesomeIcon icon={faGithub} /> Voir sur GitHub
                </button>
              </a>
            </div>
          </div>

          {/* Projet 5: Locallens.inc */}
          <div className="card">
            <div className="card-icon">
              <i className="fas fa-code"></i> {/* Add any icon you want */}
            </div>
            <div className="card-content">
              <h3 className="subheading">Locallens.inc</h3>
              <p>
                Locallens.inc is a platform built with the MERN stack that allows local families to offer unique stays for tourists. The platform enables tourists to reserve and book accommodations directly with the family hosts. In addition to traditional bookings, users can explore a section for experiences, viewing real-time videos and interactions from past visitors. The platform also allows users to add their services, market themselves, and upload reels to attract tourists and gain visibility on the platform.
              </p>
              <ul className="project-list">
                <li>Frontend: React</li>
                <li>Backend: Node.js, Express</li>
                <li>Database: MongoDB</li>
                <li>Video & Marketing: User-generated reels, Platform Visibility</li>
              </ul>
              <p><strong>Durée:</strong> 8 mois</p>
              <p><strong>Technologies utilisées:</strong> React, Node.js, Express, MongoDB, JavaScript, CSS</p>
            </div>
            <div className="button-container">
              <a href="https://github.com/GENESESHB/Locallens.inc" target="_blank" rel="noopener noreferrer">
                <button className="navigate-button">
                  <FontAwesomeIcon icon={faGithub} /> Voir sur GitHub
                </button>
              </a>
            </div>
          </div>
          {/* Projet 6: DevOps - Nginx, Certbot, HTTPS */}
          <div className="card">
            <div className="card-icon">
              <i className="fas fa-cogs"></i> {/* Add any icon you want */}
            </div>
            <div className="card-content">
              <h3 className="subheading">DevOps - Nginx, Certbot, HTTPS</h3>
              <p>
                This project involves configuring a secure web server using **Nginx** for reverse proxy and hosting, along with **Certbot** for generating free SSL certificates to enable HTTPS for secure communication. The project ensures secure data transmission by configuring the necessary protocols, such as TLS/SSL, and setting up proper firewall and security configurations.
              </p>
              <ul className="project-list">
                <li>Web Server: Nginx</li>
                <li>SSL/TLS: Certbot for HTTPS</li>
                <li>Protocols: HTTP, HTTPS, TLS</li>
                <li>Security: Firewall & SSL Configuration</li>
              </ul>
              <p><strong>Durée:</strong> 2 mois</p>
              <p><strong>Technologies utilisées:</strong> Nginx, Certbot, TLS, SSL, Firewall</p>
            </div>
            <div className="button-container">
              <a href="https://github.com/GENESESHB/alx-system_engineering-devops" target="_blank" rel="noopener noreferrer">
                <button className="navigate-button">
                  <FontAwesomeIcon icon={faGithub} /> Voir sur GitHub
                </button>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">
              <i className="fas fa-github"></i>
            </div>
            <div className="card-content">
              <h3 className="subheading">Explorez Plus de Projets</h3>
              <p>
                J'ai plus de 30 projets développés dans différentes langages de programmation. Explorez mon GitHub pour en découvrir plus et voir comment j'ai utilisé des technologies variées pour résoudre différents types de problèmes.
              </p>
              <div className="button-container">
                <a href="https://github.com/GENESESHB" target="_blank" rel="noopener noreferrer">
                  <button className="navigate-button">
                    <FontAwesomeIcon icon={faGithub} /> Voir mon GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
