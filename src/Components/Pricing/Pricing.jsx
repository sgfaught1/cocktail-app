import React from 'react'
import './Pricing.css'
import PricingCard from './PricingCard'

export default function Pricing() {
  return (
    <div className='pricing-container'>
     
      <div className='pricing'>
        
        <PricingCard title="Pricing Title 1" info="Info about Card" price="19.99" />
        <PricingCard title="Pricing Title 2" info="Info about Card" price="49.99" />
        <PricingCard title="Pricing Title 3" info="Info about Card" price="99.99" />


      </div>
    </div>
  )
}
