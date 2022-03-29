import React, { useState } from 'react';
import cartData from './data/cart.json'



function Cart () {
    const [cartInfo]=useState(cartData);
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
        <>
            <h1>Cart</h1>
            <p>ITEMS {cartInfo.lineItems.length}</p>
            {mapCartItems(cartInfo.lineItems)} 
            <div className="total-price">
               <h3>Subtotal</h3>
               <p>₹{cartInfo.subTotal}</p>
            </div>
            <button className="button">Checkout</button>       
        </>
     );
}

export default Cart ;