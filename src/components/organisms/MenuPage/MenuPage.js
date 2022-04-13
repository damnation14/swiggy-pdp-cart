import React, { useState,useEffect } from 'react';
import Header from '../../molecules/Header/Header.js'
import Banner from '../../molecules/Banner/Banner.js'
import Cart from '../../molecules/Cart/Cart.js'
import Footer from '../../molecules/Footer/Footer.js'
import MenuFromCategory from '../../molecules/MenuFromCategory/MenuFromCategory.js'
import styles from './menupage.module.css'
import axios from "axios"
function MenuPage() {

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
    return ( 
        (Object.keys(categoriesInfo).length !==0 && Object.keys(menuInfo).length !==0)? 
        <>
            <Header />
            <Banner />
            <main className={styles.row}>
                <MenuFromCategory menuInfo={menuInfo} categoriesInfo={categoriesInfo}/>                  
                <div className={styles.cart}>
                    <Cart/>
                </div>
                
            </main> 
            <Footer/>
        </>:<h2>Loading..</h2>
    );
}

export default MenuPage;