import React from 'react';
import { useNavigate } from 'react-router-dom';

const Upwork = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/upwork');
  };

  return (
    <button onClick={handleNavigate}>Upwork</button>
  );
};

export default Upwork;
