import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/node.css'; // Custom CSS file for styling

const NodeJS = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/nodejs');
  };

  return (
    <section className="nodejs-section">
      <div className="container1">
        <h2 className="section-title">Node.js: The JavaScript Runtime</h2>
        <div className="nodejs-details">
          <p className="intro-text">
            Node.js is an open-source, cross-platform JavaScript runtime that allows developers to build scalable and high-performance applications using JavaScript on the server side. Node.js is particularly well-suited for real-time applications, microservices, and data-intensive applications. Below are key features, use cases, and tools related to Node.js.
          </p>

          <div className="nodejs-capabilities">
            <h3 className="subheading">Key Node.js Capabilities</h3>
            <ul className="capabilities">
              <li><strong>Asynchronous & Event-Driven</strong> - Node.js uses a non-blocking, event-driven architecture, making it highly efficient for handling multiple simultaneous connections.</li>
              <li><strong>Single-Threaded</strong> - Node.js operates on a single thread using the event loop, which makes it lightweight and efficient, perfect for handling I/O-bound tasks.</li>
              <li><strong>Scalability</strong> - With its asynchronous design, Node.js can handle many connections concurrently, making it suitable for building scalable systems.</li>
              <li><strong>Real-Time Data Handling</strong> - Node.js is excellent for building real-time applications such as chat applications, gaming platforms, and collaboration tools.</li>
              <li><strong>Cross-Platform</strong> - Node.js can run on various platforms, including Linux, macOS, and Windows, making it a flexible choice for different environments.</li>
              <li><strong>Extensive Package Ecosystem (npm)</strong> - Node.js has a rich ecosystem of packages and modules available through npm (Node Package Manager), simplifying development.</li>
            </ul>
          </div>

          <div className="nodejs-usecases">
            <h3 className="subheading">Common Use Cases of Node.js</h3>
            <ul className="usecases">
              <li>
                <strong>Web Servers & APIs</strong> - Node.js is widely used for building fast and scalable web servers and APIs, often integrated with front-end frameworks like React or Angular.
              </li>
              <li>
                <strong>Real-Time Applications</strong> - Applications that require real-time data exchange, such as messaging apps or online gaming platforms, can be easily built with Node.js.
              </li>
              <li>
                <strong>Microservices</strong> - Node.js is ideal for building microservices architectures, where different components of an application can operate independently and scale as needed.
              </li>
              <li>
                <strong>RESTful Services & GraphQL</strong> - Node.js is commonly used for building RESTful APIs and GraphQL services to interact with databases and other services.
              </li>
              <li>
                <strong>IoT Applications</strong> - The non-blocking, event-driven nature of Node.js makes it well-suited for handling large numbers of devices in Internet of Things (IoT) applications.
              </li>
              <li>
                <strong>Command-Line Tools</strong> - You can create powerful command-line tools with Node.js to automate tasks and integrate with other tools and systems.
              </li>
            </ul>
          </div>

          <div className="nodejs-tools">
            <h3 className="subheading">Popular Node.js Tools & Frameworks</h3>
            <ul className="tools">
              <li><strong>Express.js</strong> - A fast, unopinionated web framework for Node.js used for building APIs and web servers quickly.</li>
              <li><strong>Socket.io</strong> - A library used to build real-time, bidirectional communication between web clients and servers, ideal for chat and real-time applications.</li>
              <li><strong>NestJS</strong> - A progressive Node.js framework for building efficient, reliable, and scalable server-side applications using TypeScript.</li>
              <li><strong>PM2</strong> - A process manager for Node.js applications, helping manage and keep apps alive forever, even after crashes or reboots.</li>
              <li><strong>Mongoose</strong> - A MongoDB Object Data Modeling (ODM) library for Node.js that simplifies database interactions.</li>
              <li><strong>Chai & Mocha</strong> - Testing frameworks for Node.js used to build unit tests and ensure the reliability of your application.</li>
            </ul>
          </div>

          <div className="nodejs-stats">
            <div className="stat-item">
              <p><span className="highlight">100+ projects</span> built using Node.js</p>
            </div>
            <div className="stat-item">
              <p><span className="highlight">5+ years</span> of experience with Node.js in building scalable, high-performance applications</p>
            </div>
          </div>

          <button className="navigate-button" onClick={handleNavigate}>Explore Node.js in Action</button>
        </div>
      </div>
    </section>
  );
};

export default NodeJS;
