import React from 'react';
import { useNavigate } from 'react-router-dom';

const Umi = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/umi');
  };

  return (
    <button onClick={handleNavigate}>Umi</button>
  );
};

export default Umi;

