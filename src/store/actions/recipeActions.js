export const createRecipe = (recipe) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        firestore.collection('recipes').add({
            ...recipe,
            uploadedBy: 'ewinters',
            isPublic: true
        }).then(() => {
            dispatch({ type: 'CREATE_RECIPE', recipe});
        }).catch((err) => {
            dispatch({ type: 'CREATE_RECIPE_ERROR', err})
        })
    }
}