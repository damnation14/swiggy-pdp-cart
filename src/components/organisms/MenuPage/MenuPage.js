import React from 'react';
import Header from '../../molecules/Header/Header.js'
import Banner from '../../molecules/Banner/Banner.js'
import Cart from '../../molecules/Cart/Cart.js'
import Footer from '../../molecules/Footer/Footer.js'
import HandleMenuFromCategory from '../../molecules/HandleMenuFromCategory/HandleMenuFromCategory.js'
import styles from './menupage.module.css'
function MenuPage() {
    return (  
        <>
            <Header />
            <Banner />
            <main className={styles.row}>
                <HandleMenuFromCategory/>                  
                <div className={styles.cart}>
                    <Cart/>
                </div>
                
            </main> 
            <Footer/>
        </>
    );
}

export default MenuPage;