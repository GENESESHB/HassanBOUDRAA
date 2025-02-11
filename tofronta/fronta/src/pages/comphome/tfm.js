import React, {useEffect} from 'react';
import './styles/upwork.css'; // Custom CSS file for styling
import tfmat from '../../assets/tfmat.png';

const TFM = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="tfm-section">
      <div className="container1">
        <h2 className="section-title">Pedagogical Techniques and Methods</h2>
         <hr />
       <div className="cards-container">
        <div className="card">
          <p className="intro-text">
            Over the past two years, I have had the privilege of teaching young children, an experience that has allowed me to refine my pedagogical skills and explore various teaching methods. This journey has not only enhanced my understanding of child psychology but also helped me tailor my teaching approach to suit individual needs. Below, I will highlight several pedagogical techniques and provide examples from my experience.
          </p>
        </div>

        <div className="card">
          <h3 className="subheading">Key Pedagogical Techniques in Teaching Children</h3>
            <li>
              <strong>Constructivism</strong> – This approach emphasizes that children learn best when they can actively construct their understanding through experience. I used hands-on activities and real-world examples to encourage exploration and discovery.
              <p className="example">Example: In a lesson about animals, I took the children to a zoo or used animal figurines for them to explore and create their own stories about the animals they saw.</p>
            </li>
        </div>
        <div className="card">
            <li>
              <strong>Project-Based Learning (PBL)</strong> – This technique involves students working on projects that integrate multiple subjects. I guided my students through projects where they learned by solving real-world problems.
              <p className="example">Example: One of the projects was about creating a sustainable garden. The children researched plants, designed the garden layout, and tracked their progress while learning about biology, environmental science, and teamwork.</p>
            </li>
        </div>
        <div className="card">
            <li>
              <strong>Inquiry-Based Learning</strong> – Encouraging curiosity and critical thinking by asking open-ended questions. I designed my lessons to allow children to explore answers on their own, facilitating learning through questioning and dialogue.
              <p className="example">Example: In a lesson about space, I asked the children, "What do you think it would be like to live on Mars?" They then worked together to research and present their ideas.</p>
            </li>
        </div>
        <div className="card">
            <li>
              <strong>Collaborative Learning</strong> – Group work helps children develop social skills, learn from peers, and build on each other's ideas. I often organized activities that required teamwork and communication.
              <p className="example">Example: The children worked in pairs to create a mural about the four seasons, discussing and deciding on the colors, symbols, and design elements together.</p>
            </li>
        </div>
        <div className="card">
            <li>
              <strong>Behaviorism</strong> – Based on the principle that behavior is shaped by reinforcement. I used rewards and positive reinforcement to encourage good behavior and participation.
              <p className="example">Example: I implemented a star chart where children earned stars for good behavior, helping them stay motivated and focused on learning tasks.</p>
            </li>
        </div>
        <div className="card">
            <li>
              <strong>Montessori Method</strong> – This student-centered approach allows children to learn through self-directed activity. I provided materials and tools for children to explore at their own pace, fostering independence and confidence.
              <p className="example">Example: In a math lesson, I used Montessori blocks to help children visualize and solve mathematical problems, allowing them to choose their activities based on interest and skill level.</p>
            </li>
        </div>

        <div className="card">
          <h3 className="subheading">Outcomes of Using These Techniques</h3>
          <p>
            By integrating these pedagogical techniques into my lessons, I observed significant growth in my students' cognitive, emotional, and social development. The results were evident in:
          </p>
          <ul className="outcomes-list">
            <strong>Improved Problem-Solving Skills:</strong><p> Through PBL and inquiry-based learning, students developed critical thinking skills and were able to approach problems with creativity.</p>
            <strong>Increased Engagement:</strong><p> The use of hands-on, interactive activities kept the students engaged and motivated to learn.</p>
            <strong>Stronger Collaboration:</strong><p> Group projects fostered teamwork and helped students learn how to communicate and resolve conflicts constructively.</p>
            <strong>Enhanced Confidence:</strong><p> As students took ownership of their learning, their self-esteem and confidence grew.</p>
          </ul>
        </div>
        <div className="card button-container">
          <a href="https://www.teachformorocco.org" target="_blank" rel="noopener noreferrer">
             <button className="navigate-button">Learn More About My Teaching Experience</button>
          </a>
        </div>
        <div className="container1">
           <h2 className="section-title">certificate</h2>
            <hr />
           <div className='co1'>
             <img src={tfmat} alt='image'/>
           </div>
        </div>
       </div>
      </div>
    </section>
  );
};

export default TFM;
