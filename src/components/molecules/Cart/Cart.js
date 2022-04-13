import {  React } from 'react';
import './cart.module.css'; 
import MainHeader from '../../atoms/MainHeader/MainHeader.js'
import MainItemNumber from '../../atoms/MainItemNumber/MainItemNumber.js'
import CartListItem from '../../atoms/CartListItem/CartListItem.js'
import cartInfo from '../data/cart.json'
import  CartSubtotal from '../../atoms/CartSubtotal/CartSubtotal.js'
import  CartSubmitButton from '../../atoms/CartSubmitButton/CartSubmitButton.js'

function Cart () {
        
        const cartItems=cartInfo.lineItems
    
        const cartItemsList=cartItems.map((cartItem)=>(
            <CartListItem key={cartItem.id}cartItem={cartItem}/>
        ))
  
   
        return (
            <div className="cart">
                    <MainHeader header="Cart" />
                    <MainItemNumber itemNumber={cartItems.length}/>
                    {cartItemsList}
                    <CartSubtotal cartInfo={cartInfo}/>
                    <CartSubmitButton/>
            </div>
        );
    }

 
export default Cart;