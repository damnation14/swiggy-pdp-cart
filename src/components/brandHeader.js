
import {  React } from 'react';
import {Link} from 'react-router-dom' 

function BrandHeader(props) {
   
    
        return (
           
            <header className="brand-header">
                <Link to="/restuarants"><img src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg" alt="Swiggy logo"></img></Link>
                <div className="horizontal-flex" >
                <Link className='text-link' to="offers"><p >Offers</p></Link>
                    <div className="horizontal-flex">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="Swiggy logo"></img>
                        <p>{props.user.firstName} {props.user.lastName}</p>
                    </div>
                </div>
            </header>
            
        );
    }

 
export default BrandHeader;
