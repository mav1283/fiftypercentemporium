//import axios from 'axios';
//import { useState, useEffect } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectedProduct, setProducts } from '../../../redux/actions/productActions';

function SearchArea(){
    const { register, handleSubmit, formState: {errors} } = useForm();
    //const searchAction = data => console.log(data);
    const searchAction = (data) => searchProduct(data.searchInput);
    //const [loading, setLoading] = useState(false);
    const { productsArray:{products} } = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();

/*
"electronics",
"jewelery",
"men clothing",
"women clothing"
*/

    const searchProduct = async (param) =>{
        try{   
            let response;
            if(isNaN(param)){
                response = await products.find(prod => prod.title === param);
                if(response){
                    await dispatch(selectedProduct(response));
                    await redirectToProduct(response.id);
                } else {
                    await redirectToSearchNotFound();
                }
            } else if((param === "electronics") || (param === "jewelery") || (param === "men's clothing") || (param === "women's clothing")){
                response = await axios.get(`https://fakestoreapi.com/products/category/${param}`);
                await dispatch(setProducts(response.data))
            } else {
                response = await axios.get(`https://fakestoreapi.com/products/${param}`);
                await dispatch(selectedProduct(response.data));
                await redirectToProduct(response.data.id);
            } 
            
        } catch(err){
            console.log(err);
        }
    }

    /*
     const testSearch = async (param) =>{
        try{
             let res;
             res = await products.find(prod =>prod.id === param);
             //await console.log(res);
             await dispatch(selectedProduct(res))
         }catch(err){
             console.log(err)
         }
    }

    useEffect(()=>{
         testSearch();
    },[]) */

    


    const redirectToProduct = (param)=>{
        return history.push(`/product/${param}`);
    }

    const redirectToSearchNotFound = ()=>{
        return history.push('/search_not_found');
    }

    
    return (
        <form className="custom-form" onSubmit={handleSubmit(searchAction)}>
            <div className="input-label-field">
                <label htmlFor="name">
                    <input type="text" placeholder="Search" {...register('searchInput',{required: true})}/>
                    <button type="submit" className="trans-btn search-icon"><FaSearch /></button>
                </label>
                {errors.searchInput && <p className="input-error">This is required</p>}
            </div>
        </form>
    )
}

export default SearchArea;