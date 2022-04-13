import {  React } from 'react';
import styles from './header.module.css'; 
import Logo from '../../atoms/Logo/Logo.js'
function Header () {
   
   
        return (
            <header className={styles.logo }>
                <Logo/>
            </header>
        );
    }

 
export default Header;