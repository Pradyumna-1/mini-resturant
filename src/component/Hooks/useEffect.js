import React, { useState, useEffect } from "react";
import "./style.css";

const UseEffect = () => {
  // const initialData = 0;
  const [myNum, setMyNum] = React.useState(0);

  useEffect(() => {
    document.title = `Chats(${myNum})`;
  });

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div className="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
      </div>
    </>
  );
};
export default UseEffect;
