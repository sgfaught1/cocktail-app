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
        <div className='heroImage' style={{ backgroundImage: `url(${heroImage})`,  }}>
          <h1>Cocktail TITLE</h1>
          {/* <div className='heroTitle'>
            <h2>Cocktail TITLE</h2>
            <p>Not sure where to begin to make your own cocktails?</p>
          </div> */}
          
        </div>
      </div>
    </div>
  );
}
