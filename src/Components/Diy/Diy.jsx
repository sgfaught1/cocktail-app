import React from 'react'
import './Diy.css'
import Arrow from '../Arrow/Arrow'

export default function Diy() {
  return (
    <div id='diy' className='diy'>
      <div className='container'>
        <h1>BUILD YOUR OWN COCKTAIL</h1>
        <div className='inner-container'>
          <section className='form'>
            form
          </section>
          <section className='image'>
            Image of cocktail
          </section>

        </div>
      </div>

      <div className="diy-arrow">
        <Arrow href='#cod' />
      </div>

    </div>
  )
}
