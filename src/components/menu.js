import React,{useContext} from 'react';
import categoryMenuMap from './CategoriesMenuMap';
import MenuList from './MenuList';
function Menu(props) {

    const intialMenuCategory= props.category;
    const categoryHeaderItems = categoryMenuMap(props.categories,props.menu)[intialMenuCategory];  
    const initialMenu= categoryHeaderItems.slice(1);
    return (  
        <>
            <h2>{categoryHeaderItems[0]}</h2>
            <div className="items"> 
                <MenuList initialMenu={initialMenu}/>
            </div>
        </>
    );
}

export default Menu;
