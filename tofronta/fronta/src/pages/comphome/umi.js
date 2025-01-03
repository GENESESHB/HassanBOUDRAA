import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/upwork.css'; // Custom CSS file for styling

const Umi = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/umi');
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="umi-section">
      <div className="container1">
        <h2 className="section-title"> Educational Background</h2>
         <hr />
       <div className="cards-container">
        <div className="card">
          <p className="intro-text">
            I have a diverse educational background that spans multiple fields, allowing me to approach challenges from various perspectives. My academic journey includes studying electronics, industrial informatics, quantum mechanics, analog electronics, solid mechanics, wave optics, algebra, analysis, and statics.
          </p>
        </div>

        <div className="card">
          <h3 className="subheading">Electronics</h3>
            <p>I have gained in-depth knowledge of both digital and analog electronics, understanding the principles of circuit design, signal processing, and embedded systems.</p>
            <p>Studied the integration of information technology with industrial processes, focusing on automation, control systems, and data analysis in manufacturing environments.</p>
        </div>
        <div className="card">
          <h3 className="subheading">Quantum Mechanics</h3>
            <p> deep dive into the principles of quantum theory, exploring particle behavior, wave-particle duality, quantum entanglement, and the foundations of quantum computing.</p>
        </div>
        <div className="card">
          <h3 className="subheading">Analog Electronics</h3>
            <p>Expertise in the design, analysis, and application of analog circuits, including amplifiers, filters, oscillators, and power electronics.</p>
        </div>
        <div className="card">
          <h3 className="subheading">Solid Mechanics</h3>
            <p>Studied the physical behavior of solid materials, including stress, strain, and deformation, applying principles to structural and mechanical system design.</p>
        </div>
        <div className="card">
          <h3 className="subheading">Wave Optics</h3>
            <p> Gained a solid understanding of the behavior of light as a wave, covering diffraction, interference, polarization, and other phenomena of optical waves.</p>
        </div>
        <div className="card">
          <h3 className="subheading">Solid Mechanics</h3>
            <p>A comprehensive understanding of algebraic structures, including linear algebra, matrix theory, and group theory, used in solving complex engineering problems.</p>
        </div>
        <div className="card">
          <h3 className="subheading">Analysis</h3>
            <p>Deep knowledge of mathematical analysis, focusing on limits, continuity, differentiation, and integration, critical for modeling physical systems in engineering.</p>
        </div>
        <div className="card">
          <h3 className="subheading">Statics</h3>
            <p>Studied forces and their effect on stationary bodies, an essential area of knowledge for mechanical and civil engineering applications.</p>
        </div>
        <div className="button-container">
          <button className="navigate-button" onClick={handleNavigate}>Learn More About My Expertise</button>
        </div>
       </div>
      </div>
    </section>
  );
};

export default Umi;
