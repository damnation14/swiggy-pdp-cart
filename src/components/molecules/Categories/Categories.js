import {  React } from 'react';
import './categories.module.css'; 
//import categoriesInfo from '../../../data/categories.json'
import CategoryListItem from '../../atoms/CategoryListItem/CategoryListItem.js'

function Categories ({handleMenuFromCategory,categoriesInfo}) {
   
    const categoriesList=categoriesInfo.map((category)=>(
        <CategoryListItem key ={category.id} category={category} handleMenuFromCategory={handleMenuFromCategory}/>
    ));
    
        return (
            <ul>
                {categoriesList}
            </ul>
        );
    }

 
export default Categories;