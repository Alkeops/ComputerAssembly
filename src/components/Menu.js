import { useState } from "react";

const Menu = () => {
  const [abierto, setAbierto] = useState(false);
  return (
    <div className="menu">
      <div
        className={!abierto ? "menu__boton" : "menu__boton menu__boton-active"}
        onClick={() => setAbierto(!abierto)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {abierto && <p className="cerrar">CERRAR</p>}
      <nav
        className={
          !abierto
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
