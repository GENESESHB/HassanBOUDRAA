import React, { useState } from "react";
import hhassan from "../../assets/images/hhassan"; // Adjust the path to your image
import "./Introduction.css"; // Import the updated CSS

const Introduction = () => {
  const [showFullText, setShowFullText] = useState(false);

  const handleToggleText = () => {
    setShowFullText((prevState) => !prevState);
  };

  return (
    <section className="introduction">
      <div className="intro-content">
        <div className="welcome-text">
          <h1>Hello</h1>
          <p>
            Welcome to the portfolio of MERN stack software engineering and
            design. Explore my projects, experience, and the passion I bring to
            technology and creativity.
          </p>
        </div>
        <div className={`card1 ${showFullText ? "show-full-text" : ""}`}>
          <img src={hhassan} alt="Mon image" />
          <h2>Je suis Hassan Boudraa</h2>
          <p>
            Développeur Full Stack MERN avec plus de 3 ans d'expérience.
            Passionné par le développement web, l'algorithmique et
            l'apprentissage de nouvelles technologies. J'ai travaillé avec des
            outils comme React, Node.js, MongoDB et Express. Mon objectif est
            de créer des applications web efficaces et élégantes tout en
            fournissant une expérience utilisateur optimale.
          </p>
          <button className="btn" onClick={handleToggleText}>
            {showFullText ? "Voir moins" : "En savoir plus"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
