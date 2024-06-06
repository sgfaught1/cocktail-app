import React from 'react'
import './CrowdPleaserCard.css'


export default function CrowdPleaserCard({ title, info, ingredients, measurements }) {
    return (
        <>
            <div className='flip-card' >
                <div className='flip-card-inner'>
                    <div className='flip-card-front card '>
                        <h3>{title}</h3>
                        <p>{info}</p>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <h3>Measurements/Ingredients</h3>
                            <div style={{ display: 'flex', justifyContent: "flex-start", alignItems: 'flex-start', textAlign: 'left' }}>
                                <ul style={{ listStyleType: 'none' }}>
                                    {measurements.map(el => {
                                        return <li /*add a key*/>{el}</li>
                                    })}
                                </ul>
                                <ul style={{ listStyleType: 'none' }}>
                                    {ingredients.map(element => {
                                        return <li /*add a key*/>{element}</li>
                                    })}
                                </ul>

                            </div>
                        </div>
                        <div className='crowd-image'>
                            <img src="https://www.thecocktaildb.com/images/media/drink/lyloe91487602877.jpg" alt="" />
                        </div>

                    </div>
                    <div className='flip-card-back'>
                        <p>Image</p>
                    </div>


                </div>
            </div>

        </>
    )
}
