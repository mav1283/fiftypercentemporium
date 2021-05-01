import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, resetCategory } from '../../redux/actions/categoryActions';

function FilterPanel(){

    //const [category, setCategory] = useState('all');
    const {categories: { category }} = useSelector(state => state);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { value } = e.target;
        //setCategory(value);
        dispatch(setCategory(value))
    };

    const handleReset = () => {
        dispatch(resetCategory())
    };

    // useEffect(()=>{
    //     console.log(categories);
    // },[]);

    

    return (
        <div className="filter_panel">
            <div className="filters">
                    
                <label htmlFor="allproduct" className="filter_label">
                    <input type="radio" id="allproduct" value="all" checked={category === 'all'} onChange={handleReset}/>
                    <span className="custom_radio"></span>
                    <span>All Categories</span>
                </label>
                <label htmlFor="menclothing" className="filter_label">
                    <input type="radio" id="menclothing" value="men's clothing" checked={category === "men's clothing"} onChange={handleChange}/>
                    <span className="custom_radio"></span>
                    <span>Men's Clothing</span>
                </label>
                <label htmlFor="womenclothing" className="filter_label">
                    <input type="radio" id="womenclothing" value="women's clothing" checked={category === "women's clothing"} onChange={handleChange}/>
                    <span className="custom_radio"></span>
                    <span>Women's Clothing</span>
                </label>
                <label htmlFor="electronics" className="filter_label">
                    <input type="radio" id="electronics" value="electronics" checked={category === 'electronics'} onChange={handleChange}/>
                    <span className="custom_radio"></span>
                    <span>Electronics</span>
                </label>
                <label htmlFor="jewelry" className="filter_label">
                    <input type="radio" id="jewelry" value="jewelery" checked={category === 'jewelery'} onChange={handleChange}/>
                    <span className="custom_radio"></span>
                    <span>Jewelry</span>
                </label>
                
            </div>
        </div>
    )
}

export default FilterPanel;