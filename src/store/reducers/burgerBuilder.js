import * as actionTypes from '../actions/actionTypes';
import { updateObjects, updateObject } from '../utility';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
};

const addIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    let newPrice = state.totalPrice + INGREDIENT_PRICES[action.ingredientName];
    const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: newPrice,
                building: true
            };

    return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
    const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
    const updatedIngs = updateObject(state.ingredients, updatedIng);
    let newPr = state.totalPrice - INGREDIENT_PRICES[action.ingredientName];
    const updatedSt = {
        ingredients: updatedIngs,
        totalPrice: newPr,
        building: true
    };

    return updateObject(state, updatedSt);
};

const setIngredient = (state, action) => {
    return updateObject(state, {
        ingredients: action.ingredients,
        totalPrice: 4,
        error: false,
        building: false
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredient(state, action); 
        case actionTypes.FETCH_INGREDIENTS_FAILED: return updateObject(state, { error: true });
        default:
            return state;        
    }

}

export default reducer;