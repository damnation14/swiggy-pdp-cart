import React, { useState } from 'react';
import {Outlet} from 'react-router-dom'
import Footer from './Footer'
import Brand from './BrandHeader'
import Banner from './Banner' 

function Welcome() {
    return (  
        <>
        <Brand />
            
                <Outlet/>
        
        <Footer/>
        </>
    );
}

export default Welcome ;
