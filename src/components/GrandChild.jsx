import React from "react";
import { useContext } from "react";
import { ColorContext } from "../context/ColorContext";

const GrandChild = () => {
  //   const value = useContext(ColorContext);
  //   console.log("value is: ", value);
  return (
    <ColorContext.Consumer>
      {(value) => (
        <p style={{ color: value, fontSize: "20px", fontWeight: "700" }}>
          Color is {value}
        </p>
      )}
    </ColorContext.Consumer>
  );
};

export default GrandChild;
