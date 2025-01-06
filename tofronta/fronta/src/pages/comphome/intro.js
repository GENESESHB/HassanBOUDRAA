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
          <h2>I'm Hassan Boudraa</h2>
          <p>
            a Full Stack MERN Developer with over 3 years of experience.
            Passionate about web development, algorithms, and learning new technologies.
            Skilled in React, Node.js, MongoDB, and Express.
            My goal is to craft efficient, elegant web applications delivering optimal user experiences.
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
