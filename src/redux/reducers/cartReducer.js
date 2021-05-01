import { ActionTypes } from '../constants/action-types';
const { SET_CART, INC_CART_ITEM_QUANTITY, DEC_CART_ITEM_QUANTITY, REMOVE_FROM_CART, CLEAR_CART } = ActionTypes;

const initialState = []

export const cartReducer = (state=initialState, {type,payload})=>{
    switch(type){
        case SET_CART:
            return [
                ...state,
                payload
            ];
        case INC_CART_ITEM_QUANTITY:
            return [
                ...state.map( item => {
                    if(item.cart_id === payload) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return {...item }
                    }
                })
            ];
        case DEC_CART_ITEM_QUANTITY:
            return [
                ...state.map( item => {
                    if(item.cart_id === payload) {
                        return {...item, quantity: item.quantity > 1? item.quantity - 1 : item.quantity - 0}
                    } else{
                        return {...item }
                    }
                })
            ];    
        case REMOVE_FROM_CART:
            return [
                ...state.filter(item => item.cart_id !== payload)
            ];
        case CLEAR_CART:
            return [];
        default:
            return state;
    }
}