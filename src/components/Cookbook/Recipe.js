import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import BackButton from '../BackButton';

const Recipe = () => {

    // Get ID from parameters and use it to filter desired recipe
    let slug = useParams();
    const recipes = useSelector((state) => state.firestore.ordered.Recipes)
    const recipe = recipes.filter(r => r.id === slug.id)[0]

    return(
        <div className="flex-grow overflow-auto">
            <div className="bg-gray-100 ">
                <BackButton></BackButton>
                {/* This section is the recipe! */}
                <div className="bg-white w-full md:w-2/3 lg:w-1/2 h-full p-5 mx-auto">
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
                                { recipe.ingredients.map(ingredient => { return <li>{ingredient}</li>}) }
                            </ul>
                        </section>
                        <section className="pt-4">
                            <h2>Instructions</h2>
                            <ul>
                                { recipe.instructions.map(instruction => { return <li>{instruction}</li>}) }
                            </ul>
                        </section>
                        <section className="pt-4">
                            <h2>Notes</h2>
                            <p>{recipe.notes}</p>
                        </section>
                    </div>
                </div> 
            </div>
        </div>
        
    )
}

export default Recipe;