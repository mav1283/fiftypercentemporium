import { ActionTypes } from '../constants/action-types';
const { SET_CART, INC_CART_ITEM_QUANTITY, DEC_CART_ITEM_QUANTITY, REMOVE_FROM_CART, CLEAR_CART } = ActionTypes;

export const setCart = (product) =>{
    return {
        type: SET_CART,
        payload: product
    }
}

export const incCartItemQuantity = (cart_id)=>{
    return {
        type: INC_CART_ITEM_QUANTITY,
        payload: cart_id
    }
}

export const decCartItemQuantity = (cart_id)=>{
    return {
        type: DEC_CART_ITEM_QUANTITY,
        payload: cart_id
    }
}

export const removeFromCart = (cartId) =>{
    return {
        type: REMOVE_FROM_CART,
        payload: cartId
    }
}

export const clearCart = () =>{
    return {
        type: CLEAR_CART
    }
}

