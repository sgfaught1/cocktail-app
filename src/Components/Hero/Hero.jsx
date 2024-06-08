import React from 'react';
import "./Hero.css";
import heroImage from '../../assets/hero-cocktails.jpg';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NavBar from '../NavBar/NavBar';

export default function Hero() {
  return (
    <div id="hero">
      {/* <NavBar position='fixed'/> */}
      <div className='hero'>
        <div className='heroImage' style={{ backgroundImage: `url(${heroImage})` }}>
          <p className='welcomeText'>Welcome to</p>
          <h1>Cocktail Craft</h1>
          <p className='swipeText'>Scroll down to begin your journey</p>
        </div>
      </div>
    </div>
  );
}
