import { ActionTypes } from '../constants/action-types';
const { ANIMATE_CART_LINK } = ActionTypes;

const initialState = {
    animateCart: false
}

export const animationReducer = (state = initialState, {type})=>{
    switch(type){
        case ANIMATE_CART_LINK:
            return {
                ...state,
                animateCart: !state.animateCart
            }
        default:
            return state
    }
}

