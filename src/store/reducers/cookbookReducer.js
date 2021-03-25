const initState = {
    cookbooks: []
}

const cookbookReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_COOKBOOK':
            console.log("CREATE_COOKBOOK: ", action.cookbook);
            return state;
        case 'CREATE_COOKBOOK_ERROR':
            console.log("CREATE_COOKBOOK_ERROR: ", action.err);
            return state;
        default:
            return state;
    }
}

export default cookbookReducer