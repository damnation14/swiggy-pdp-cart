import React, { useState } from 'react';
import Banner from './Banner'
import useFetch from './api/api'
import OfferItemsList from './OfferItemsList'
function Offers(props) {

    const {data :menuInfo,loading,error} = useFetch('http://localhost:8080/menu-items')
    

    return ( 
        loading?
        <>
        <div className="banner">
                    <Banner bannerImg="https://razorpay.com/blog-content/uploads/2020/03/Offers.png"
                 bannerHeader={props.offer.offerText}/>
        </div>
        <main>
            <h2>Offers!</h2>
            <div className="offer-row">
                
                         <OfferItemsList menuInfo={menuInfo}/>
    
            </div>
        </main>
        </>:null
     );
}

export default Offers;