import {  React } from 'react';
import styles from './logo.module.css'; 
function LinkWithImage ({imgUrl,imgAlt}) {
   
   
        return (
                <img className={styles.logo_img} src={imgUrl} alt={imgAlt} ></img>
        );
    }

 
export default LinkWithImage;