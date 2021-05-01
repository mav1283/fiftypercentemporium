import { FaTag } from 'react-icons/fa';

function PriceTag({price}){
    return (
        <div className="price_tag">
            <FaTag />
            <p>$ {price}</p>
        </div>
    )
}

export default PriceTag;