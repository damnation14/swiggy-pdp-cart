import React from "react";
import styles from './textlist.module.css'

function CategoryListItem ({id,textListContent,type,category,handleMenuFromCategory,}) {
           
    return (
      <li  id={id} className={`${styles.category_item}`} onClick={()=>handleMenuFromCategory(id)}>
            {textListContent}
            
        </li>
    );
  }


export default CategoryListItem;