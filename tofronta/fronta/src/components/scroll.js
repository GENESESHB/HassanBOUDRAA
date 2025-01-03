import React, { useState, useRef } from 'react';
import AlxAfrica from '../pages/comphome/alxafica';
import Algorithmics from '../pages/comphome/Algorithmics';
import AlxVentures from '../pages/comphome/alxventurs';
import Express from '../pages/comphome/express';
import Holberton from '../pages/comphome/holberton';
import MongoDB from '../pages/comphome/mongo';
import NodeJS from '../pages/comphome/node';
import ReactComponent from '../pages/comphome/react';
import TFM from '../pages/comphome/tfm';
import Umi from '../pages/comphome/umi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './styles/scrol.css';

const Scrol = () => {
  const [view, setView] = useState('AlxAfrica');
  const navigationRef = useRef(null);

  const renderView = () => {
    switch (view) {
      case 'AlxAfrica':
        return <AlxAfrica />;
      case 'Algorithmics':
        return <Algorithmics />;
      case 'AlxVentures':
        return <AlxVentures />;
      case 'Express':
        return <Express />;
      case 'Holberton':
        return <Holberton />;
      case 'MongoDB':
        return <MongoDB />;
      case 'NodeJS':
        return <NodeJS />;
      case 'ReactComponent':
        return <ReactComponent />;
      case 'TFM':
        return <TFM />;
      case 'UMI':
        return <Umi />;
      default:
        return <div>Invalid View</div>; // Fallback case if the view is not matched
    }
  };

  const scrollLeft = () => {
    navigationRef.current.scrollBy({
      left: -200,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    navigationRef.current.scrollBy({
      left: 200,
      behavior: 'smooth'
    });
  };

  return (
    <div className="experience-page">
      <div className="experience-navigation-wrapper">
        <button className="scroll-btn left" onClick={scrollLeft}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="experience-navigation" ref={navigationRef}>
          <button onClick={() => setView('AlxAfrica')} className={view === 'AlxAfrica' ? 'active' : ''}>
            AlxAfrica
          </button>
          <button onClick={() => setView('Algorithmics')} className={view === 'Algorithmics' ? 'active' : ''}>
            Algorithmics
          </button>
          <button onClick={() => setView('AlxVentures')} className={view === 'AlxVentures' ? 'active' : ''}>
            AlxVentures
          </button>
          <button onClick={() => setView('Express')} className={view === 'Express' ? 'active' : ''}>
            Express
          </button>
          <button onClick={() => setView('Holberton')} className={view === 'Holberton' ? 'active' : ''}>
            Holberton
          </button>
          <button onClick={() => setView('MongoDB')} className={view === 'MongoDB' ? 'active' : ''}>
            MongoDB
          </button>
          <button onClick={() => setView('NodeJS')} className={view === 'NodeJS' ? 'active' : ''}>
            NodeJS
          </button>
          <button onClick={() => setView('ReactComponent')} className={view === 'ReactComponent' ? 'active' : ''}>
            ReactComponent
          </button>
          <button onClick={() => setView('TFM')} className={view === 'TFM' ? 'active' : ''}>
            TFM
          </button>
          <button onClick={() => setView('UMI')} className={view === 'UMI' ? 'active' : ''}>
            UMI
          </button>
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="experience-content">
        {renderView()}
      </div>
    </div>
  );
};

export default Scrol;
