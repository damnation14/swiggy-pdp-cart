import React, { useState,useContext } from 'react';
import {OfferText} from './RestuarantsMain';
function MenuList(props) {
    const offerText= useContext(OfferText)
    const menuList = props.initialMenu.map( (menuItem)=> (
        <div key={menuItem.id}>
            <img src={ menuItem.vegetarian?"https://i.pinimg.com/originals/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.png":"https://freesvg.org/img/1531813245.png" } alt="veg/nonveg"></img>
            <p>{menuItem.displayName}</p>
            <p>₹{menuItem.price} <span className="offer-text">{offerText.offerText}</span></p>
        </div>));
    return ( 
        <>
        <p>ITEMS {menuList.length}</p>
        {menuList}
        </>
     );
}

export default MenuList;