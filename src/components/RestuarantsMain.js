
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Welcome from './Welcome'
import Restuarants from './Restuarants'
import Restuarant1 from './Restuarant1'
import Restuarant2 from './Restuarant2'

function RestuarantsMain() {
   
    return (
       
            <Routes>
                <Route exact path='/restuarants' element={<Welcome/>}>
                    <Route exact path='' element={<Restuarants/>}/>
                    <Route exact path='Smoor' element={<Restuarant1/>}/>
                    <Route  exact path='Bakehouse' element={<Restuarant2/>}/> 
                </Route>
                
            </Routes>
        
      );
}

export default RestuarantsMain;