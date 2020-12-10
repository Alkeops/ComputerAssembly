import React, { useState, useEffect } from "react";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";

const Counter = ({ stock, initial }) => {
  const [counter, setCounter] = useState(initial);
  const [error, setError] = useState("");
  const suma = () => {
    if (counter === stock) {
      setError("No hay más slots disponibles para ram");
      return false;
    }
    setError("");
    setCounter(counter + 1);
  };
  const resta = () => {
    if (counter === 1) {
      setError("Es necesario al menos un modulo de ram");
      return false;
    }
    setError("");
    setCounter(counter - 1);
  };
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 1500);
    }
  }, [error, setError]);
  return (
    <div className="contar">
      {error && <span className="error">{error}</span>}
      <div className="botones">
        <BiPlusCircle onClick={suma} />
        <BiMinusCircle onClick={resta} />
      </div>
      <span className="cantidad">CANTIDAD: {counter}</span>
    </div>
  );
};

export default Counter;
