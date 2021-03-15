import React from 'react';
import { useParams, useHistory } from 'react-router';

const Recipe = () => {

    let history = useHistory();
    let slug = useParams();
    console.log(slug);

    return(
        <div className="flex-grow overflow-auto">
            <div className="bg-gray-100 ">
                <div className="float-left m-5 p-1 rounded-full bg-green-500" onClick={() => history.goBack()}>
                    <svg class="flex-shrink-0 h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
                {/* This section is the recipe! */}
                <div className="bg-white w-full md:w-2/3 lg:w-1/2 h-full p-5 mx-auto">
                    <img className="h-96 w-full object-cover rounded-lg" src="https://www.cookingclassy.com/wp-content/uploads/2021/01/butter-chicken-4.jpg" alt="img" />
                    <div className="grid grid-cols-1 gap-4 divide-y divide-yellow-500">
                        <section className="mt-4">
                            <h1>Name of dish</h1>
                            <h2>Author</h2>
                            <h3>Tags</h3>
                        </section>
                        <section className="pt-4">
                            <h2>Description</h2>
                            <p>Describe this dish!</p>
                        </section>
                        <section className="pt-4">
                            <h2>Ingredients</h2>
                            <ul>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                            </ul>
                        </section>
                        <section className="pt-4">
                            <h2>Instructions</h2>
                            <ul>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                            </ul>
                        </section>
                        <section className="pt-4">
                            <h2>Notes</h2>
                            <p>a section for notes to write about this recipe!</p>
                        </section>
                    </div>
                </div> 
            </div>
        </div>
        
    )
}

export default Recipe;