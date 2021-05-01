//import { useEffect } from 'react';
import { CartOption, PriceTag } from './';

function CardDetails(
    // {title, price, category, description, match}
    props
    ){

    // useEffect(()=>{
    //     console.log(props);
    // },[])

    return (
        <div className="card_details">
            <h5>{props.title}</h5>
            <PriceTag price={props.price} />
            {
                props.match && <p>{props.description}</p>
            }
            <p className="category">{props.category}</p>
            {
                props.match && <CartOption />
            }
        </div>
    )
}

export default CardDetails