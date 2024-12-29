import React from 'react';
import { useNavigate } from 'react-router-dom';

const Algorithmics = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/algorithmics');
  };

  return (
    <button onClick={handleNavigate}>Algorithmics</button>
  );
};

export default Algorithmics;
