import { ActionTypes } from '../constants/action-types';
//import { nanoid } from 'nanoid';

const { SET_PRODUCTS, SELECTED_PRODUCT } = ActionTypes;

const initialState = {
    products: []
};

export const productReducer = (state=initialState, {type,payload})=>{
    switch(type){
        case SET_PRODUCTS:
            return {
                ...state,
                products: payload
            };
        default:
            return state;
    }
}

export const selectedProductReducer = (state={},{type,payload})=>{
    switch(type){
        case SELECTED_PRODUCT:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}