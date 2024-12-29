import React, { useState, useEffect } from 'react';
import hhassan from '../../assets/images/hhassan';

const Introduction = () => {
  const [text, setText] = useState('');
  const texte = " Je suis Hassan Boudraa, développeur Full Stack MERN avec +3 ans d'expérience.Je suis Hassan Boudraa, développeur Full Stack MERN avec +3 ans d'expériencJe suis Hassan Boudraa, développeur Full Stack MERN avec +3 ans d'expérience   Je suis Hassan Boudraa, développeur Full Stack MERN avec +3 ans d'expérience. ";
  const vitesse = 50; // ms

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setText(texte.substring(0, i + 1));
      i++;
      if (i === texte.length) {
        clearInterval(intervalId);
      }
    }, vitesse);
  }, [texte, vitesse]);

  return (
    <section className="introduction">
      <div className='introsec'>
         <img src={hhassan} alt="Mon image" />
         <p>{text}</p>
      </div>
    </section>
  );
};

export default Introduction;
