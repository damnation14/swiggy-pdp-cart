import React from 'react';
import categoryMenuMap from './CategoriesMenuMap';


function Menu(props) {

    const intialMenuCategory= props.category;
    
    const categoryHeaderItems = categoryMenuMap()[intialMenuCategory];  
    const initialMenu= categoryHeaderItems.slice(1);
    const menuList = initialMenu.map( (menuItem)=> (
        <div key={menuItem.id}>
            <img src={ menuItem.vegetarian?"https://i.pinimg.com/originals/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.png":"https://freesvg.org/img/1531813245.png" } alt="veg/nonveg"></img>
            <p>{menuItem.displayName}</p>
            <p>₹{menuItem.price}</p>
        </div>
    ));
    return (  
        <>
            <h2>{categoryHeaderItems[0]}</h2>
            <p>ITEMS {menuList.length}</p>
            <div className="items"> 
                {menuList}
            </div>
        </>
    );
}

export default Menu;