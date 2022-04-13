import React from "react";
import styles from './cartlistitem.module.css'

function CartListItem ({cartItem}) {
           
    return (
      <div key={cartItem.id} className={styles.cart_list_item}>
                <p>{cartItem.name}</p>
                <p>{cartItem.quantity}</p>  
      </div>
    );
  }


export default CartListItem;