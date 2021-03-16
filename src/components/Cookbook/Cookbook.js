import React from 'react';
import RecipeCard from './RecipeCard';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cookbook = () => {

    const recipes = useSelector(state => state.recipes.recipes);
    console.log(recipes);

    const recipeList = recipes.length ? (recipes.map(recipe => {
        return (
            <RecipeCard recipe={recipe} key={recipe.id}/>
        )
    })) : ( <div> No recipes found</div>) 

    return(
        <div className="bg-gray-100 h-full">
            <h1>Title of cookbook</h1>
            <h2>Author</h2>
            <h3>Number of recipes total</h3>
            <Link to="/addRecipe"><button type="button" className="bg-gradient-to-r from-yellow-200 to-green-200 ml-5 rounded shadow">
                <div className="bg-yellow-200 h-full w-full py-1 px-2 bg-opacity-0 hover:bg-opacity-100 rounded transition ease-in-out duration-250">Add Recipe</div>
            </button></Link>
            <div className="grid grid-cols-4">
                <div className="col-span-3 mx-7">
                    <div className="grid grid-cols-3 gap-7">
                        { recipeList }
                    </div>
                </div>
                <div className="col-span-1">recipe filters</div>
            </div>
        </div>
    )
}

export default Cookbook;