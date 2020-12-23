import Menu from "./Menu";
import Social from "./Social";
import Carrito from "./Carrito/Carrito";
import { Link } from "react-router-dom";

const Interfaz = () => {
  return (
    <>
      <Link className="logo" to="/">
        <h1>Computer Assembly</h1>
      </Link>
      <Menu />
      <Social />
      <Carrito />
    </>
  );
};

export default Interfaz;
