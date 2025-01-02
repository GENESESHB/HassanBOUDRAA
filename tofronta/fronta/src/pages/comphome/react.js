import React, { useState, useEffect, useContext, useReducer, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/upwork.css'; // Custom CSS file for styling

const ReactComponent = () => {
  const navigate = useNavigate();

  // Navigation handler to redirect to React-related page
  const handleNavigate = () => {
    navigate('/react');
  };

  // State Hook Example (Counter)
  const [counter, setCounter] = useState(0);

  // Effect Hook Example (Logs when component mounts or counter changes)
  useEffect(() => {
    console.log('Component mounted or counter changed:', counter);
    return () => {
      console.log('Cleanup: Component will unmount or counter changed');
    };
  }, [counter]);

  // useContext Hook Example (Accessing user context)
  const UserContext = React.createContext('John Doe');
  const userName = useContext(UserContext);

  // useRef Hook Example (For directly referencing input element)
  const inputRef = useRef(null);

  // useReducer Hook Example (For more complex state logic)
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // useCallback Hook Example (Memoizing callback function)
  const memoizedCallback = useCallback(() => {
    console.log('Button clicked', counter);
  }, [counter]);

  return (
    <section className="react-card">
      <div className="container1">
        <h2 className="section-title">React: A JavaScript Library for Building User Interfaces</h2>
        <div className="react-card-detail">
          <p className="intro-text">
            React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It allows developers to build complex UIs from small, reusable components. React uses a virtual DOM to improve performance and optimize updates. Below are the key features and common hooks used in React development.
          </p>

          <div className="react-card-feature">
            <h3 className="subheading">Key React Features</h3>
            <div className="card">
              <h4>Component-Based Architecture</h4>
              <p>React encourages building applications by composing small, isolated, and reusable components.</p>
            </div>
            <div className="card">
              <h4>Declarative Views</h4>
              <p>React’s declarative nature makes it easier to create interactive UIs where the UI updates automatically when the underlying data changes.</p>
            </div>
            <div className="card">
              <h4>Virtual DOM</h4>
              <p>React uses a virtual DOM to efficiently update the UI, ensuring high performance even in large applications.</p>
            </div>
            <div className="card">
              <h4>One-Way Data Binding</h4>
              <p>React uses one-way data flow, making the flow of data more predictable and easier to manage.</p>
            </div>
            <div className="card">
              <h4>React Hooks</h4>
              <p>React hooks allow functional components to manage state, side effects, and context, making the code more concise and easy to read.</p>
            </div>
          </div>

          <div className="react-card-hook">
            <h3 className="subheading">Common React Hooks and Usage</h3>

            {/* Card for useState */}
            <div className="card">
              <h4>1. useState</h4>
              <p>The <code>useState</code> hook is used to manage state in a functional component. It returns an array with the current state and a function to update it.</p>
              <div className="code-example">
                <pre>{`const [counter, setCounter] = useState(0);\nconst increment = () => setCounter(counter + 1);`}</pre>
              </div>
            </div>

            {/* Card for useEffect */}
            <div className="card">
              <h4>2. useEffect</h4>
              <p>The <code>useEffect</code> hook allows you to perform side effects in your component, such as fetching data, directly manipulating the DOM, or subscribing to external data sources.</p>
              <div className="code-example">
                <pre>{`useEffect(() => {\n  console.log('Component mounted or counter changed:', counter);\n}, [counter]);`}</pre>
              </div>
            </div>

            {/* Card for useContext */}
            <div className="card">
              <h4>3. useContext</h4>
              <p>The <code>useContext</code> hook is used to access the context value without wrapping components in a context consumer.</p>
              <div className="code-example">
                <pre>{`const UserContext = React.createContext('John Doe');\nconst userName = useContext(UserContext);`}</pre>
              </div>
            </div>

            {/* Card for useRef */}
            <div className="card">
              <h4>4. useRef</h4>
              <p>The <code>useRef</code> hook allows you to persist values across renders without causing a re-render. It's often used to directly reference DOM elements.</p>
              <div className="code-example">
                <pre>{`const inputRef = useRef(null);\nconst focusInput = () => inputRef.current.focus();`}</pre>
              </div>
            </div>

            {/* Card for useReducer */}
            <div className="card">
              <h4>5. useReducer</h4>
              <p>The <code>useReducer</code> hook is an alternative to <code>useState</code>, and it is often used for complex state logic or when the state depends on previous state values.</p>
              <div className="code-example">
                <pre>{`const initialState = { count: 0 };\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + 1 };\n    case 'decrement':\n      return { count: state.count - 1 };\n    default:\n      return state;\n  }\n};\nconst [state, dispatch] = useReducer(reducer, initialState);`}</pre>
              </div>
            </div>

            {/* Card for useCallback */}
            <div className="card">
              <h4>6. useCallback</h4>
              <p>The <code>useCallback</code> hook returns a memoized version of the callback function that only changes if one of the dependencies has changed.</p>
              <div className="code-example">
                <pre>{`const memoizedCallback = useCallback(() => {\n  console.log('Button clicked', counter);\n}, [counter]);`}</pre>
              </div>
            </div>
          </div>

          <div className="react-card-stat">
            <div className="card">
              <p><span className="highlight">10,000+ projects</span> built using React</p>
            </div>
            <div className="card">
              <p><span className="highlight">6+ years</span> of React development experience</p>
            </div>
          </div>

          <button className="navigate-button" onClick={handleNavigate}>Explore React in Action</button>
        </div>
      </div>
    </section>
  );
};

export default ReactComponent;
