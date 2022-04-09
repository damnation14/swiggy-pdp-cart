import React, { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import Banner from './Banner'
import Cart from './Cart.js'
import HandleCategoriesMenu from './HandleCategoriesMenu.js'

import axios from "axios"
function Restuarant1() {
    
    const [categoriesInfo,setCategoriesInfo]=useState({})
    const [menuInfo,setMenuInfo]=useState({})
   
    useEffect(()=>(
        function fetchdata(){
            axios.all([
                axios.get('http://localhost:8080/categories'),
                axios.get('http://localhost:8080/menu-items')
              ])
              .then(axios.spread(function (categoriesInfo, menuInfo) {
                
                setCategoriesInfo(categoriesInfo.data)
                setMenuInfo(menuInfo.data)
                
              }))
        }()
    ),[])
    
    
    const {restuarantName}= useParams()
    return (
        (Object.keys(categoriesInfo).length !==0 && Object.keys(menuInfo).length !==0)?
        <>
            <div className="banner">
                        <Banner bannerImg="https://images.everydayhealth.com/images/diabetes/type-2-diabetes/intro-low-carb-brownie-recipes-for-people-with-type-2-diabetes-722x406.jpg?w=720"
                    bannerHeader={`Welcome to ${restuarantName.slice(1)}!`}/>
            </div>
            <main className="row">
                        <HandleCategoriesMenu menu={menuInfo} categories={categoriesInfo}/>                   
                <div className="cart col-3">
                          <Cart/>
                    </div>
                        
            </main>
        </>:null
       
     );
}

export default Restuarant1 ;