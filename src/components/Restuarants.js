import React, { useState } from 'react';
import restuarantsInfo from '../data/restuarants.json';
import {Link} from 'react-router-dom'
import Banner from './Banner'
function Restuarants() {

    const [restuarants]=useState(restuarantsInfo.restuarants)
    const restuarantsList= restuarants.map((restuarant)=>(
        <li key={restuarant.id}>
            <Link className='text-link' to={`:${restuarant.displayName}`}>{restuarant.displayName}</Link>
        </li>
    ))
    return (
        <>
        <div className="banner">
                    <Banner bannerImg="https://cdn.foodaciously.com/static/recipes/ee9fd204-25cf-4e97-be5a-d7626470d420/easy-vegan-momos-recipe-7ab341154a5c13d6d9642300e7e2c92d-2560.jpg"
                 bannerHeader="Welcome to Swiggy!!"/>
        </div>
        <main>
            <h2>Choose from the restuarants below!</h2>
            <ul>
                {restuarantsList}
            </ul>
        </main>
        </>
     );
}

export default Restuarants;