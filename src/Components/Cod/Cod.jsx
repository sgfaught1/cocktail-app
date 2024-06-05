import React from 'react'
import './Cod.css'
import { useState, useEffect } from 'react';
import neonSign from '../../assets/neon-sign.jpg';




async function getCocktail() {
  try {
    let res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    let myCocktail = await res.json();
    return myCocktail.drinks[0]
  } catch (e) {
    console.log('ERROR!', e)
  }
}


export default function Cod() {
  const [daily, setDaily] = useState(
    {
      drink: 'Feeling Adventurous?',
      instructions: 'Instructions',
      ingredients: ['ingredient1', 'ingredient2'],
      image: 'Picture!',
      category: ''
    })


  async function setCocktail() {
    let cocktail = await getCocktail()
    let ingredientList = [
      cocktail.strIngredient1,
      cocktail.strIngredient2,
      cocktail.strIngredient3,
      cocktail.strIngredient4,
      cocktail.strIngredient5,
      cocktail.strIngredient6,
      cocktail.strIngredient7,
      cocktail.strIngredient8,
      cocktail.strIngredient9,
      cocktail.strIngredient10,
      cocktail.strIngredient11,
      cocktail.strIngredient12,
      cocktail.strIngredient13,
      cocktail.strIngredient14,
      cocktail.strIngredient15
    ]


    let refinedIngList = ingredientList.filter(ingredient => {
      return ingredient !== null
    })
    setDaily(() => {
      return {
        drink: cocktail.strDrink,
        instructions: cocktail.strInstructions,
        ingredients: refinedIngList,
        image: cocktail.strDrinkThumb,
        category: cocktail.strCategory
      }
    })
  }

  return (
    <div className='main2' id='cod'>

      <div className='container2'>
        <h1>Random Drink</h1>
        <h2>
          {daily.drink}
          {daily.category !== "" && ' - '}
          {daily.category}
        </h2>
        <div className='inner-container2'>
          <section className='form1'>
            <h3>Instructions</h3>
            <p>{daily.instructions}</p>
          </section>
          <section className='image'>
            <h3>Ingredients</h3>
            <ul>
              {daily.ingredients.map(ing => {
                return (
                  <li /*key*/ >• {ing}</li>
                )
              })}
            </ul>
          </section>
        </div>
      </div>
      <button onClick={setCocktail}>Drink Away!</button>
      <div className='backgroundContainer' style={{
        backgroundImage:
          daily.image === "Picture!" ? `url(${neonSign})` : `url(${daily.image})`
      }}>
      </div>
      
    </div>
  );
}


