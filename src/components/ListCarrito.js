import React from "react";

const ListCarrito = ({ categoria, nombre, precio, cantidad = 1 }) => {
  const precioMX = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN"
  }).format(precio);
  return (
    <div className="listCarrito">
      <span className="categoria">{categoria}</span>
      <span className="nombre">{nombre}</span>
      <div>
        <span className="cantidad">CANTIDAD: {cantidad}</span>
        <span className="precio">{precioMX}</span>
      </div>
    </div>
  );
};

export default ListCarrito;
