import React from 'react'
import './PricingCard.css'

export default function PricingCard({title, info, price}) {
    return (
        <div className='pricing-card'>
            <h2>
                {title}
            </h2>
            <p>{info}</p>
            <p>${price} / month</p>
        </div>
    )
}