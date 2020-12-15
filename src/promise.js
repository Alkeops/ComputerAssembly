const productos = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        categoria: "gabinete",
        nombre: "Termale43",
        precio: 25000,
        id: "TML43"
      },
      { categoria: "ram", nombre: "Crucial2424", precio: 10000, id: "CR2424" },
      {
        categoria: "procesador",
        nombre: "i9 12th gen",
        precio: 95000,
        id: "i91295"
      }
    ]);
  }, 2000);
});

export default productos;
