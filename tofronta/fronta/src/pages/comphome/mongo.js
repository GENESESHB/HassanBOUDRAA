import React from 'react';
import { useNavigate } from 'react-router-dom';

const MongoDB = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/mongodb');
  };

  return (
    <button onClick={handleNavigate}>MongoDB</button>
  );
};

export default MongoDB;
