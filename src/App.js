import React from 'react';
import Brand from './components/brandHeader.js';
import ItemHeader from './components/itemHeader.js'; 
import Footer from './components/brandFooter.js'

import Cart from './components/cart.js'
import CategoryMenu from './components/handleCategoriesMenu.js'
function App() {
    
        return (
            <React.Fragment>
                <Brand/>
                <div className="title">
                    <ItemHeader/>
                </div>
                <main className="row">
                    <CategoryMenu/>                   
                    <div className="cart col-3">
                        <Cart/>
                    </div>
                    
                </main>
                <Footer/>
            </React.Fragment>
        );
    }

 
export default App ;