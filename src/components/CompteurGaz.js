/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from "react";


export default function CompteurGaz() {
  const [ grammes, setGrammes ] = useState(0)
  const [ kilos, setKilos ] = useState(0)
  useEffect(() => {
    let quantiteParSeconde = 8.333;
    let timer = null;
    if (grammes >= 0) {
      timer = setTimeout(() => {
        setGrammes(grammes + quantiteParSeconde);
        if (grammes >= 1000) {
          setKilos(kilos + 1)
          setGrammes(0)
        }
      }, 10000000);
    }
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div>
      <p>{Math.trunc(kilos)}.{Math.trunc(grammes)}Kg</p>
    </div>
  );
}

