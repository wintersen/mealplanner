export const createRecipe = (recipe) => {
    return (dispatch, getState) => {
        //make async
        dispatch({ type: 'CREATE_RECIPE', recipe})
    }
}