import React from 'react'
import './Diy.css'
import Arrow from '../Arrow/Arrow'
import { useForm } from "react-hook-form";
import { useState } from 'react';



export default function Diy() {
  const [cocktailList, setCocktailList] = useState([])

  const { register, handleSubmit, getValues, formState: { errors } } = useForm();

// Fix Crash when user misspells drink

  async function getCocktailList(mainIngredient) {
    try {
      let res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + mainIngredient);
      let myCocktailList = await res.json();
      return myCocktailList.drinks
    } catch (e) {
      console.log('ERROR!', e)
    }
  }

  async function onSubmit() {
    const mainDrink = getValues("searchDrink")
    let mainIngredient = ''
    for (let i of mainDrink) {
      i === mainIngredient[0] ? mainIngredient += i.toUpperCase() : mainIngredient += i.toLowerCase()
    }


    let cocktailListings = await getCocktailList(mainIngredient)
    setCocktailList(() => cocktailListings.map((drink) => drink.strDrink))
    console.log('hi')
  }


  return (
    <div id='diy' className='diy'>
      <div className='container1'>
        <h1>BUILD YOUR OWN COCKTAIL</h1>
        <div className='big-inner1'>
            <div className='inner-container1'>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}


                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("searchDrink", { required: true })} placeholder='Your alcohol of choice' />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <p>This field is required</p>}
                <br /> <br />
                <button type="submit">
                  Drink!
                </button>
               
              </form>
            </div>
            <div className='inner-container1-list'>
              <ul >
                {cocktailList.map(item => {
                  return <li>{item}</li>
                })}
              </ul>
            </div>
        </div>

        <div className='big-inner2'>
          <div>
            <h3>asdfasdf</h3>
          </div>
        </div>

      </div>



      <div className="diy-arrow">
        <Arrow href='#cod' />

      </div>

    </div>
  )
}
