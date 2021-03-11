import React from 'react';
import { useParams } from 'react-router';

const Recipe = () => {

    let slug = useParams();
    console.log(slug);

    return(
        <div className="w-full  bg-gray-200">
            <div className="bg-white w-full md:w-2/3 lg:w-1/2 h-full p-5 mx-auto">
                <img className="w-full h-1/3 object-cover rounded-lg" src="https://www.cookingclassy.com/wp-content/uploads/2021/01/butter-chicken-4.jpg" alt="img" />
                <div className="grid grid-cols-1 divide-y divide-yellow-500">
                    <section>
                        <h1>Name of dish</h1>
                        <h2>Author</h2>
                        <h3>Tags</h3>
                    </section>
                    <section>
                        <h2>Description</h2>
                    </section>
                    <section>
                        <h2>Ingredients</h2>
                    </section>
                    <section>
                        <h2>Instructions</h2>
                    </section>
                </div>
                

            </div>
            
        </div>
    )
}

export default Recipe;