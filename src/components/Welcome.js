import React, { useState } from 'react';
import {Outlet} from 'react-router-dom'
import Footer from './Footer'
import Brand from './BrandHeader'
import Banner from './Banner' 

function Welcome() {
    return (  
        <>
        <Brand />
        <div className="banner">
                <Banner bannerImg="https://cdn.foodaciously.com/static/recipes/ee9fd204-25cf-4e97-be5a-d7626470d420/easy-vegan-momos-recipe-7ab341154a5c13d6d9642300e7e2c92d-2560.jpg"
                    bannerHeader="WELCOME TO SWIGGY!"/>
        </div>
            <main>
                <Outlet/>
            </main>
        <Footer/>
        </>
    );
}

export default Welcome ;
