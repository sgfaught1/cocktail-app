import React from 'react'
import './Cod.css'
import { useState, useEffect } from 'react';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';






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
      drink: 'Let our bartender pick for you!',
      instructions: '',
      ingredients: [],
      measurements: [],
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
    let measurementList = [
      cocktail.strMeasure1,
      cocktail.strMeasure2,
      cocktail.strMeasure3,
      cocktail.strMeasure4,
      cocktail.strMeasure5,
      cocktail.strMeasure6,
      cocktail.strMeasure7,
      cocktail.strMeasure8,
      cocktail.strMeasure9,
      cocktail.strMeasure10,
      cocktail.strMeasure11,
      cocktail.strMeasure12,
      cocktail.strMeasure13,
      cocktail.strMeasure14,
      cocktail.strMeasure15
    ]


    let refinedIngList = ingredientList.filter(ingredient => {
      return ingredient !== null
    })

    let refinedMesList = measurementList.filter(mes => {
      return mes !== null
    })

    setDaily(() => {
      return {
        drink: cocktail.strDrink,
        instructions: cocktail.strInstructions,
        ingredients: refinedIngList,
        measurements: refinedMesList,
        image: cocktail.strDrinkThumb,
        category: cocktail.strCategory
      }
    })
  }

  return (
    <div className='main2' id='cod'>

      <div className='container2'>
        { daily.drink === 'Let our bartender pick for you!' ?<h1>Feeling Adventurous?</h1> : <h1>Bartender Selected:</h1> } 
        <h2>
          {daily.drink}
          {daily.category !== "" && ' - '}
          {daily.category}
        </h2>
        {daily.drink === 'Let our bartender pick for you!' ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', top: '50px'}}><LocalBarIcon style = {{fontSize: '150px'}} /> </div>  : <div className='inner-container2'>
          <section className='form1'>
            <h3 style={{textDecoration: 'underline'}}>Instructions</h3>
            <p>{daily.instructions}</p>
          </section>
          <section className='image'>
            <h3 style={{textDecoration: 'underline'}}>Ingredients</h3> 
            <div className='list-holders'>
              
              <ul>
                <span style={{ display: 'inline' }}> {daily.measurements.map(mes => {
                  return (
                    <li /*key*/ >{mes}</li>
                  )
                })}</span>
              </ul>
              <ul>
                {daily.ingredients.map(ing => {
                  return (
                    <li /*key*/ >{ing}</li>
                  )
                })}

              </ul>
            </div>
          </section>
        </div>}
       
      </div>
      <button className = "cod-btn"onClick={setCocktail}>Bartender's Choice</button>
      {/* <div className='backgroundContainer' style={{
        backgroundImage:
          daily.image === "Picture!" ? `url(${neonSign})` : `url(${daily.image})`
      }}>
        
      </div> */}

      <div className='backgroundContainer'>
        <img src={daily.image} alt="" />
      </div>
      <a href="#cp"><ArrowDropDownIcon style={{fontSize: '150px', color: 'antiquewhite', position: 'relative', bottom: '20px'}}/></a> 

    </div>
  );
}


