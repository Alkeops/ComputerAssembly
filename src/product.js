const product = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      categoria: "procesador",
      provedor: "intel",
      origen: "china",
      frecuencia: "33200mhz",
      vendidos: 327,
      meGusta: 37,
      potencia: "36vw",
      compatibilidad: "MAFFES2031",
      proximo: "ALSDDEES",
      nombre: "i9 12th gen",
      precio: 95000,
      id: "i91295",
    });
  }, 2000);
});

export default product;
