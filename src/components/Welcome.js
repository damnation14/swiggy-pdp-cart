import React, { useState } from 'react';
import {Outlet} from 'react-router-dom'
import Footer from './Footer'
import BrandHeader from './BrandHeader'
import useFetch from './api/api';

function Welcome() {

    const {data :userInfo,loading,error} = useFetch('http://localhost:8080/user')
    return (
        
        loading?
        <>
        <BrandHeader user={userInfo}/>
            
                <Outlet/>
        
        <Footer/>
        </>:null
    );
}

export default Welcome ;
