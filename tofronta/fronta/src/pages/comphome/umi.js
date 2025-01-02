import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/upwork.css'; // Custom CSS file for styling

const Umi = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/umi');
  };

  return (
    <section className="umi-section">
      <div className="container1">
        <h2 className="section-title">My Educational Background and Expertise</h2>

        <div className="card">
          <p className="intro-text">
            I have a diverse educational background that spans multiple fields, allowing me to approach challenges from various perspectives. My academic journey includes studying electronics, industrial informatics, quantum mechanics, analog electronics, solid mechanics, wave optics, algebra, analysis, and statics. Additionally, I have developed pedagogical skills by teaching young children, allowing me to refine my approach to learning and problem-solving.
          </p>
        </div>

        <div className="card">
          <h3 className="subheading">Fields of Study</h3>
          <ul className="fields-list">
            <li><strong>Electronics</strong> – I have gained in-depth knowledge of both digital and analog electronics, understanding the principles of circuit design, signal processing, and embedded systems.</li>
            <li><strong>Industrial Informatics</strong> – Studied the integration of information technology with industrial processes, focusing on automation, control systems, and data analysis in manufacturing environments.</li>
            <li><strong>Quantum Mechanics</strong> – A deep dive into the principles of quantum theory, exploring particle behavior, wave-particle duality, quantum entanglement, and the foundations of quantum computing.</li>
            <li><strong>Analog Electronics</strong> – Expertise in the design, analysis, and application of analog circuits, including amplifiers, filters, oscillators, and power electronics.</li>
            <li><strong>Solid Mechanics</strong> – Studied the physical behavior of solid materials, including stress, strain, and deformation, applying principles to structural and mechanical system design.</li>
            <li><strong>Wave Optics</strong> – Gained a solid understanding of the behavior of light as a wave, covering diffraction, interference, polarization, and other phenomena of optical waves.</li>
            <li><strong>Algebra</strong> – A comprehensive understanding of algebraic structures, including linear algebra, matrix theory, and group theory, used in solving complex engineering problems.</li>
            <li><strong>Analysis</strong> – Deep knowledge of mathematical analysis, focusing on limits, continuity, differentiation, and integration, critical for modeling physical systems in engineering.</li>
            <li><strong>Statics</strong> – Studied forces and their effect on stationary bodies, an essential area of knowledge for mechanical and civil engineering applications.</li>
          </ul>
        </div>

        <div className="card">
          <h3 className="subheading">Pedagogical Techniques in Teaching</h3>
          <p>
            Alongside my technical studies, I have had the opportunity to teach young children, which has allowed me to develop my pedagogical techniques and methods. Over the past two years, I have employed various approaches to foster a positive learning environment:
          </p>
          <ul className="teaching-techniques">
            <li><strong>Constructivism:</strong> Using hands-on activities and real-world examples to encourage children to build their understanding.</li>
            <li><strong>Project-Based Learning (PBL):</strong> Engaging children in real-world projects to learn through exploration and problem-solving.</li>
            <li><strong>Inquiry-Based Learning:</strong> Encouraging critical thinking and curiosity by asking open-ended questions and allowing children to explore answers independently.</li>
            <li><strong>Collaborative Learning:</strong> Promoting teamwork and communication through group activities and collaborative problem-solving.</li>
            <li><strong>Behaviorism:</strong> Using positive reinforcement and rewards to encourage good behavior and participation in learning activities.</li>
          </ul>
        </div>

        <div className="button-container">
          <button className="navigate-button" onClick={handleNavigate}>Learn More About My Expertise</button>
        </div>
      </div>
    </section>
  );
};

export default Umi;
