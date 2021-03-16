import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddRecipe = () => {

    let history = useHistory();

    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState(['']);
    const [instructions, setInstructions] = useState(['']);
    const [notes, setNotes] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();

        let recipe = {name, author, description, ingredients, instructions, notes};
        console.log(recipe);
    }

    // Functions to handle adding and removing ingredients from form
    const handleIngredientChange = (e, index) => {
        const ingred = e.target.value;
        const list = [...ingredients];
        list[index] = ingred;
        setIngredients(list);
      };

    const addIngredient = () => {
        setIngredients([...ingredients,'']);
    }

    const removeIngredient = (i) => {
        const list = [...ingredients];
        list.splice(i,1);
        setIngredients(list);
    }

    const ingredientList = ingredients.map((ingredient, i) => {
            return (
            <div className="flex flex-row content-center mb-2">
                <input type="text" placeholder="ingredient" className="rounded w-1/2" value={ingredient} key={i} onChange={e => handleIngredientChange(e,i)}></input>
                <svg className="flex-shrink-0 h-7 w-7 mx-5 my-auto text-red-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" onClick = {() => removeIngredient(i)}>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
            </div>)
        })

    // Functions to handle adding and removing instructions from form
    const handleInstructionChange = (e, index) => {
        const inst = e.target.value;
        const list = [...instructions];
        list[index] = inst;
        setInstructions(list);
    }

    const addInstruction = () => {
        setInstructions([...instructions,'']);
    }

    const removeInstruction = (i) => {
        const list = [...instructions];
        list.splice(i,1);
        setInstructions(list);
    }

    const instructionsList = instructions.map((instruction, i) => {
        return(
        <div key={i} className="mb-5 w-full">
            <span>Step {i + 1}</span>
            <div className="flex flex-row">
                <textarea type="textarea" rows="2" className="rounded w-full" value={instruction} onChange={e => handleInstructionChange(e, i)}></textarea>
                <svg className="flex-shrink-0 h-7 w-7 mx-5 my-auto text-red-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" onClick = {() => removeInstruction(i)}>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
            </div>
        </div>)
    })

    return (
        <div className="flex-grow overflow-auto">
            <div className="bg-gray-100 ">
                <div className="float-left m-5 p-1 rounded-full bg-green-500" onClick={() => history.goBack()}>
                    <svg class="flex-shrink-0 h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
                {/* This section is the recipe! */}
                <div className="bg-white w-full md:w-2/3 lg:w-1/2 h-full p-5 mx-auto">
                    <h1 className="mb-5">Add a new recipe</h1>
                    <img className="h-96 w-full object-cover rounded-lg" src="https://www.cookingclassy.com/wp-content/uploads/2021/01/butter-chicken-4.jpg" alt="img" />
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="grid grid-cols-1 gap-4 divide-y divide-yellow-500">
                            <section className="flex flex-col mt-4">
                                <input type="text" placeholder="Recipe Name" className="mb-5 rounded" onChange={e => setName(e.target.value)}/>
                                <input type="text" placeholder="Author" className="mb-5 rounded" onChange={e => setAuthor(e.target.value)}/>
                                <h3>Tags</h3>
                            </section>
                            <section className="flex flex-col pt-4">
                                <h2>Description</h2>
                                <textarea type="textarea" rows="3" className="mb-5 rounded w-full" onChange={e => setDescription(e.target.value)}></textarea>
                            </section>
                            <section className="flex flex-col pt-4">
                                <h2>Ingredients</h2>
                                {ingredientList}
                                {/* <div id="ingredientList">
                                    <input type="text" placeholder="ingredient" className="rounded mb-2"></input>
                                </div> */}
                                <div className="flex flex-row text-green-500 hover:text-black w-max cursor-pointer" onClick={() => addIngredient()}>
                                    <svg className="flex-shrink-0 h-7 w-7 mr-3 float-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                    </svg>
                                    <span>Add ingredient</span>
                                </div>
                            </section>
                            <section className="pt-4">
                                <h2>Instructions</h2>
                                {instructionsList}
                                <div className="flex flex-row text-green-500 hover:text-black w-max cursor-pointer" onClick={() => addInstruction()}>
                                    <svg className="flex-shrink-0 h-7 w-7 mr-3 float-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                    </svg>
                                    <span>Add step</span>
                                </div>
                            </section>
                            <section className="pt-4">
                                <h2>Notes</h2>
                                <textarea type="textarea" rows="3" className="mb-5 rounded w-full" onChange={e => setNotes(e.target.value)}></textarea>
                            </section>
                        </div>
                        <div className="flex justify-center">
                            <button type="button" className="bg-gradient-to-r from-yellow-200 to-green-200 mx-auto w-1/2 rounded shadow" onClick={e => handleSubmit(e)}>
                                <div className="bg-yellow-200 h-full w-full py-3 px-4 bg-opacity-0 hover:bg-opacity-100 rounded transition ease-in-out duration-250">Add Recipe</div>
                            </button>
                        </div>
                    </form>
                </div> 
            </div>
        </div>
    )
}

export default AddRecipe