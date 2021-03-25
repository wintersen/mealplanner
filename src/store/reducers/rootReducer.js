import authReducer from './authReducer';
import recipeReducer from './recipeReducer';

import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import cookbookReducer from './cookbookReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    recipes: recipeReducer,
    cookbooks: cookbookReducer,
    firestore: firestoreReducer
})

export default rootReducer