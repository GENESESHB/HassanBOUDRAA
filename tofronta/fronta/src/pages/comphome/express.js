import React from 'react';
import { useNavigate } from 'react-router-dom';

const Express = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/express');
  };

  return (
    <button onClick={handleNavigate}>Express</button>
  );
};

export default Express;
