import Menu from "./Menu";
import Social from "./Social";
import Carrito from "./carrito/Carrito";
const Interfaz = () => {
  return (
    <div className="interfaz">
      <h1>Computer Assembly</h1>
      <Menu />
      <footer className="interfaz__footer">
        <Social />
        <Carrito />
      </footer>
    </div>
  );
};

export default Interfaz;
