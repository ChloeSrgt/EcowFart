/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from "react";

function CountDown() {
  const [ count, setCount ] = useState(10)
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
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default CountDown;