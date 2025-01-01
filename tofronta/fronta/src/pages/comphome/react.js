import React, { useState, useEffect, useContext, useReducer, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/react.css'; // Custom CSS file for styling

const ReactComponent = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/react');
  };

  // State Hook Example
  const [counter, setCounter] = useState(0);

  // Effect Hook Example
  useEffect(() => {
    console.log('Component mounted or counter changed:', counter);
    return () => {
      console.log('Cleanup: Component will unmount or counter changed');
    };
  }, [counter]);

  // useContext Hook Example
  const UserContext = React.createContext('John Doe');
  const userName = useContext(UserContext);

  // useRef Hook Example
  const inputRef = useRef(null);

  // useReducer Hook Example
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

  // useCallback Hook Example
  const memoizedCallback = useCallback(() => {
    console.log('Button clicked', counter);
  }, [counter]);

  return (
    <section className="react-section">
      <div className="container1">
        <h2 className="section-title">React: A JavaScript Library for Building User Interfaces</h2>
        <div className="react-details">
          <p className="intro-text">
            React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It allows developers to build complex UIs from small, reusable components. React uses a virtual DOM to improve performance and optimize updates. Below are the key features and common hooks used in React development.
          </p>

          <div className="react-features">
            <h3 className="subheading">Key React Features</h3>
            <ul className="features">
              <li><strong>Component-Based Architecture</strong> - React encourages building applications by composing small, isolated, and reusable components.</li>
              <li><strong>Declarative Views</strong> - React’s declarative nature makes it easier to create interactive UIs where the UI updates automatically when the underlying data changes.</li>
              <li><strong>Virtual DOM</strong> - React uses a virtual DOM to efficiently update the UI, ensuring high performance even in large applications.</li>
              <li><strong>One-Way Data Binding</strong> - React uses one-way data flow, making the flow of data more predictable and easier to manage.</li>
              <li><strong>React Hooks</strong> - React hooks allow functional components to manage state, side effects, and context, making the code more concise and easy to read.</li>
            </ul>
          </div>

          <div className="react-hooks">
            <h3 className="subheading">Common React Hooks and Usage</h3>

            <h4>1. useState</h4>
            <p className="hook-description">
              The `useState` hook is used to manage state in a functional component. It returns an array with the current state and a function to update it.
            </p>
            <div className="code-example">
              <pre>
                {`const [counter, setCounter] = useState(0);

const increment = () => setCounter(counter + 1);`}
              </pre>
            </div>

            <h4>2. useEffect</h4>
            <p className="hook-description">
              The `useEffect` hook allows you to perform side effects in your component, such as fetching data, directly manipulating the DOM, or subscribing to external data sources.
            </p>
            <div className="code-example">
              <pre>
                {`useEffect(() => {
  console.log('Component mounted or counter changed:', counter);
}, [counter]);`}
              </pre>
            </div>

            <h4>3. useContext</h4>
            <p className="hook-description">
              The `useContext` hook is used to access the context value without wrapping components in a context consumer.
            </p>
            <div className="code-example">
              <pre>
                {`const UserContext = React.createContext('John Doe');
const userName = useContext(UserContext);`}
              </pre>
            </div>

            <h4>4. useRef</h4>
            <p className="hook-description">
              The `useRef` hook allows you to persist values across renders without causing a re-render. It's often used to directly reference DOM elements.
            </p>
            <div className="code-example">
              <pre>
                {`const inputRef = useRef(null);

const focusInput = () => inputRef.current.focus();`}
              </pre>
            </div>

            <h4>5. useReducer</h4>
            <p className="hook-description">
              The `useReducer` hook is an alternative to `useState`, and it is often used for complex state logic or when the state depends on previous state values.
            </p>
            <div className="code-example">
              <pre>
                {`const initialState = { count: 0 };
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
const [state, dispatch] = useReducer(reducer, initialState);`}
              </pre>
            </div>

            <h4>6. useCallback</h4>
            <p className="hook-description">
              The `useCallback` hook returns a memoized version of the callback function that only changes if one of the dependencies has changed.
            </p>
            <div className="code-example">
              <pre>
                {`const memoizedCallback = useCallback(() => {
  console.log('Button clicked', counter);
}, [counter]);`}
              </pre>
            </div>
          </div>

          <div className="react-stats">
            <div className="stat-item">
              <p><span className="highlight">10,000+ projects</span> built using React</p>
            </div>
            <div className="stat-item">
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
