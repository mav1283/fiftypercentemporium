import { lazy, useEffect, useState, Suspense } from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { Loading, Spinner} from '../loading';
import axios from 'axios';
import { ImArrowLeft } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../../redux/actions/productActions';
import CardDetails from './CardDetails';
//import CardImage from './CardImage';
const CardImage = lazy(() => import('./CardImage.js'));


function ProductDetails(){

    const [loading, setLoading] = useState(false);
    //const [product, setProduct] = useState({});
    const product = useSelector(state => state.product);
    const dispatch = useDispatch();
    const { productId } = useParams();
    //const {title, price, category, description, image} = product;
    const match = useRouteMatch();

    const fetchProduct = async ()=>{
        try{
            await setLoading(true);
            let response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            await dispatch(selectedProduct(response.data));
            //await setProduct(response.data);
            await setLoading(false);
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchProduct()
    },[])
    
    return loading? <Loading /> : (
        <div className="product_details">
            <div className="page_nav">
                <p>
                <Link to="/"><ImArrowLeft /><span>Back</span></Link>
                </p>
            </div>
            <div className="card_solo">
                <Suspense fallback={<Spinner />}>
                    <CardImage image={product.image} title={product.title} />
                </Suspense>
                {/* <div className="card_image">
                    <img src={product.image} alt={product.title} />
                </div> */}
                <CardDetails {...product} match={match}/>
            </div>
        </div>
    )
}

export default ProductDetails;