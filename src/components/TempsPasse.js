import React, { useState, useEffect } from "react";

export default function TempsPasse() {
  const [ secondes, setSecondes ] = useState(0);
  const [ minutes, setMinutes ] = useState(0);
  const [ heures, setHeures ] = useState(0);
  useEffect(() => {
    let timer = null;
    if (secondes >= 0) {
      timer = setTimeout(() => {
        setSecondes(secondes + 1);
        if (secondes === 60 ) {
            setMinutes(minutes + 1)
            setSecondes(0)
        }
        if (minutes === 60) {
            setHeures(heures + 1)
            setMinutes(0)
        }
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div>
      <h1>La quantité de Méthane produite par les vaches en France durant le temps de navigation : {heures}:{minutes}:{secondes}</h1>
    </div>
  );
}