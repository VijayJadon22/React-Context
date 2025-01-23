import React from "react";
import ItemCard from "./ItemCard";

const Items = () => {
  return (
    <div className="items-container">
      <ItemCard name={"Apple"} price={200} />
      <ItemCard name={"Mango"} price={100} />
      <ItemCard name={"Orange"} price={50} />
      
    </div>
  );
};

export default Items;
