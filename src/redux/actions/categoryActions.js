import { ActionTypes } from '../constants/action-types';
const { SET_CATEGORY, RESET_CATEGORY } = ActionTypes;

export const setCategory = (category) =>{
    return {
        type: SET_CATEGORY,
        payload: category
    }
}

export const resetCategory = () =>{
    return {
        type: RESET_CATEGORY,
    }
}


