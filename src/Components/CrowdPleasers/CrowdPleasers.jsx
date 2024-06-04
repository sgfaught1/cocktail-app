import React from 'react'
import './CrowdPleasers.css'
import CrowdPleaserCard from './CrowdPleaserCard'

export default function CrowdPleasers() {
  return (
    <div className='main'>
        <CrowdPleaserCard title = 'title' info = "info" ingredients = {['vodka', 'orange juice', 'champagne']} />
        
    </div>
  )
}
