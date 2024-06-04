import React from 'react'
import './CrowdPleasers.css'
import CrowdPleaserCard from './CrowdPleaserCard'
import Arrow from '../Arrow/Arrow'


export default function CrowdPleasers() {
  return (
    <div className='main'>
        <CrowdPleaserCard title = 'title' info = "info" ingredients = {['vodka', 'orange juice', 'champagne']} />
    </div>
  )
}
