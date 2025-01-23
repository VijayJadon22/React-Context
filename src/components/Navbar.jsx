import React from "react";
import styles from "../styles.css";
import { useCartContext } from "../context/CartContext";

const Navbar = () => {
  const  getContext  = useCartContext();

  return (
    <div className="nav">
      <h1>Total: &#x20B9; {getContext.total}</h1>
      <h1>Items: {getContext.item}</h1>
      <div>
        <button onClick={getContext.toggleCart} className="btn clearBtn">
          Cart
        </button>
        <button onClick={getContext.clearCart} className="btn clearBtn">
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Navbar;
