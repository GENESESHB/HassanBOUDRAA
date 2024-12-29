import React from 'react';
import { useNavigate } from 'react-router-dom';

const AlxVentures = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/alxventurs');
  };

  return (
    <button onClick={handleNavigate}>ALX Ventures</button>
  );
};

export default AlxVentures;
