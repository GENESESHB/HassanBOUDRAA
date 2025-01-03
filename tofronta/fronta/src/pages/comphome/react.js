import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useRef,
  useCallback,
} from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/upwork.css'; // Importing the provided CSS file

const ReactComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [counter, setCounter] = useState(0); // For useState example
  const [text, setText] = useState(''); // For input field example
  const [showEffect, setShowEffect] = useState(false); // For useEffect toggle
  const UserContext = React.createContext('John Doe'); // For useContext example
  const userName = useContext(UserContext);
  const inputRef = useRef(null); // For useRef example

  const initialState = { count: 0 }; // For useReducer example
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

  const memoizedCallback = useCallback(() => {
    console.log('Button clicked, counter:', counter);
  }, [counter]);

  useEffect(() => {
    if (showEffect) {
      console.log('Effect triggered!');
    }
    return () => {
      console.log('Cleanup: Effect toggled off');
    };
  }, [showEffect]);

  return (
    <section className="upwork-section">
      <div className="container1">
        <h2 className="section-title">
          React: A JavaScript Library for Building User Interfaces
        </h2>
          <hr />
        <div className="cards-container">
          <div className="card">
            <h4 className="subheading">1. useState</h4>
            <p>Manage state in functional components. Below is an example of a counter.</p>
            <div className="example">
              <p>Counter: {counter}</p>
              <button onClick={() => setCounter(counter + 1)}>Increment</button>
              <button onClick={() => setCounter(counter - 1)}>Decrement</button>
            </div>
          </div>

          <div className="card">
            <h4 className="subheading">2. useEffect</h4>
            <p>Perform side effects in your component. Example: toggling an effect.</p>
            <div className="example">
              <button onClick={() => setShowEffect(!showEffect)}>
                {showEffect ? 'Stop Effect' : 'Start Effect'}
              </button>
            </div>
          </div>

          <div className="card">
            <h4 className="subheading">3. useContext</h4>
            <p>Access context values without wrapping in a consumer.</p>
            <div className="example">
              <p>User: {userName}</p>
            </div>
          </div>

          <div className="card">
            <h4 className="subheading">4. useRef</h4>
            <p>Directly reference a DOM element. Example: focus on an input.</p>
            <div className="example">
              <input ref={inputRef} type="text" placeholder="Focus me" />
              <button onClick={() => inputRef.current.focus()}>Focus Input</button>
            </div>
          </div>

          <div className="card">
            <h4 className="subheading">5. useReducer</h4>
            <p>Manage complex state logic. Example: counter with reducer.</p>
            <div className="example">
              <p>Count: {state.count}</p>
              <button onClick={() => dispatch({ type: 'increment' })}>
                Increment
              </button>
              <button onClick={() => dispatch({ type: 'decrement' })}>
                Decrement
              </button>
            </div>
          </div>

          <div className="card">
            <h4 className="subheading">6. useCallback</h4>
            <p>Memoize a callback function. Example: logging counter.</p>
            <div className="example">
              <button onClick={memoizedCallback}>Log Counter</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReactComponent;
