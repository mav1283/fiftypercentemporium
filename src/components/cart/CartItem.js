//import { useEffect } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { decCartItemQuantity, incCartItemQuantity, removeFromCart } from '../../redux/actions/cartActions';
//import { cartVoice } from '../utilities';

function CartItem({cart_id, product, quantity}){

    const {title, image, category, price} = product;
    //const {cartData} = useSelector(state => state);
    const dispatch = useDispatch();
    
    // useEffect(()=>{
    //     console.log(cart_id);
    // },[])

    const handleRemoveFromCart = (e)=>{
        //cartData.length > 1? cartVoice('Removing item from cart') : cartVoice('Removing the last item, your cart is now empty.');
        e.preventDefault();
        e.stopPropagation();
        dispatch(removeFromCart(cart_id));
        //console.log(cart_id);
    }

    const handleIncItemQuantity = ()=>{
        dispatch(incCartItemQuantity(cart_id));
    }

    const handleDecItemQuantity = ()=>{
        dispatch(decCartItemQuantity(cart_id));
    }

    return (
        <li className="cart_item">
            <div className="cart_item_image">
                <img src={image} alt={title}/>
            </div>
            <div className="cart_item_details">
                <h5>{title}</h5>
                <p>{category}</p>
                <p className="money">$ {price}</p>
            </div>
            <div className="cart_item_cta">
                <div className="cta_qty">
                    <p>Qty: {quantity}</p>
                    <div className="cta">
                        <button className="btn btn-xs btn-default" onClick={handleDecItemQuantity}><FaMinus /></button>
                        <button className="btn btn-xs btn-default" onClick={handleIncItemQuantity}><FaPlus /></button>
                    </div>
                </div>
                <button className="btn btn-xs btn-default" onClick={handleRemoveFromCart}>Delete</button>
            </div>
        </li>
    )
}

export default CartItem;