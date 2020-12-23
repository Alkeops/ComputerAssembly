import { Link } from "react-router-dom";
import product from "../../product";
import { useEffect, useState } from "react";
const Home = () => {
  const [id, setDatos] = useState([]);
  useEffect(() => {
    product.then((res) => {
      setDatos({ id: res[0].id, categoria: res[0].categoria });
    });
  }, []);
  return (
    <div className="home">
      {id.length !== 0 && (
        <Link to={`/${id.categoria}/${id.id}`} className="button">
          Iniciar
        </Link>
      )}
    </div>
  );
};

export default Home;
