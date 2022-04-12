import React, { useState,useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux' 
import {fetchCartData} from '../redux/cart/cartAction'

function Cart (props) {
    
    
    const cartInfo= useSelector(state => state.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCartData("http://localhost:8080/cart"))
    },[dispatch])

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
        !cartInfo.loading && Object.keys(cartInfo.data).length > 0?
        <>
            <h1>Cart</h1>
            <p>ITEMS {cartInfo.data.lineItems.length}</p>
            {mapCartItems(cartInfo.data.lineItems)} 
            <div className="total-price">
               <h3>Subtotal</h3>
               <p>₹{cartInfo.data.subTotal}</p>
            </div>
            <button className="button">Checkout</button>       
        </>:null
     );
}

export default Cart ;