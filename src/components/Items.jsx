import React from "react";
import ItemCard from "./ItemCard";
import { useCartContext } from "../context/CartContext";

const Items = () => {
  const { data } = useCartContext();
  return (
    <div className="items-container">
      {data.map((item) => (
        <ItemCard key={item.id} name={item.name} price={item.price} item={item} />
      ))}
    </div>
  );
};

export default Items;
