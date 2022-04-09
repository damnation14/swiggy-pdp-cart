
import React, { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Welcome from './Welcome'
import Restuarants from './Restuarants'
import Restuarant from './Restuarant'
import Offers from './Offers'
import useFetch from './api/api'
const OfferText=createContext()
function RestuarantsMain() {
    const {data :offerInfo,loading,error} = useFetch('http://localhost:8080/promotion')
    return (
       
            <Routes>
                <Route exact path='/restuarants' element={<Welcome/>}>
                    <Route  exact path='' element={<Restuarants/>}/>
                    <Route  path=':restuarantName' element={<OfferText.Provider value={offerInfo}><Restuarant /></OfferText.Provider>}/>
                    <Route  exact path='offers' element={<Offers offer={offerInfo}/>}/>
                </Route>             
            </Routes>
        
      );
}

export default RestuarantsMain;
export {OfferText};