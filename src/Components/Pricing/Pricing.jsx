import React from 'react';
import './Pricing.css';
import PricingCard from './PricingCard';
import smallGroup from '../../assets/smallGroup2.jpg'
import mediumGroup from '../../assets/mediumGroup.jpg'
import largeGroup from '../../assets/largeGroup2.jpg'

export default function Pricing() {
  return (
    <div id='pricing' className='pricing-container'>
      <div className='pricing'>
        <PricingCard
          title="Intimate Indulgence"
          info="Unwind with our intimate selection! This package is perfect for cozy nights in or romantic evenings under the stars. Sip on our handcrafted cocktails and let the magic unfold."
          price="49.99"
          color='#f79f83'
          backgroundImage={smallGroup} // Pass image URL
        />
        <PricingCard
          title="Social Soiree"
          info="Ready to spice up your gatherings? Our Social Soiree package is your ultimate wingman! Whether it's a backyard BBQ or a rooftop bash, get the party started with our signature cocktails."
          price="99.99"
          color='#00573b'
          backgroundImage= {mediumGroup} // Pass image URL
        />
        <PricingCard
          title="Grand Gala"
          info="Go big or go home! Elevate your events with our Grand Gala package. From weddings to corporate affairs, make a statement with our premium cocktails and leave your guests wanting more."
          price="149.99"
          color='#cf4c5e'
          backgroundImage={largeGroup} // Pass image URL
        />
      </div>
    </div>
  );
}
