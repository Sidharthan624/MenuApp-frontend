import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';
import logo from '../assets/images/deep1.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-item contact">
        <h4>Contact Us</h4>
        <p>+91 9876543210</p>
        <p>info@deepnetsoft.com</p>
      </div>
      <div className="footer-item logo">
        <img
          src={logo}
          alt="Company Logo"
          className="footer-logo"
        />
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
      <div className="footer-item location">
        <h4>Find Us</h4>
        <p>2nd floor, Elite Infopark, Hyderabad, India</p>
      </div>
    </footer>
  );
};

export default Footer;
