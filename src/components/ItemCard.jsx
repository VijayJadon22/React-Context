import React from "react";
import styles from "../styles.css";
import { useCartContext } from "../context/CartContext";

const ItemCard = ({ name, price,item }) => {
  const { handleAddItem, handleRemoveItem } = useCartContext();

  return (
    <div className="itemCard">
      <h2>{name}</h2>
      <h4>Price: {price} &#x20B9;</h4>
      <div>
        <button onClick={() => handleAddItem(item)} className="btn">
          Add
        </button>
        <button onClick={() => handleRemoveItem(item)} className="btn">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
