import { useEffect, useState } from "react";
import { GrLike } from "react-icons/gr";
import product from "../../product";
import FullSpecs from "./FullSpecs";

const Producto = ({ match }) => {
  const { id, categoria } = match.params;
  const [datos, setDatos] = useState({});
  const [abierto, setAbierto] = useState(false);
  useEffect(() => {
    product.then((res) => {
      const producto = res.find((prod) => prod.id === id);
      setDatos(producto);
    });
  }, [id]);
  let { nombre, meGusta, precio, vendidos } = datos;
  const handleCerrar = () => setAbierto(!abierto);
  return (
    <div className="producto">
      <h1 className="categoria">{categoria}</h1>
      <div className="foto">
        <img
          src="https://www.intel.la/content/dam/products/hero/foreground/badge-corei9-10thgen-rwd.png"
          alt=""
        />
      </div>
      <div className="contenedor">
        <div className="datos">
          <h2>{nombre}</h2>
          <h2 className="precio">${precio}.00</h2>
          <div className="likes">
            <h3>
              {meGusta} <GrLike />
            </h3>
            <h3>
              {vendidos} <span>vendidos</span>
            </h3>
          </div>
        </div>
        <button className="button" onClick={handleCerrar}>
          Full Specs
        </button>
        <button className="button" style={{ marginLeft: 10 }}>
          Seleccionar
        </button>
      </div>
      {abierto && <FullSpecs datos={datos} cerrar={handleCerrar} />}
    </div>
  );
};

export default Producto;
