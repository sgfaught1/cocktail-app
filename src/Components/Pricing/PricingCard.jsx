import React from 'react'
import './PricingCard.css'

export default function PricingCard({ title, info, price, color }) {
    return (
        <div className='pricing-card'>
            <div className='p-card-title' style={{backgroundColor: color, height: '10%', width: '100%'}}>
                <h3>
                    {title}
                </h3>
            </div>
            <div>
                <p>{info}</p>
            </div>
            <div>
                <p>${price}</p>
            </div>
            <button className='pricing-btn'>Buy Now</button>


        </div>
    )
}