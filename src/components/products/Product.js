import { lazy, Suspense } from 'react';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
//import Loading from '../loading/Loading';
import Spinner from '../loading/Spinner';
import CardDetails from './CardDetails'
const CardImage = lazy(()=>import('./CardImage.js'));
// import ProductDetails from './ProductDetails';

function Product({id, title, price, category, image}){

    // const data = useSelector(state => state);
    // const { allProducts } = data;
    // const { products } = allProducts;

    // useEffect(()=>{
    //     console.log(products)
    // },[])

    return (
        <li className="card">
            <Link to={`product/${id}`}>
                <Suspense fallback={<Spinner />}>
                    <CardImage image={image} title={title} />
                </Suspense>
                <CardDetails
                    title={title}
                    category={category}
                    price={price}
                />
            </Link>
        </li>
    )
}

export default Product;