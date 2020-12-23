const FullSpecs = ({ datos, cerrar }) => {
  return (
    <div className="full-specs">
      <h1>Categoria: {datos.categoria}</h1>
      <h1>Compatibilidad: {datos.compatibilidad}</h1>
      <h1>frecuencia: {datos.frecuencia}</h1>
      <h1>id: {datos.id}</h1>
      <h1>nombre: {datos.nombre}</h1>
      <h1>origen: {datos.origen}</h1>
      <h1>potencia: {datos.potencia}</h1>
      <h1>provedor: {datos.provedor}</h1>
      <h1 className="button" onClick={cerrar}>
        Cerrar
      </h1>
    </div>
  );
};

export default FullSpecs;
