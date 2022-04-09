import React, { useState } from 'react';
function OfferItemsList(props) {
    const offerMenuList=props.menuInfo.map((menuItem)=>(
        <div key={menuItem.id} className="offer-column offer-item">
                <img src={menuItem.imgUrl} alt="biriyani"></img>
                <p>₹{menuItem.price} <span>20% off</span></p>
        </div>
    ));
    return (  
        offerMenuList
    );
}

export default OfferItemsList;