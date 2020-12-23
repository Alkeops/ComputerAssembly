import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Categoria from "./components/Interfaz/Categoria/Categoria";
import Interfaz from "./components/Interfaz/Interfaz";
import Producto from "./components/Producto/Producto";

function App() {
  return (
    <>
      <Interfaz />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:categoria/:id" exact component={Producto} />
        <Route path="/:categoria" exact component={Categoria} />
      </Switch>
    </>
  );
}

export default App;
