import React from "react";
import styles from "../styles.css";
import { useCartContext } from "../context/CartContext";

const Navbar = () => {
  const { total, item, toggleCart, clearCart } = useCartContext();

  return (
    <div className="nav">
      <h1>Total: &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div>
        <button onClick={toggleCart} className="btn clearBtn">
          Cart
        </button>
        <button onClick={clearCart} className="btn clearBtn">
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Navbar;
