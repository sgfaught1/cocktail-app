import React from 'react'
import './PricingCard.css'

export default function PricingCard({title, info, price}) {
    return (
        <div className='pricing-card'>
            <h3>
                {title}
            </h3>
            <p>{info}</p>
            <p>${price}</p>
        </div>
    )
}