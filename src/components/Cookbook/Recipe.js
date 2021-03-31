import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useFirestoreConnect } from 'react-redux-firebase';
import BackButton from '../BackButton';

const Recipe = () => {

    // Get ID from parameters and use it to filter desired recipe
    let slug = useParams();

    useFirestoreConnect(['Recipes']);

    const recipes = useSelector((state) => state.firestore.ordered.Recipes);

    let recipe = {};
    let ingredients = [];
    let instructions = [];
    
    if (recipes) {
        recipe = recipes.find(r => {return r.id === slug.id});
        ingredients = recipe.ingredients.map((ingredient, i) => { return <li key={i}>{ingredient}</li>});
        instructions = recipe.instructions.map((instruction, j) => { return <li key={j}>{instruction}</li>});
    }

    let history = useHistory();

    const handleClick = () => {
        history.push('/editRecipe/' + slug.id);
    }

    return(
        <div className="flex-grow overflow-auto">
            <div className="bg-gray-100 ">
                
                {/* This section is the recipe! */}
                <div className="mx-auto grid grid-cols-4">
                    <BackButton></BackButton>
                    <div className="bg-white col-span-2 h-full p-5">
                        <img className="h-96 w-full object-cover rounded-lg" src={recipe.image} alt={recipe.name} />
                        <div className="grid grid-cols-1 gap-4 divide-y divide-yellow-500">
                            <section className="mt-4">
                                <h1>{recipe.name}</h1>
                                <h2>{recipe.author}</h2>
                                <h3>Tags</h3>
                            </section>
                            <section className="pt-4">
                                <h2>Description</h2>
                                <p>{recipe.description}</p>
                            </section>
                            <section className="pt-4">
                                <h2>Ingredients</h2>
                                <ul>
                                    { ingredients }
                                </ul>
                            </section>
                            <section className="pt-4">
                                <h2>Instructions</h2>
                                <ul>
                                    { instructions }
                                </ul>
                            </section>
                            <section className="pt-4">
                                <h2>Notes</h2>
                                <p>{recipe.notes}</p>
                            </section>
                        </div>
                    </div> 
                    <button className="" onClick={() => handleClick()}>Edit</button>
                </div>
                
            </div>
        </div>
        
    )
}

export default Recipe;