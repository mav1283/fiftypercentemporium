import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './productReducer';
import { categoryReducer } from './categoryReducer';
import { cartReducer } from './cartReducer';
import { animationReducer } from './animationsReducer';

const reducers = combineReducers({
    productsArray: productReducer,
    product: selectedProductReducer,
    categories: categoryReducer,
    cartData: cartReducer,
    animations: animationReducer,
});

export default reducers;