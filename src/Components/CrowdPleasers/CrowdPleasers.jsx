import React from 'react';
import './CrowdPleasers.css';
import CrowdPleaserCard from './CrowdPleaserCard';
import ForestIcon from '@mui/icons-material/Forest';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import DiamondIcon from '@mui/icons-material/Diamond';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import CelebrationIcon from '@mui/icons-material/Celebration';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function CrowdPleasers() {
  return (
    <div id='cp' className='cp-container'>
      <div className='cp-inner'>
        <div className='cp-titles'>
          <h1>Still can't decide? </h1>
          <h2>Find your Crowd</h2>
          {/* <div className='lil-arrow'><SouthIcon /></div> */}
        </div>
        <div className='main3' id='crowd-pleasers'>
          <div className='crowd-pleasers-container'>
            <CrowdPleaserCard
              title='The Grizzly Bear'
              info="The Grizzly Bear cocktail is a classic bourbon-based drink that appeals to a wide range of palates. Its simple yet flavorful ingredients and versatile nature make it a popular choice among cocktail enthusiasts."
              ingredients={[
                'Bourbon',
                "Amaretto",
                "Jägermeister",
                "Kahlua",
                "Milk"
              ]}
              measurements={["1 part", '1 part',
                "1 part",
                "1 part",
                "2 1/2 parts"]} 
                name = 'Adventurers'
                color = '#00563B'
                icon = <ForestIcon style={{fontSize: '100px', color: '#00563B'}}/> />
            <CrowdPleaserCard
              title='The Strange Weaver'
              info="The floral notes from the elderflower liqueur complement the botanicals of the gin, while the hint of absinthe adds a subtle herbal complexity. The Strange Weaver cocktail is an adventurous choice for those looking to explore new and distinctive flavor combinations in their cocktails."
              ingredients={["Light Rum",
                " Gin",
                "Elderflower liquer",
                "Absinthe",
                "Lemon Juice",
                "Orgeat Syrup",
                "Orange Peel"]}
              measurements={["1 oz",
                "1 oz",
                "0.75 oz",
                "0.75 oz",
                "Dash",
                "Dash",
                "Garnish with"]} 
                name = 'Wanderers'
                color = '#E0115F'
                icon = <FilterVintageIcon style={{fontSize: '100px', color: '#E0115F'}}/> />
            <CrowdPleaserCard
              title='The Gagliardo'
              info="The Gagliardo cocktail is named after the Italian liqueur Gagliardo Amaro. This liqueur is known for its bittersweet flavor profile, derived from a blend of botanicals and herbs. The cocktail likely originated as a way to highlight the unique taste of this liqueur, possibly in Italy or among mixologists familiar with Italian spirits."
              ingredients={['Peach Vodka', 'Lemon juice', "Galliano", "Syrup of roses"]}
              measurements={['5 parts', '3 parts', '1 part', '1 part']} 
              name = 'Rebels'
              color = '#722F37'
              icon = <TwoWheelerIcon style={{fontSize: '100px', color: '#722F37'}}/> />
            <CrowdPleaserCard
              title='The Golden Dream'
              info="The Golden Dream cocktail is believed to have been created in the 1950s or 1960s by the famous bartender, Peter Heering. Heering was known for his innovative cocktail creations, and the Golden Dream is one of his most enduring contributions to mixology. The cocktail gained popularity during the mid-20th century and has remained a beloved classic ever since."
              ingredients={["Galliano",
                "Triple Sec",
                "orange juice",
                "Cream"]}
              measurements={["2 parts",
                "2 parts",
                "2 parts",
                "1 part"]} 
                name = 'Sunset Chasers'
                color = '#E44D2E'
                icon = <WbTwilightIcon style={{fontSize: '100px', color: '#E44D2E'}}/> />
            <CrowdPleaserCard
              title='The Boulevardier'
              info="The Boulevardier cocktail is believed to have been created in the 1920s by Harry McElhone, an American bartender who owned Harry's New York Bar in Paris. Its creation is often attributed to McElhone's experiences in Paris during the Prohibition era, where American expatriates sought inventive ways to enjoy cocktails despite the restrictions on alcohol."
              ingredients={["Campari",
                "Sweet Vermouth",
                "Rye whiskey",
                "Orange Peel"]}
              measurements={["1 oz",
                "1 oz",
                "1 1/4 oz",
                "1"]} 
                name = 'Sophisticated'
                color = '#A51C30'
                icon = <DiamondIcon style={{fontSize: '100px', color: '#A51C30'}}/> />
            <CrowdPleaserCard
              title='Mojito'
              info='The Mojito cocktail has its roots in Cuba, dating back to the 16th century. It was initially known as "El Draque" after the English privateer Sir Francis Drake, who is said to have used a similar concoction to combat scurvy among his crew. Over time, the recipe evolved, incorporating local ingredients like lime, mint, sugar, and rum, to create the Mojito as we know it today.'
              ingredients={["Light rum",
                "Lime",
                "Sugar",
                "Mint",
                "Soda water"]}
              measurements={["2-3 oz",
                "Juice of 1",
                "2 tsp",
                "2-4 leaves",
                'Fill with']} 
                name = 'Loungers'
                color = '#0076CE'
                icon = <BeachAccessIcon style={{fontSize: '100px', color: '#0076CE'}}/> />
            <CrowdPleaserCard
              title='Apricot Punch'
              info="Apricot punch is often enjoyed during the summer months when apricots are in season. The sweet and tangy flavor of apricots pairs well with the refreshing qualities of a cold punch, making it a popular choice for warm-weather gatherings and parties."
              ingredients={['Apricot Brandy', 'Champagne', 'Vodka', '7-Up', 'Orange juice']}
              measurements={['1 qt', '4 fifth', '1 fifth', '4 L', '1/2 gal']} 
              name = 'Party People'
              color = '#6F00FF'
              icon = <CelebrationIcon style={{fontSize: '100px', color: '#6F00FF'}}/> />

          </div>
        </div>      

      </div>

    </div>
  );
}