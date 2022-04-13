import React,{useState} from "react";
import styles from './bannerimage.module.css'
function BannerImage () {
      const [imgDetails] =useState({      
        imgSource:"https://cdn.foodaciously.com/static/recipes/ee9fd204-25cf-4e97-be5a-d7626470d420/easy-vegan-momos-recipe-7ab341154a5c13d6d9642300e7e2c92d-2560.jpg",
        itemHeader:"Punjabi Momos"});

       
    return (
        <img className={styles.banner_img} src={imgDetails.imgSource} alt="momos" /> 
    );
  }


export default BannerImage;