import React from "react";
import styles from './text.module.css'

function MainItemNumber ({type,textContent}) {
      
       
    return (
      <p className={styles.main_item_number}>{textContent}</p>
    );
  }


export default MainItemNumber;