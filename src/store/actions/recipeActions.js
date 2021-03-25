import firebase from 'firebase/app';

export const createRecipe = (recipe) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        let newDocRef = firestore.collection('Recipes').doc();
        newDocRef.set({
            ...recipe,
            uploadedBy: 'ewinters',
            isPublic: true,
            recipeID: newDocRef.id
        }).then(() => {
            dispatch({ type: 'CREATE_RECIPE', recipe});
        }).catch((err) => {
            dispatch({ type: 'CREATE_RECIPE_ERROR', err})
        })

        let cbRef = firestore.collection('Cookbooks').doc(recipe.belongsTo[0]);

        cbRef.update({
            recipeList: firebase.firestore.FieldValue.arrayUnion(newDocRef.id)
        }).then(() => {
            console.log("Recipe added to cookbook.");
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        });
            
    }
}