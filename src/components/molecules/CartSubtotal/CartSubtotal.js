import React from "react";
import styles from './cartsubtotal.module.css'

function CartSubtotal ({subTotal}) {
    
    return (
      <div className={styles.subtotal}>
               <h3>Subtotal</h3>
               <p>₹{subTotal}</p>
      </div>
    );
  }


export default CartSubtotal;