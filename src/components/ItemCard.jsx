import React from "react";
import styles from "../styles.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemCard = ({ name, price }) => {
  const { total, setTotal, item, setItem } = useContext(CartContext);

  const handleAddItem = () => {
    setTotal(total + price);
    setItem(item + 1);
  };
  const handleRemoveItem = () => {
    if (total > 0 && item > 0) {
      setTotal(total - price);
      setItem(item - 1);
    }
  };

  return (
    <div className="itemCard">
      <h2>{name}</h2>
      <h4>Price: {price} &#x20B9;</h4>
      <div>
        <button onClick={handleAddItem} className="btn">
          Add
        </button>
        <button onClick={handleRemoveItem} className="btn">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
