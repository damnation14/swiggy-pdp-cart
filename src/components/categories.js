import React, {useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux' 
import changeCategory from '../redux/changeCategory/changeCategoryAction'


function Category(props) {

    const categoriesInfo=props.categoriesInfo;
    const categoryId= useSelector(state => state.categoryID)
    const dispatch = useDispatch()
    const categoriesList= ()=>{
        const categories=categoriesInfo.map((category,index)=>(
        <li key={category.id} id={category.id} className={category.id===categoryId? "highlighted":""} onClick={()=>dispatch(changeCategory(category.id))}>
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