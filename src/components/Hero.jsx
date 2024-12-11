import React from 'react';
import './Hero.css'; // Make sure you create this file for styling

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1 className="hero-title">MENU</h1>
        <p className="hero-description">
          Please take a look at our menu featuring food, drinks, and brunch. If
          you'd like to place an order, use the "Order Online" button located
          below the menu.
        </p>
        <button className="hero-button">Order Online</button>
      </div>
    </section>
  );
};

export default Hero;

