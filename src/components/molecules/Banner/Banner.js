import {  React } from 'react';
import styles from './banner.module.css'; 
import BannerImage from '../../atoms/BannerImage/BannerImage.js'
import BannerHeader from '../../atoms/BannerHeader/BannerHeader.js'
function Header () {
   
   
        return (
            <div className={styles.banner}>
                    <BannerImage/>
                    <BannerHeader/>
            </div>
        );
    }

 
export default Header;