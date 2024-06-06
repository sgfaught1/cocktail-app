import React from 'react'
import './CrowdPleasers.css'
import CrowdPleaserCard from './CrowdPleaserCard'
import Arrow from '../Arrow/Arrow'




export default function CrowdPleasers() {
  return (
    <div className='cp-container'>
      <div className='main3' id='crowd-pleasers'>
        <CrowdPleaserCard title='title' info="info" ingredients={['vodka', 'orange juice', 'champagne']} />
       
      </div>
    </div>
  )
}
