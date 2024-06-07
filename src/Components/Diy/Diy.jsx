import React, { useState } from 'react';
import './Diy.css';
import { useForm } from "react-hook-form";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';




export default function Diy() {
  const [cocktailList, setCocktailList] = useState([]);
  const [selectedDrinkImage, setSelectedDrinkImage] = useState({
    drinkImage: '',
    inst: '',
    drink: '',
    measurementsDIY: [],
    ingredientsDIY: []
  });

  const { register, handleSubmit, getValues, formState: { errors } } = useForm();

  // Fix Crash when user misspells drink
  async function getCocktailList(mainIngredient) {
    try {
      let res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + mainIngredient);
      let myCocktailList = await res.json();
      return myCocktailList.drinks;
    } catch (e) {
      console.log('ERROR!', e);
    }
  }

  async function onSubmit() {
    const mainDrink = getValues("searchDrink");
    let mainIngredient = '';
    for (let i of mainDrink) {
      i === mainIngredient[0] ? mainIngredient += i.toUpperCase() : mainIngredient += i.toLowerCase();
    }

    let cocktailListings = await getCocktailList(mainIngredient);
    setCocktailList(() => cocktailListings.map((drink) => drink.strDrink));
  }

  async function fetchDrinkImage(drinkName) {
    try {
      let res1 = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drinkName);
      let drinkSelected = await res1.json();
      let drink = drinkSelected.drinks[0];

      let drinkIngs = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
        drink.strIngredient6,
        drink.strIngredient7,
        drink.strIngredient8,
        drink.strIngredient9,
        drink.strIngredient10,
        drink.strIngredient11,
        drink.strIngredient12,
        drink.strIngredient13,
        drink.strIngredient14,
        drink.strIngredient15
      ];

      let drinkMes = [
        drink.strMeasure1,
        drink.strMeasure2,
        drink.strMeasure3,
        drink.strMeasure4,
        drink.strMeasure5,
        drink.strMeasure6,
        drink.strMeasure7,
        drink.strMeasure8,
        drink.strMeasure9,
        drink.strMeasure10,
        drink.strMeasure11,
        drink.strMeasure12,
        drink.strMeasure13,
        drink.strMeasure14,
        drink.strMeasure15
      ];

      let reIngList = drinkIngs.filter(ingredient => ingredient !== null);
      let reMesList = drinkMes.filter(mes => mes !== null);

      setSelectedDrinkImage({
        drinkImage: drink.strDrinkThumb,
        inst: drink.strInstructions,
        drink: drink.strDrink,
        measurementsDIY: reMesList,
        ingredientsDIY: reIngList
      });
    } catch (e) {
      console.log('ERROR: ', e);
    }
  }

  return (
    <div id='diy' className='diy'>
      <div className='container1'>
        <h1>Looking for something new?</h1>
        <div className='big-inner1'>
          <div className='inner-container1'>
            <h3>Step 1: Pick a beverage</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input {...register("searchDrink", { required: true })} placeholder='Your alcohol of choice' />
              {errors.searchDrink && <p>This field is required</p>}
              <br /> <br />
              <button className="diy-btn" type="submit">
                Drink!
              </button>
            </form>
          </div>
          <div className='inner-container1-list'>
            {cocktailList.length > 0 && <h3>Step 2: Scroll & Select a cocktail</h3>}
            <ul>
              {cocktailList.map((item, index) => (
                <li key={index} onClick={() => fetchDrinkImage(item)}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='big-inner2'>
          <div className='selected-drink-image'>
            {selectedDrinkImage.drinkImage && <img src={selectedDrinkImage.drinkImage} alt={selectedDrinkImage.drink} />}
          </div>
          <div className='big-inner2-instructions'>
            {selectedDrinkImage.drinkImage && <h3>Step 3: Enjoy your {selectedDrinkImage.drink}</h3>}
            <div className='ingredients-measurements'>
              <ul className='measurements-list'>
                {selectedDrinkImage.measurementsDIY.map((mes, index) => (
                  <li key={index}>{mes}</li>
                ))}
              </ul>
              <ul className='ingredients-list'>
                {selectedDrinkImage.ingredientsDIY.map((ing, index) => (
                  <li key={index}>{ing}</li>
                ))}
              </ul>
            </div>
            <div className='instructions-container'>
              <p>{selectedDrinkImage.inst}</p>
            </div>
          </div> 
          <div>
            </div>
           
        </div>

               
      </div> 
      <div>
             <a href="#cod"><ArrowDropDownIcon style={{fontSize: '150px', color: 'antiquewhite', position: 'relative', top: '12px'}}/></a> 
      </div>
    </div>
  );
}
