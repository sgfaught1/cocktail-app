import React from 'react'
import './Pricing.css'
import PricingCard from './PricingCard'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function Pricing() {
  return (
    <div id = 'pricing' className='pricing-container'>
     
      <div className='pricing'>
        
        <PricingCard title="Intimate Indulgence" info="Info about Card" price="19.99" color = '#f79f83'/>
        <PricingCard title="Social Soiree" info="Info about Card" price="49.99" color = '#00573b'/>
        <PricingCard title="Grand Gala" info="Info about Card" price="99.99" color = '#cf4c5e'/>


      </div>

    </div>
  )
}
