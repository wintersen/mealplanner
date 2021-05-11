import React from 'react'
import {useSelector} from 'react-redux'
import RecipeCard from '../Cookbook/RecipeCard';

const RecipeSection = () => {

    const recipes = useSelector((state) => state.firestore.ordered.Recipes);
    console.log(recipes)

    let recipeCards = (<div>Nothing found.</div>);
    if(recipes){
        recipeCards = recipes.map((r,i) => {
            return (<RecipeCard recipe={r} key={i}/>)
        })
    }
    
    return(
        <div>
            <h1>Recipes</h1>
            <div className="grid grid-cols-2 gap-4">
                {recipeCards}
            </div>
        </div>
    )
}

export default RecipeSection