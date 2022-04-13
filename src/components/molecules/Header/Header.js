import {  React } from 'react';
import styles from './header.module.css'; 
import Logo from '../../atoms/LinkWithImage/LinkWithImage.js'
function Header () {
   
   
        return (
            <header className={styles.logo }>
                <Logo imgUrl={"https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"} imgAlt={"Swiggy logo"}/>
            </header>
        );
    }

 
export default Header;