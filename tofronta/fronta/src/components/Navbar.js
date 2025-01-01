import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownWideShort, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './styles/Navbar.css';
import logo from '../assets/hbnb.png';

const CLASSES = {
  ACTIVE: 'active',
  SHOW: 'show',
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userImage, setUserImage] = useState(null);
  const [activeLink, setActiveLink] = useState('/');
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLinkClick = useCallback((path) => {
    setActiveLink(path);
    setIsOpen(false);
  }, []);

  const toggleDropdown = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      try {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData && userData.profileImage) {
          setUserImage(userData.profileImage);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" onClick={toHome} />
        </div>
        <div className="nav-links">
          <Link
            to="/"
            onClick={() => handleLinkClick('/')}
            className={activeLink === '/' ? CLASSES.ACTIVE : ''}
          >
            Home
          </Link>
          <Link
            to="/projects"
            onClick={() => handleLinkClick('/projects')}
            className={activeLink === '/projects' ? CLASSES.ACTIVE : ''}
          >
            Projects
          </Link>
        </div>
        <div className="dropdown" ref={dropdownRef}>
          <button className="dropbtn" onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faArrowDownWideShort} /> Menu
          </button>
          <div className={`dropdown-content ${isOpen ? CLASSES.SHOW : ''}`}>
            <Link
              to="/about"
              onClick={() => handleLinkClick('/about')}
              className={activeLink === '/about' ? CLASSES.ACTIVE : ''}
            >
              <FontAwesomeIcon icon={faInfoCircle} className="icon-spacing" /> About Me
            </Link>
            <Link
              to="/contact"
              onClick={() => handleLinkClick('/contact')}
              className={activeLink === '/contact' ? CLASSES.ACTIVE : ''}
            >
              <FontAwesomeIcon icon={faEnvelope} className="icon-spacing" /> Contant Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
