import React from "react";
import styles from './cartsubtotal.module.css'

function CartSubtotal ({cartInfo}) {
           
    return (
      <div className={styles.subtotal}>
               <h3>Subtotal</h3>
               <p>₹{cartInfo.subTotal}</p>
      </div>
    );
  }


export default CartSubtotal;