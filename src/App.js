import React from 'react';
import BrandHeader from './components/BrandHeader.js';
import Banner from './components/Banner.js'; 
import Footer from './components/Footer.js'

import Cart from './components/Cart.js'
import CategoryMenu from './components/HandleCategoriesMenu.js'
import {BrowserRouter} from 'react-router-dom';
import RestuarantsMain from './components/RestuarantsMain';
function App() {
    
        // return (
        //     <React.Fragment>
        //         <BrandHeader/>
        //         <div className="banner">
        //             <Banner bannerImg="https://cdn.foodaciously.com/static/recipes/ee9fd204-25cf-4e97-be5a-d7626470d420/easy-vegan-momos-recipe-7ab341154a5c13d6d9642300e7e2c92d-2560.jpg"
        //          bannerHeader="Punjabi momos!"/>
        //         </div>
        //         <main className="row">
        //             <CategoryMenu/>                   
        //             <div className="cart col-3">
        //                 <Cart/>
        //             </div>
                    
        //         </main>
        //         <Footer/>
        //     </React.Fragment>
        // );

        return (
            <BrowserRouter>
                <RestuarantsMain />
            </BrowserRouter>
        );
    }

 
export default App ;