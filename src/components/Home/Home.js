import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Link to={"/procesador/i91295"} className="button">
        Iniciar
      </Link>
    </div>
  );
};

export default Home;
