const product = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
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
      },
      {
        categoria: "procesador",
        provedor: "intel",
        origen: "china",
        frecuencia: "3200mhz",
        vendidos: 327,
        meGusta: 37,
        potencia: "36vw",
        compatibilidad: "MAFFES2031",
        proximo: "ALSDDEES",
        nombre: "i9 10th gen",
        precio: 55000,
        id: "i912135",
      },
      {
        categoria: "procesador",
        provedor: "intel",
        origen: "china",
        frecuencia: "3200mhz",
        vendidos: 327,
        meGusta: 37,
        potencia: "36vw",
        compatibilidad: "MAFFES2031",
        proximo: "ALSDDEES",
        nombre: "i9 6th gen",
        precio: 45000,
        id: "i91135",
      },
      {
        categoria: "procesador",
        provedor: "intel",
        origen: "china",
        frecuencia: "3200mhz",
        vendidos: 327,
        meGusta: 37,
        potencia: "36vw",
        compatibilidad: "MAFFES2031",
        proximo: "ALSDDEES",
        nombre: "i9 7th gen",
        precio: 25000,
        id: "i92335",
      },
      {
        categoria: "procesador",
        provedor: "intel",
        origen: "china",
        frecuencia: "3200mhz",
        vendidos: 327,
        meGusta: 37,
        potencia: "36vw",
        compatibilidad: "MAFFES2031",
        proximo: "ALSDDEES",
        nombre: "i9 8th gen",
        precio: 15000,
        id: "i91335",
      },
    ]);
  }, 2000);
});

export default product;
