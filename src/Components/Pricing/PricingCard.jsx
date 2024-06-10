import React from 'react';
import './PricingCard.css';

export default function PricingCard({ title, info, price, color, backgroundImage }) {
  const cardStyle = {
    backgroundColor: color,
    backgroundImage: `url(${backgroundImage})`, // Set the background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='pricing-card' style={cardStyle}>
      <div className='p-card-title'>
        <h3>{title}</h3>
      </div>
      <div className='pcard-info'>
        <p>{info}</p>
      </div>
      <div className='pcard-price'>
        <p>${price}</p>
      </div>
      <button className='pricing-btn'>Buy Now</button>
    </div>
  );
}
