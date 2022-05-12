/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from "react";
import "./style/countdown.css";

function CountDown() {
  const [ count, setCount ] = useState("")
  useEffect(() => {
    let timer = null;
    if (count > 0) {
      timer = setTimeout(() => {
        setCount(count + 1);
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className={count <= 3 ? "timeUp" && "pulse" : "countdown"}>
      <h1>{count}</h1>
    </div>
  );
}

export default CountDown;