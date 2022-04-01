import React, { useState } from 'react';
import {useParams} from 'react-router-dom'

function Restuarant1() {
    
    const {name}= useParams()
    console.log(name)
    return ( 
        <>
            <h1>Smoor</h1>
        </>
       
     );
}

export default Restuarant1 ;