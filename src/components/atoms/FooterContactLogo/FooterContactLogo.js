import {  React } from 'react';
import styles from './footercontactlogo.module.css'; 
function FooterContactLogo ({id,contactUrl,contactImgUrl}) {
   
   
        return (
            <li key={id}>
                <a href={contactUrl}>
                    <img className={styles.contact_logo} src={contactImgUrl} alt="FB logo"/>
                </a>
            </li>
        );
    }

 
export default FooterContactLogo;