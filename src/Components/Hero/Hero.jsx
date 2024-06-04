import React from 'react'
import "./Hero.css"
import heroImage from '../../assets/hero-cocktails.jpg'
import Arrow from '../Arrow/Arrow'



export default function Hero() {
  return (
    <div >
      <div className='hero'>
        <div className='heroImage' style={{ backgroundImage: `url(${heroImage})` }}>
          <h1 >Cocktail TITLE</h1>
          <div className='heroTitle'>
            <h2>Cocktail TITLE</h2>
            <p>Not sure where to begin to make your own cocktails?</p>
          </div>
        </div>
        
      </div>
    <Arrow href = '#diy'/>
    </div>
  );
}