import React from 'react'
import { useHistory } from 'react-router-dom'

import RecipeSnip from './RecipeSnip';

const Event = () => {
    let history = useHistory();
    // let slug = useParams();
    // console.log(slug);

    return(
        <div className="flex-grow overflow-auto">
            <div className="bg-gray-100 min-h-full pb-5">
                {/* <div className="absolute left-0 top-1 m-5 p-1 rounded-full bg-green-500 z-10" onClick={() => history.goBack()}>
                    <svg class="flex-shrink-0 h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </div> */}
                {/* This section is the event! */}
                <div className="grid grid-cols-5 gap-x-3">
                    <div className="col-start-1 col-span-5">
                        <div className="float-left mx-5 mt-5 p-1 rounded-full bg-green-500 z-10" onClick={() => history.goBack()}>
                            <svg class="flex-shrink-0 h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>
                    </div>
                    <div className="col-start-2 col-span-3">
                        <div className="bg-white rounded-lg rounded-b-none">
                            <img className="h-60 w-full object-cover rounded-lg rounded-b-none" src="https://www.cookingclassy.com/wp-content/uploads/2021/01/butter-chicken-4.jpg" alt="img" />
                        </div>
                    </div>
                    <div className="col-start-1 col-span-1">
                        <div className="bg-white rounded-lg rounded-t-none p-5">Attendees</div>
                    </div>
                    {/* This is the main body of the event page */}
                    <div className="col-span-3">
                        <div className="bg-white rounded-lg rounded-t-none p-5">
                            <h1>Current Recipe List</h1>
                            <div className="grid grid-cols-2 gap-4 my-5">
                                <RecipeSnip recipe={{name: 'A', tags:'yum', id:'0'}} />
                                <RecipeSnip recipe={{name: 'B', tags:'yum', id:'1'}} />
                                <RecipeSnip recipe={{name: 'C', tags:'yum', id:'2'}} />
                                <RecipeSnip recipe={{name: 'D', tags:'yum', id:'3'}} />
                            </div>
                            <div className="flex flex-row justify-center space-x-32">
                                <button type="button" className="bg-gradient-to-r from-yellow-200 to-green-200 ml-5  rounded shadow">
                                    <div className="bg-yellow-200 h-full w-56 py-3 px-5 bg-opacity-0 hover:bg-opacity-100 rounded transition ease-in-out duration-250">Add New Recipe</div>
                                </button>
                                <button type="button" className="bg-gradient-to-r from-yellow-200 to-green-200 ml-5  rounded shadow">
                                    <div className="bg-yellow-200 h-full w-56 py-3 px-5 bg-opacity-0 hover:bg-opacity-100 rounded transition ease-in-out duration-250">Randomly Pick Recipes</div>
                                </button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="bg-white rounded-lg rounded-t-none p-5">Activity</div>
                    </div>
                </div>

            </div>
        </div>
        
    )
}

export default Event