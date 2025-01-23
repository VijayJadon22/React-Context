import React from "react";
import styles from "../styles.css";
import { useCartContext } from "../context/CartContext";

const ItemCard = ({ name, price }) => {
  const getContext = useCartContext();
  console.log(getContext);

  return (
    <div className="itemCard">
      <h2>{name}</h2>
      <h4>Price: {price} &#x20B9;</h4>
      <div>
        <button onClick={() => getContext.handleAddItem(price)} className="btn">
          Add
        </button>
        <button
          onClick={() => getContext.handleRemoveItem(price)}
          className="btn"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
