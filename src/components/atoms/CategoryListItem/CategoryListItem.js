import React from "react";
import styles from './categorylistitem.module.css'

function CategoryListItem ({category,handleMenuFromCategory,index}) {
           
    return (
      <li key={category.id} id={category.id} className={`${styles.category_item}`} onClick={()=>handleMenuFromCategory(category.id)}>
            {category.displayName}
            
        </li>
    );
  }


export default CategoryListItem;