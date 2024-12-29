import React from 'react';
import { useNavigate } from 'react-router-dom';

const NodeJS = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/nodejs');
  };

  return (
    <button onClick={handleNavigate}>Node.js</button>
  );
};

export default NodeJS;
