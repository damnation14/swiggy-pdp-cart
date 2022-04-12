
import React, { createContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Welcome from './Welcome'
import Restuarants from './Restuarants'
import Restuarant from './Restuarant'
import Offers from './Offers'
import {useSelector,useDispatch} from 'react-redux' 
import {fetchOffer} from '../redux/promotion/promotionAction'
const OfferText=createContext()
function RestuarantsMain() {
    const offerInfo= useSelector(state => state.offer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchOffer("http://localhost:8080/promotion"))
    },[dispatch])

    return (
       
            <Routes>
                <Route exact path='/restuarants' element={<Welcome/>}>
                    <Route  exact path='' element={<Restuarants/>}/>
                    <Route  path=':restuarantName' element={<Restuarant/> }/>
                    <Route  exact path='offers' element={<Offers />}/>
                </Route>             
            </Routes>
        
      );
}

export default RestuarantsMain;
export {OfferText};