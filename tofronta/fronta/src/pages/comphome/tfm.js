import React from 'react';
import { useNavigate } from 'react-router-dom';

const TFM = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/tfm');
  };

  return (
    <button onClick={handleNavigate}>TFM</button>
  );
};

export default TFM;
