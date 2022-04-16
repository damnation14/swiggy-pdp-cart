import React from "react";
import styles from './menulistitem.module.css'
import VegNonVegImage from '../../atoms/LinkWithImage/LinkWithImage.js'

function MenuListItem ({menuItem}) {
           
    return (
      <div key={menuItem.id} className={styles.menu_item}>
            <VegNonVegImage imgUrl={menuItem.vegetarian?"https://i.pinimg.com/originals/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.png":"https://freesvg.org/img/1531813245.png"} imgAlt="vegNonVegLogo"/>
            <p>{menuItem.displayName}</p>
            <p>₹{menuItem.price}</p>
       </div>
    );
  }


export default MenuListItem;