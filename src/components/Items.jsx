import React from "react";
import ItemCard from "./ItemCard";
import { useCartContext } from "../context/CartContext";

const Items = () => {
  const getContext = useCartContext();
  const { data } = getContext;
  return (
    <div className="items-container">
      {data.map((item, index) => (
        <ItemCard name={item.name} price={item.price} />
      ))}
    </div>
  );
};

export default Items;
