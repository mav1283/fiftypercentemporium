import { useState } from 'react';
import { useEffect } from 'react';
import { FaBroom } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../redux/actions/cartActions';
//import { cartVoice } from '../utilities';
import CartItem from './CartItem';

function Cart(){

    const {cartData} = useSelector(state => state);
    const dispatch = useDispatch();
    const [totalCost, setTotalCost] = useState(0);

    
    const calculateTotalCost = ()=>{
        // let total = cartData.reduce((a,b)=>{
        //     return ( a.quantity * a.product.price) + ( b.quantity * b.product.price)
        // })
        let total = [];
        let totalCalc;
        if(cartData){
            cartData.forEach(item => {
                return total.push(item.product.price * item.quantity);
            })
            if(total.length !== 0){
                totalCalc = total.reduce((a,b)=>a+b);
            }
        } else {
            totalCalc = 0;
        }
        setTotalCost(totalCalc);
    }

    const handleClearCart = ()=>{
        //cartVoice('Your cart is now empty.');
        // if(cartData.length!==0){
            dispatch(clearCart())
        //};
    }

    useEffect(()=>{
        calculateTotalCost();
    },[cartData])


    return (
        <div className="cart">
            <div className="cart_header">
                <p>Cart Items: {cartData.length}</p>
                <button className="btn btn-warning btn-sm" onClick={handleClearCart} disabled={cartData.length === 0? true : false} ><FaBroom /> Clear Cart</button>
            </div>
            {
                cartData.length === 0 && <p>Your cart is empty...</p>
            }
            <ul className="cart_list">
                { cartData.map(cartItem => <CartItem key={cartItem.cart_id} {...cartItem}/>) }
            </ul>
            <div className="cart_total">
                <h3 className="price">Total: <span className="money">$ {totalCost? totalCost : 0}</span></h3>
            </div>
        </div>        
    )
}

export default Cart;