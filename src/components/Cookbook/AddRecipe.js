import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { createRecipe } from '../../store/actions/recipeActions';

const AddRecipe = () => {

    let history = useHistory();

    let slug = useParams();
    const dispatch = useDispatch();

    const [modalOpen, setModalOpen] = useState(false);
    const [valmodalOpen, setValmodalOpen] = useState(false);
    const [tempImage, setTempImage] = useState(''); //For changing image on button press

    const [image, setImage] = useState("https://www.cookingclassy.com/wp-content/uploads/2021/01/butter-chicken-4.jpg");
    const [name, setName] = useState(null);
    const [author, setAuthor] = useState(null);
    const [description, setDescription] = useState('');
    const [portions, setPortions] = useState(0);
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);
    const [notes, setNotes] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();

        if(name === null || author === null || ingredients.length === 0 || instructions.length === 0){
            setValmodalOpen(true);                
        }
        else if(ingredients[0] === "" || instructions[0] === ""){
            setValmodalOpen(true);
        }
        else{
            let recipe = {name, author, image, description, portions, ingredients, instructions, notes, belongsTo:[slug.cookbookid]};
            dispatch(createRecipe(recipe));
        }
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
            <div className="flex flex-row content-center mb-2" key={i}>
                <input type="text" placeholder="ingredient" className="rounded w-full lg:w-2/3" value={ingredient} key={i} onChange={e => handleIngredientChange(e,i)} onKeyDown={ e => { if(e.key === 'Enter') addIngredient()}}></input>
                <svg className="flex-shrink-0 h-7 w-7 mx-2 lg:mx-5 my-auto text-red-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" onClick = {() => removeIngredient(i)}>
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
                <svg className="flex-shrink-0 h-7 w-7 mx-2 lg:mx-5 my-auto text-red-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" onClick = {() => removeInstruction(i)}>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
            </div>
        </div>)
    })

    return (
        <div className="flex-grow overflow-auto">
            {/* Modal for uploading images */}
            <div className={ modalOpen ? ("w-screen h-screen absolute z-20 top-0 left-0 bg-black bg-opacity-50 px-5 pt-10") : ('hidden')}>
                <div className="w-full md:w-2/3 lg:w-1/2 mx-auto md:h-1/2 p-5 bg-white rounded-lg flex flex-col">
                    <div className="w-full mb-2">
                        <svg className="float-right h-7 w-7 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setModalOpen(false)}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <span className='mb-5'>Paste the image address of the picture or upload your own</span>
                    <input type="text" className="rounded mb-5" placeholder="Paste url here" onChange={e => setTempImage(e.target.value)}/>
                    <span>TODO: file uploading</span>
                    <button type="button" className="bg-gradient-to-r from-yellow-200 to-green-200 mx-auto mt-10 w-full md:w-1/2 rounded shadow" onClick={() => {setModalOpen(false); setImage(tempImage);}}>
                        <div className="bg-yellow-200 h-full w-full py-3 px-4 bg-opacity-0 hover:bg-opacity-100 rounded transition ease-in-out duration-250">Upload image</div>
                    </button>
                </div>
            </div>
            {/* End modal */}
            {/* Modal for validation */}
            <div className={ valmodalOpen ? ("w-screen h-screen absolute z-20 top-0 left-0 bg-black bg-opacity-50 px-5 pt-10") : ('hidden')}>
                <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto md:h-1/3 p-7 md:p-5 bg-white rounded-lg flex flex-col justify-center items-center">
                    <span className='text-xl text-center'>Make sure your recipe has a name, author, ingredients, and instructions before saving!</span>
                    <button type="button" className="bg-gradient-to-r from-yellow-200 to-green-200 mx-auto mt-10 w-full md:w-1/2 rounded shadow" onClick={() => setValmodalOpen(false)}>
                        <div className="bg-yellow-200 h-full w-full py-3 px-4 bg-opacity-0 hover:bg-opacity-100 rounded transition ease-in-out duration-250">Got it</div>
                    </button>
                </div>
            </div>
            {/* End modal */}
            <div className="bg-gray-100 ">
                <div className="float-left m-5 p-1 rounded-full bg-green-500" onClick={() => history.goBack()}>
                    <svg className="flex-shrink-0 h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
                {/* Main body starts here */}
                <div className="bg-white w-full md:w-2/3 lg:w-1/2 h-full p-5 mx-auto">
                    <h1 className="mb-5">Add a new recipe</h1>
                    {/* Image upload section */}
                    <div className="h-52 md:h-96 w-full relative" onClick={() => setModalOpen(true)}>
                        <div className="hidden md:inline-flex flex justify-center items-center cursor-pointer opacity-0 w-full h-full z-10 absolute top-0 bottom-0 rounded-lg bg-black hover:opacity-50 text-white text-5xl">
                            <svg className="flex-shrink-0 h-12 w-12 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                            <div>Upload image</div>
                        </div>
                        <img className="h-full w-full object-cover rounded-lg" src={image} alt="Uploaded dish" />
                    </div>
                    <div className="mt-3 lg:hidden">Tap to upload an image</div>
                    {/* Recipe details section */}
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="grid grid-cols-1 gap-4 divide-y divide-yellow-500">
                            <section className="flex flex-col mt-4">
                                <input type="text" placeholder="Recipe Name" className="mb-5 rounded" onChange={e => setName(e.target.value)}/>
                                <input type="text" placeholder="Author" className="mb-5 rounded" onChange={e => setAuthor(e.target.value)}/>
                                <div className="flex flex-row items-center mb-5">Makes <input type="number" placeholder="2" className="rounded mx-2 w-20" onChange={e => setPortions(e.target.value)}/> portion(s)</div>
                                <h3>TO DO:Tags</h3>
                            </section>
                            <section className="flex flex-col pt-4">
                                <h2>Description</h2>
                                <textarea type="textarea" rows="3" className="mb-5 rounded w-full" onChange={e => setDescription(e.target.value)}></textarea>
                            </section>
                            <section className="flex flex-col pt-4">
                                <h2>Ingredients</h2>
                                {ingredientList}
                                <div className="flex flex-row items-center text-green-500 hover:text-black w-max cursor-pointer" onClick={() => addIngredient()}>
                                    <svg className="flex-shrink-0 h-7 w-7 mr-3 float-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                    </svg>
                                    <span>Add ingredient</span>
                                </div>
                            </section>
                            <section className="pt-4">
                                <h2>Instructions</h2>
                                {instructionsList}
                                <div className="flex flex-row items-center text-green-500 hover:text-black w-max cursor-pointer" onClick={() => addInstruction()}>
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
                            <button type="button" className="bg-gradient-to-r from-yellow-200 to-green-200 mx-auto w-full md:w-1/2 rounded shadow" onClick={e => handleSubmit(e)}>
                                <div className="bg-yellow-200 h-full w-full py-3 px-4 bg-opacity-0 hover:bg-opacity-100 rounded transition ease-in-out duration-250">Save Recipe</div>
                            </button>
                        </div>
                    </form>
                </div> 
            </div>
        </div>
    )
}

export default AddRecipe