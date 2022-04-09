import React, {useState} from 'react';
import categoryMenuMap from './CategoriesMenuMap';
import Menu from './Menu'
import Category from './Categories'
function HandleCategoriesMenu(props) {
   
    const [selectedCategory,setselectedCategory]=useState(Object.keys(categoryMenuMap(props.categories,props.menu))[0])
    

    const highlightCategory=(id)=>{
        
        document.querySelectorAll('.category ul li').forEach(element => {
            element.classList.remove("highlighted");
        })
        document.querySelectorAll('.category ul li').forEach(element => {
            if (element.id===id) element.classList.add("highlighted");
        })

    }
    const handleMenuFromCategory= (id) =>{
        setselectedCategory(id);
        highlightCategory(id);
    }
    
   
    return (
        <>
        <div className="category col-3">
        
            <Category handleMenuFromCategory={handleMenuFromCategory} categoriesInfo={props.categories}/>
            
        </div>
        <div className="menu-items">
            <Menu menu={props.menu} categories={props.categories} category={selectedCategory} />
        </div>
        </>
    );
}

 
export default HandleCategoriesMenu;