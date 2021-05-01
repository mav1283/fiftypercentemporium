import { useEffect, useState, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../../redux/actions/productActions';
//import { resetCategory } from '../../redux/actions/categoryActions';
import axios from 'axios';
//import Product from './Product';
import FilterPanel from './FilterPanel';
//const FilterPanel = lazy(() => import('./FilterPanel'));
import Loading from '../loading/Loading';
//const Loading = lazy(() => import('../loading/Loading'));
const Product = lazy(() => import('./Product'));


function ProductList(){

    const [loading, setLoading] = useState(false);
    const {productsArray:{products}, categories: {category}} = useSelector(state => state);
    const dispatch = useDispatch();
    //const { allProducts, categories } = data;

    useEffect(()=>{
     fetchProducts();   
    },[category]);


    const fetchProducts = async ()=>{
        try{
            await setLoading(true);
            let response;
            /* Old code
                const response = await axios.get('https://fakestoreapi.com/products');
                setData(response.data);
            */
           if(products){

               if(category === 'all'){
                   response = await axios.get('https://fakestoreapi.com/products');
                   await dispatch(setProducts(response.data));
               } else {
                   response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
                   await dispatch(setProducts(response.data));
                   /* Old code
                       dispatch(setProducts(response.data.filter(product => product.category === categories.category)))
                   */
               }
           }
            
            await setLoading(false);
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        console.log(category)
    },[])

    return (
        <div className="main_grid">
                <FilterPanel />
                {
                    loading && <Loading />
                }
                {
                    products? 
                    (
                        <Suspense fallback={<Loading />}>
                            <ul className="product_list">
                                {
                                    products.map( product => <Product key={product.id} {...product} /> )
                                }
                            </ul>
                        </Suspense>
                    ) : (
                        <p>No products yet.</p>
                        )
                    }
        </div>
    )
}

export default ProductList