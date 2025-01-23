import React from "react";
import styles from "../styles.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { total, item } = useContext(CartContext);
  return (
    <div className="nav">
      <h1>Total: &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
    </div>
  );
};

export default Navbar;
