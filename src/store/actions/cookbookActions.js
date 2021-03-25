export const createCookbook = (cookbook) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        let newDocRef = firestore.collection('Cookbooks').doc();
        newDocRef.set({
            ...cookbook,
            owner: 'ewinters',
            isPublic: true,
            cookbookID: newDocRef.id,
            recipeList: [],
            collaborators: []
        }).then(() => {
            dispatch({ type: 'CREATE_COOKBOOK', cookbook});
        }).catch((err) => {
            dispatch({ type: 'CREATE_COOKBOOK_ERROR', err})
        })
    }
}