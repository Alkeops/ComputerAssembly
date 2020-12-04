import { FaShoppingCart } from "react-icons/fa";
import { BiUpArrow } from "react-icons/bi";
import { useState } from "react";
import ListCarrito from "./ListCarrito";
const Carrito = () => {
  const [active, setActive] = useState(false);
  const categorias = [
    { categoria: "gabinete", nombre: "Termale43", precio: 25000 },
    { categoria: "ram", nombre: "Crucial2424", precio: 10000 },
    { categoria: "procesador", nombre: "i9 12th gen", precio: 95000 }
  ];
  return (
    <div className="carrito">
      <FaShoppingCart className="carrito__boton" />
      <div className="carrito__info" onClick={() => setActive(!active)}>
        <BiUpArrow className={active ? "arrowup-down arrowup" : "arrowup"} />
        <h6>TOTAL</h6>
        <h3>$130,000.00</h3>
      </div>
      <div
        className={
          active
            ? "carrito__desglose carrito__desglose-active"
            : "carrito__desglose"
        }
      >
        {categorias.map(({ categoria, nombre, precio }) => (
          <ListCarrito categoria={categoria} nombre={nombre} precio={precio} />
        ))}
      </div>
    </div>
  );
};

export default Carrito;
