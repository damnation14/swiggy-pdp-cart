import React, {useState} from 'react';
import categoryMenuMap from './mapCategoriesMenu';
import Menu from './menu'
import Category from './categories'
function CategoryMenu() {
    const [category,setCategory]=useState(Object.keys(categoryMenuMap())[0])
    

    const highlightCategory=(id)=>{
        console.log("in highligh",id)
        document.querySelectorAll('.category ul li').forEach(element => {
            element.classList.remove("highlighted");
        })
        document.querySelectorAll('.category ul li').forEach(element => {
            if (element.id===id) element.classList.add("highlighted");
        })

    }
    const handleMenuFromCategory= (id) =>{
        setCategory(id);
        highlightCategory(id);
    }
    
   
    return (
        <>
        <div className="category col-3">
        
            <Category handleMenuFromCategory={handleMenuFromCategory}/>
            
        </div>
        <div className="menu-items">
            <Menu category={category} />
        </div>
        </>
    );
}

 
export default CategoryMenu;