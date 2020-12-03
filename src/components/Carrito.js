import { FaShoppingCart } from "react-icons/fa";
import { BiUpArrow } from "react-icons/bi";
import { useState } from "react";
const Carrito = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="carrito">
      <FaShoppingCart className="carrito__boton" />
      <div className="carrito__info" onClick={() => setActive(!active)}>
        <BiUpArrow className={active ? "arrowup-down arrowup" : "arrowup"} />
        <h2>$327,000.00</h2>
      </div>
      <div
        className={
          active
            ? "carrito__desglose carrito__desglose-active"
            : "carrito__desglose"
        }
      ></div>
    </div>
  );
};

export default Carrito;
