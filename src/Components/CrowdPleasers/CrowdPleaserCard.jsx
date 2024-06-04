import React from 'react'
import './CrowdPleaserCard.css'

export default function CrowdPleaserCard({ title, info, ingredients }) {
    return (
        <>
            <div className='flip-card' id='crowd-pleasers'>
                <div className='flip-card-inner'>
                    <div className='flip-card-front card '>
                        <h3>TITLE</h3>
                        <p>Information</p>
                        <ul>
                            {ingredients.map(element => {
                                return <li /*add a key*/>{element}</li>
                            })}
                        </ul>
                    </div>
                    <div className='flip-card-back'>
                        <p>Image</p>
                    </div>


                </div>
            </div>

        </>
    )
}
