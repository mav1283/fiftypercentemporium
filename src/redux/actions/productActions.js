import { ActionTypes } from '../constants/action-types';
const { SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCTS } = ActionTypes;

export const setProducts = (products) =>{
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) =>{
    return {
        type: SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProducts = (id) =>{
    return {
        type: REMOVE_SELECTED_PRODUCTS,
        payload: id
    }
}

