import React, {useState,useEffect} from 'react';




function Category(props) {

    const categoriesInfo=props.categoriesInfo;
    const categoriesList= ()=>{
        const categories=categoriesInfo.map((category,index)=>(
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