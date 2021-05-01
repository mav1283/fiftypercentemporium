import { ActionTypes } from '../constants/action-types';

const { SET_CATEGORY, RESET_CATEGORY } = ActionTypes;

const initialState = {
    category: 'all'
};

export const categoryReducer = (state=initialState, {type,payload})=>{
    switch(type){
        case SET_CATEGORY:
            return {
                ...state,
                category: payload
            };
        case RESET_CATEGORY:
            return {
                ...state,
                category: 'all'
            };

        default:
            return state;
    }
}