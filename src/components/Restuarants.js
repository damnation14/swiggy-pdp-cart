import React, { useState } from 'react';
import restuarantsInfo from './data/restuarants.json';
import {Link} from 'react-router-dom'

function Restuarants() {

    const [restuarants]=useState(restuarantsInfo.restuarants)
    const restuarantsList= restuarants.map((restuarant)=>(
        <li key={restuarant.id}>
            <Link to={`${restuarant.displayName}`}>{restuarant.displayName}</Link>
        </li>
    ))
    return (
        <>
        
        <h2>Choose from the restuarants below!</h2>
        <ul>
            {restuarantsList}
        </ul>
        </>
     );
}

export default Restuarants;