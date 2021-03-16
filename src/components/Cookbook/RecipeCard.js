import React from 'react';
import { useHistory } from 'react-router-dom';

const RecipeCard = ({recipe}) => {

    let history = useHistory();

    const handleClick = (id) => {
        history.push('/recipe/' + id);
    }

    return(
        <div className="bg-white h-60 w-full rounded-lg flex flex-col shadow-md transition transform hover:scale-102 hover:shadow-lg cursor-pointer" onClick={() => handleClick(recipe.id)}>
            <img className="h-2/3 w-full object-cover rounded-lg rounded-b-none" src= {recipe.img} alt={"Image of " + recipe.name}/>
            <div className="p-3">
                <h2>{recipe.name}</h2>
                <h3>{recipe.tags}</h3>
            </div>
        </div>
    )
}

export default RecipeCard