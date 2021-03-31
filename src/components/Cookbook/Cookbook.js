import React from 'react';
import RecipeCard from './RecipeCard';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFirestoreConnect } from 'react-redux-firebase';
import BackButton from '../BackButton';

const Cookbook = () => {

    let slug = useParams();

    useFirestoreConnect(['Recipes','Cookbooks']);

    const cookbooks = useSelector((state) => state.firestore.ordered.Cookbooks);
    const recipes = useSelector((state) => state.firestore.ordered.Recipes);

    const currentCookbook = cookbooks ? (cookbooks.find(cb => cb.id === slug.id)) : ( null );
    
    let currentRecipes = [];

    if (cookbooks && recipes){
        currentCookbook.recipeList.forEach(rl => {
            currentRecipes.push(recipes.find(r => {return r.id === rl}))
        });
    }

    const recipeList = currentRecipes && currentRecipes.length ? (currentRecipes.map(recipe => {
        return (
            <RecipeCard recipe={recipe} key={recipe.id}/>
        )
    })) : ( <div> No recipes found</div>) 

    return(
        <div className="bg-gray-100 h-full">
            
            <div className="flex flex-row items-center">
            <BackButton></BackButton>
                <div>
                    <h1>Title of cookbook</h1>
                    <h2>Author</h2>
                </div>
                <div>
                    <Link to={"/addRecipe/" + slug.id}>
                        <button type="button" className="bg-gradient-to-r from-yellow-200 to-green-200 ml-5 rounded shadow">
                            <div className="bg-yellow-200 h-full w-full py-1 px-2 bg-opacity-0 hover:bg-opacity-100 rounded transition ease-in-out duration-250">Add Recipe</div>
                        </button>
                    </Link>
                </div>
            </div>

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