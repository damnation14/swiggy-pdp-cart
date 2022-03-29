import React,{useState} from "react";

function ItemHeader () {
      const [imgDetails] =useState({      
        imgSource:"https://cdn.foodaciously.com/static/recipes/ee9fd204-25cf-4e97-be5a-d7626470d420/easy-vegan-momos-recipe-7ab341154a5c13d6d9642300e7e2c92d-2560.jpg",
        itemHeader:"Punjabi Momos"});

       
    return (
      <React.Fragment>
        <img src={imgDetails.imgSource} alt="momos" /> 
        <h1>{imgDetails.itemHeader}</h1>
       
      </React.Fragment>
    );
  }


export default ItemHeader;
