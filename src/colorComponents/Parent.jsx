import React, { useState } from "react";
import Child from "./Child";
import { ColorContext } from "../context/ColorContext";

const Parent = () => {
  const [color, setColor] = useState("black");
  console.log("colors is: ", color);
  return (
    <ColorContext.Provider value={color}>
      <div>
        <h1>Pick a color</h1>
        <input onChange={(e) => setColor(e.target.value)} type="color" />
        <Child  />
      </div>
    </ColorContext.Provider>
  );
};

export default Parent;
