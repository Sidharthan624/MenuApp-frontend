import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/deep.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
        <Link to="/">DEEP NET SOFT</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isMenuOpen ? 'line open' : 'line'}></span>
        <span className={isMenuOpen ? 'line open' : 'line'}></span>
        <span className={isMenuOpen ? 'line open' : 'line'}></span>
      </div>
      <nav className={isMenuOpen ? 'navbar-links open' : 'navbar-links'}>
        <Link to="#">HOME</Link>
        <Link to="#">MENU</Link>
        <Link to="/create-menu">CREATE MENU</Link>
      </nav>
    </header>
  );
};

export default Header;
