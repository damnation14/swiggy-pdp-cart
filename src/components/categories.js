import React, {useState} from 'react';
import categories from './data/categories.json'

function Category(props) {
    
    const [categoriesInfo]=useState(categories);
    
    const categoriesList= ()=>{
        const categories=categoriesInfo.categories.map((category,index)=>(
        <li key={category.id} id={category.id} className={index===0? "highlighted":""} onClick={()=>props.handleMenuFromCategory(category.id)}>
            {category.displayName}
            
        </li>
    ));
    return categories;
}
    
    
        return (
            <ul>
                {categoriesList()}
            </ul>
        );
    }

 
export default Category;