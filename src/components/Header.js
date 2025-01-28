// src/components/Header.js
import React from 'react';
import './Header.css';
import CatGif from '../assets/cat.gif';

const Header = () => {
  return (
    <header className="header">
      <div className="cat-placeholder">
        {/* Cat GIF with no background */}
        <img src={CatGif} alt="Cat Character" className="cat" />
      </div>
      <div className="tagline">
        <h1>Welcome to Harshada's World of Data and Whiskers!</h1>
      </div>
    </header>
  );
};

export default Header;
