import React, {useEffect} from 'react';
import './comphome/styles/upwork.css'; // Ensure your CSS file is linked for styles

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <section className="upwork-section">
      <div className="container1">
        <h2 className="section-title">About Me</h2>
        <p className='mop'>
          I am a software engineer passionate about creating innovative and effective solutions. 
          I combine advanced technical skills with interpersonal skills to deliver high-quality projects on time.
        </p>
        <hr />
        <div className="cards-container">
          {/* Communication Card */}
          <div className="card">
            <div className="card-icon">
              <i className="fas fa-comments"></i>
            </div>
            <div className="card-content">
              <h3 className="subheading">Communication</h3>
              <p>
                The ability to explain technical concepts clearly and accessibly to everyone.
                This facilitates smooth collaboration with colleagues, clients, and non-technical stakeholders, ensuring a good understanding of projects.
              </p>
            </div>
          </div>
          
          {/* Problem-Solving Card */}
          <div className="card">
            <div className="card-icon">
              <i className="fas fa-puzzle-piece"></i>
            </div>
            <div className="card-content">
              <h3 className="subheading">Problem-Solving</h3>
              <p>
                Every problem is a challenge to be tackled. This approach allows me to find creative and innovative solutions to overcome complex technical obstacles,
                ensuring optimized results even in difficult situations.
              </p>
            </div>
          </div>

          {/* Creativity & Imagination Card */}
          <div className="card">
            <div className="card-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <div className="card-content">
              <h3 className="subheading">Creativity and Imagination</h3>
              <p>
                Approaching challenges with a unique vision and new ideas allows me to find original solutions to problems and continually improve projects.
                It stimulates innovation and continuous improvement.
              </p>
            </div>
          </div>

          {/* Autonomy & Organization Card */}
          <div className="card">
            <div className="card-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <div className="card-content">
              <h3 className="subheading">Autonomy and Organization</h3>
              <p>
                The ability to work independently while managing my time and priorities effectively ensures optimal productivity.
                This skill helps meet deadlines while maintaining a high standard of work.
              </p>
            </div>
          </div>

          {/* Explaining & Transmitting Information Card */}
          <div className="card">
            <div className="card-icon">
              <i className="fas fa-book-open"></i>
            </div>
            <div className="card-content">
              <h3 className="subheading">Explaining and Transmitting Information</h3>
              <p>
                Communicating complex information in a clear and pedagogical manner is essential for smooth project execution.
                It allows the team and clients to quickly understand the key points, reducing the risk of misunderstandings.
              </p>
            </div>
          </div>

          {/* Negotiation Card */}
          <div className="card">
            <div className="card-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <div className="card-content">
              <h3 className="subheading">Negotiation</h3>
              <p>
                Being able to discuss compromises and find win-win solutions with stakeholders is a key skill in project management.
                It promotes effective collaboration and helps achieve outcomes beneficial for all parties involved.
              </p>
            </div>
          </div>
        </div>

        <div className="button-container">
          <button className="navigate-button">Explore My Projects</button>
        </div>
      </div>
    </section>
  );
};

export default About;
