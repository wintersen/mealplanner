import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({recipe}) => {
    return(
        <div className="bg-white h-72 w-full rounded-lg flex flex-col shadow-md">
            <img className="h-2/3 w-full object-cover rounded-lg rounded-b-none" src="https://www.cookingclassy.com/wp-content/uploads/2021/01/butter-chicken-4.jpg" alt="img"/>
            <div className="p-3">
                <h2>{recipe.name}</h2>
                <h3>{recipe.tags}</h3>
                <Link to={"/recipe/:" + recipe.id}>quick link to recipe</Link>
            </div>
        </div>
    )
}

export default RecipeCard