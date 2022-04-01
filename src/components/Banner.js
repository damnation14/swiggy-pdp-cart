import React,{useState} from "react";

function Banner (props) {
      const [bannnerDetails] =useState({      
        bannerImg:props.bannerImg,
        bannerHeader:props.bannerHeader}
        );

       
    return (
      <React.Fragment>
        <img src={bannnerDetails.bannerImg} alt="momos" /> 
        <h1>{bannnerDetails.bannerHeader}</h1>
       
      </React.Fragment>
    );
  }


export default Banner;
