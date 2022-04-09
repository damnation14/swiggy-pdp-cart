import React, { useState,useEffect } from 'react';
import useFetch from './api/api.js'



function Cart (props) {
    
     
    const {data :cartInfo,loading,error} = useFetch('http://localhost:8080/cart')

    function mapCartItems(cart){
    
        const cartItems=cart.map((cartItem)=>(
            <div key={cartItem.id} className="cart-item-quantity">
                <p>{cartItem.name}</p>
                <p>{cartItem.quantity}</p>
    
            </div>
        ))
        return cartItems;
    }
 
    

    
    return (
        loading?
        <>
            <h1>Cart</h1>
            <p>ITEMS {cartInfo.lineItems.length}</p>
            {mapCartItems(cartInfo.lineItems)} 
            <div className="total-price">
               <h3>Subtotal</h3>
               <p>₹{cartInfo.subTotal}</p>
            </div>
            <button className="button">Checkout</button>       
        </>:null
     );
}

export default Cart ;