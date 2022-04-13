import {  React } from 'react';
import './cart.module.css'; 
import MainHeader from '../../atoms/MainHeader/MainHeader.js'
import MainItemNumber from '../../atoms/MainItemNumber/MainItemNumber.js'
import CartListItem from '../../atoms/CartListItem/CartListItem.js'
import  CartSubtotal from '../../atoms/CartSubtotal/CartSubtotal.js'
import  CartSubmitButton from '../../atoms/SubmitButton/SubmitButton.js'
import useFetch from '../helper/customApiHook.js'
function Cart () {
        
    
        const {data :cartInfo,loading} = useFetch('http://localhost:8080/cart')
        
        const cartItemsListFunc =(cartItems)=>{
            const cartItemsList= cartItems.map((cartItem)=>(
                <CartListItem key={cartItem.id}cartItem={cartItem}/>
            ))
                return cartItemsList;
        }
            
   
        if (loading) 
            return  <h2>Loading..</h2>
        else
        { 
            return cartInfo && Object.keys(cartInfo).length >0?
            <div className="cart">
                    <MainHeader header="Cart" />
                    <MainItemNumber itemNumber={cartInfo.lineItems.length}/>
                    {cartItemsListFunc(cartInfo.lineItems)}
                    <CartSubtotal subTotal={cartInfo.subTotal} />
                    <CartSubmitButton/>
            </div>:  null
        }
    }

 
export default Cart;