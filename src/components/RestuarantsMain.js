
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Welcome from './Welcome'
import Restuarants from './Restuarants'
import Restuarant from './Restuarant'


function RestuarantsMain() {
   
    return (
       
            <Routes>
                <Route exact path='/restuarants' element={<Welcome/>}>
                    <Route  exact path='' element={<Restuarants/>}/>
                    <Route  path=':restuarantName' element={<Restuarant/>}/>
                </Route>
                
            </Routes>
        
      );
}

export default RestuarantsMain;