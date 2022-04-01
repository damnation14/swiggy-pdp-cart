import React, { useState } from 'react';
import {useParams} from 'react-router-dom'
import Banner from './Banner'
import Cart from './Cart.js'
import CategoryMenu from './HandleCategoriesMenu.js'
function Restuarant1() {
    
    const {restuarantName}= useParams()
    console.log({restuarantName})
    return ( 
        <>
            <div className="banner">
                        <Banner bannerImg="https://images.everydayhealth.com/images/diabetes/type-2-diabetes/intro-low-carb-brownie-recipes-for-people-with-type-2-diabetes-722x406.jpg?w=720"
                    bannerHeader={`Welcome to ${restuarantName.slice(1)}!`}/>
            </div>
            <main className="row">
                        <CategoryMenu/>                   
                        <div className="cart col-3">
                            <Cart/>
                        </div>
                        
            </main>
        </>
       
     );
}

export default Restuarant1 ;