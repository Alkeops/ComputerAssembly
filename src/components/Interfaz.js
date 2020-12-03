import React, { useEffect } from "react";
import Menu from "./Menu";
import Social from "./Social";

const Interfaz = () => {
  useEffect(() => {
    const int = document.querySelector(".interfaz");
    let vh = window.innerHeight * 0.01;
    int.style.setProperty("--vh", `${vh}px`);
  }, []);
  return (
    <div className="interfaz">
      <h1>Computer Assembly</h1>
      <Menu />
      <Social />
    </div>
  );
};

export default Interfaz;
