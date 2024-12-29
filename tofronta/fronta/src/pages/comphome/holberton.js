import React from 'react';
import { useNavigate } from 'react-router-dom';

const Holberton = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/holberton');
  };

  return (
    <button onClick={handleNavigate}>Holberton</button>
  );
};

export default Holberton;
