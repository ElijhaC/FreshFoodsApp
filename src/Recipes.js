import React from 'react';
import './recipeStyle.css';

export default function Recipes({ recipe }) {
  return (
   
    <div className="recipeTile" onClick={() => {
      window.open(recipe["recipe"]["url"]);
    }}>
        <img className="recipeTile__img"src={recipe["recipe"]["image"]} />
        <p className='recipeTile__name'>{recipe["recipe"]["label"]}</p>
    </div>
    
  );
}
