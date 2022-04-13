import {  React } from 'react';
import './categories.module.css'; 
//import categoriesInfo from '../../../data/categories.json'
import CategoryListItem from '../../atoms/TextList/TextList.js'

function Categories ({handleMenuFromCategory,categoriesInfo}) {
   
    const categoriesList=categoriesInfo.map((category)=>(
        <CategoryListItem key ={category.id}  id ={category.id} textListContent={category.displayName}  handleMenuFromCategory={handleMenuFromCategory}/>
    ));
    
        return (
            <ul>
                {categoriesList}
            </ul>
        );
    }

 
export default Categories;