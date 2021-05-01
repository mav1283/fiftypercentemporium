import {
    //useEffect,
    useState
} from 'react';
import { nanoid } from 'nanoid';
import { FaPlus, FaMinus, FaUndoAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../../redux/actions/cartActions';
//import { cartVoice } from '../utilities';
import { animateCart } from '../../redux/actions/animationActions';


function CartOption(){

    const [quantity,setQuantity] = useState(1);
    const { product, cartData, animations } = useSelector(state => state);
    const dispatch = useDispatch();

    const handleInc = ()=>{
        
        setQuantity( prevState => prevState + 1);
    }

    const handleDec = ()=>{
        
        setQuantity( prevState => prevState > 1? prevState - 1 : 1);
    }

    const handleReset = ()=>{
        
        setQuantity(1);
    }

    const handleAddToCart = ()=>{
        let entry = {
            cart_id: nanoid(),
            quantity,
            product
        }

        //cartVoice('Item added to cart');
        dispatch(setCart(entry));
        dispatch(animateCart('scaleup'));
    }
        
    // useEffect(()=>{
    //     console.log(product, cartData);
    // },[cartData])

    return (
        <div className="cart_option">
            <div className="qty_calc">
                <h5>Qty: {quantity}</h5>
                <div className="qty_ctrls">
                    <button className="btn-sm btn-default" onClick={handleDec}><FaMinus /></button>
                    <button className="btn-sm btn-default" onClick={handleReset}><FaUndoAlt /></button>
                    <button className="btn-sm btn-default" onClick={handleInc}><FaPlus /></button>
                </div>
            </div>
            <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
        </div>
    )
}

export default CartOption