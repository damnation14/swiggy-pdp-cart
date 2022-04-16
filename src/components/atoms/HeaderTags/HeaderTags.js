import React,{useState} from "react";
import styles from './headertags.module.css'
function BannerHeading ({Tag,type,headerContent}) {
      const [imgDetails] =useState({      
        imgSource:"https://cdn.foodaciously.com/static/recipes/ee9fd204-25cf-4e97-be5a-d7626470d420/easy-vegan-momos-recipe-7ab341154a5c13d6d9642300e7e2c92d-2560.jpg",
        itemHeader:"Punjabi Momos"});

       
    return (
        <Tag className={type==="banner"?styles.banner_header:""}>{headerContent}</Tag>
    );
  }


export default BannerHeading;