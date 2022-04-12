import React,{useContext} from 'react';
import categoryMenuMap from './CategoriesMenuMap';
import MenuList from './MenuList';
import {useSelector} from 'react-redux' 
function Menu(props) {
    const currentMenuCategory= useSelector(state => state.categoryID)
    const categoryHeaderItems = categoryMenuMap(props.categories,props.menu)[currentMenuCategory];  
    const currentMenu= categoryHeaderItems.slice(1);
    return (  
        <>
            <h2>{categoryHeaderItems[0]}</h2>
            <div className="items"> 
                <MenuList initialMenu={currentMenu}/>
            </div>
        </>
    );
}

export default Menu;
