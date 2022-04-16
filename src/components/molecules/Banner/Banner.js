import {  React } from 'react';
import styles from './banner.module.css'; 
import BannerImage from '../../atoms/LinkWithImage/LinkWithImage.js'
import BannerHeader from '../../atoms/HeaderTags/HeaderTags.js'
import {BANNER_IMAGE_URL} from './constants/constants.js';
function Header () {
   
   
        return (
            <div className={styles.banner}>
                    <BannerImage type="banner" imgUrl={BANNER_IMAGE_URL} imgAlt="food image"/>
                    <BannerHeader Tag='h1' type="banner" headerContent="Punjabi Momos"/>
            </div>
        );
    }

 
export default Header;