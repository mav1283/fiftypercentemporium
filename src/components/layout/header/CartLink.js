import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addAnimaClass, removeAnimaClass } from '../../utilities';
// import { cartVoice } from '../../utilities';


function CartLink(){

    const {cartData, animations} =  useSelector(state => state);
    const { animateCart } = animations;

    useEffect(()=>{
    
        async function animateCart(){
            await addAnimaClass();
            await removeAnimaClass();
        } 
        
        animateCart();
          
    },[animateCart])

    return (
        <p id="shoppingcart" className="shopping_cart">
            <Link to="/cart">
                <FaShoppingCart />
                {
                    cartData?  (
                    <span className="cart_count">
                        {
                            cartData.length
                        }
                    </span>
                    ) : null
                }
            </Link>
        </p> 
    )
}

export default CartLink