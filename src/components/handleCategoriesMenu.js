import React, {useState} from 'react';
import Menu from './Menu'
import Category from './Categories'

function HandleCategoriesMenu(props) {
   
    return (
        <>
        <div className="category col-3">
        
            <Category categoriesInfo={props.categories}/>
            
        </div>
        <div className="menu-items">
            <Menu menu={props.menu} categories={props.categories} />
        </div>
        </>
    );
}

 
export default HandleCategoriesMenu;