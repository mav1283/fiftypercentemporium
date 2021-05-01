import { ActionTypes } from '../constants/action-types';
const { ANIMATE_CART_LINK} = ActionTypes;

export const animateCart = () =>{
    return {
        type: ANIMATE_CART_LINK
    }
}
