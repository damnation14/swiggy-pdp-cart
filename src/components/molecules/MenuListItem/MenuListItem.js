import React from "react";
import styles from './menulistitem.module.css'

function MenuListItem ({menuItem}) {
           
    return (
      <div key={menuItem.id} className={styles.menu_item}>
            <img src={ menuItem.vegetarian?"https://i.pinimg.com/originals/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.png":"https://freesvg.org/img/1531813245.png" } alt="veg/nonveg"></img>
            <p>{menuItem.displayName}</p>
            <p>₹{menuItem.price}</p>
       </div>
    );
  }


export default MenuListItem;