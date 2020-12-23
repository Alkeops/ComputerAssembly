import { useState } from "react";

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
        <p>Gabinete</p>
        <p>Tarjeta Madre</p>
        <p>Procesador</p>
        <p>Memoria Ram</p>
      </nav>
    </div>
  );
};

export default Menu;
