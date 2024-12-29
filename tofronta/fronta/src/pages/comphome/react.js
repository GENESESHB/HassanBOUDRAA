import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReactComponent = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/react');
  };

  return (
    <button onClick={handleNavigate}>React</button>
  );
};

export default ReactComponent;
