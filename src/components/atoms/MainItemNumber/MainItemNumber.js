import React from "react";
import styles from './mainitemnumber.module.css'

function MainItemNumber ({itemNumber}) {
      
       
    return (
      <p className={styles.main_item_number}>ITEMS {itemNumber}</p>
    );
  }


export default MainItemNumber;