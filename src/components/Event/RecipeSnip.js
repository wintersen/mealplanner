import React from 'react';
import { useHistory } from 'react-router-dom';

const RecipeSnip = ({recipe}) => {

    let history = useHistory();

    const handleClick = (id) => {
        history.push('/recipe/' + id);
    }

    return(
        <div className="bg-white h-32 w-full rounded-lg flex flex-row shadow-md transition transform hover:scale-102 hover:shadow-lg cursor-pointer" onClick={() => handleClick(recipe.id)}>
            <img className="h-full w-1/3 object-cover rounded-lg rounded-r-none float-left" src="https://www.cookingclassy.com/wp-content/uploads/2021/01/butter-chicken-4.jpg" alt="img"/>
            <div className="p-3">
                <h2>{recipe.name}</h2>
                <h3>{recipe.tags}</h3>
                <h4>Added by SOMEONE</h4>
            </div>
        </div>
    )
}

export default RecipeSnip