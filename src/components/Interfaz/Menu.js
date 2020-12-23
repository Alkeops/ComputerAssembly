import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="menu">
      <div
        className={!active ? "menu__boton" : "menu__boton menu__boton-active"}
        onClick={() => setActive(!active)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {active && <p className="cerrar">CERRAR</p>}
      <nav
        className={
          !active
            ? "menu__navegacion"
            : "menu__navegacion menu__navegacion-active"
        }
      >
        <Link to="/gabinete">
          <p>Gabinete</p>
        </Link>
        <Link to="/motherboard">
          <p>Tarjeta Madre</p>
        </Link>
        <Link to="/procesador">
          <p>Procesador</p>
        </Link>
        <Link to="/ram">
          <p>Memoria Ram</p>
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
