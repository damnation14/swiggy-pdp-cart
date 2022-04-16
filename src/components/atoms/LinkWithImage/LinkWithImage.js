import {  React } from 'react';
import styles from './logo.module.css'; 
function LinkWithImage ({imgUrl,imgAlt,type}) {
   
        
        return (
                <img className={type==="banner"?styles.banner_img:styles.logo_img} src={imgUrl} alt={imgAlt} ></img>
        );
    }

 
export default LinkWithImage;