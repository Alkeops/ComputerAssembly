import { useEffect } from "react";
import Menu from "./Menu";
import Social from "./Social";
import Carrito from "./Carrito";
const Interfaz = () => {
  useEffect(() => {
    const int = document.querySelector(".interfaz");
    let vh = window.innerHeight * 0.01;
    int.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      vh = window.innerHeight * 0.01;
      int.style.setProperty("--vh", `${vh}px`);
    });
  }, []);
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
