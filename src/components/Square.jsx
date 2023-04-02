import React from "react";
import { useState } from "react";
const Square = ({ value, onSquareClick }) => {
  const [val, setVal] = useState("");

  const handleClick = () => {
    console.log("clicked");
    setVal(val===""?'X':'')
  };
  return (
    <div className="square" onClick={onSquareClick}>
      {value}
    </div>
  );
};

export default Square;
