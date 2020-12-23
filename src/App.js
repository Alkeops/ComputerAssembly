import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Interfaz from "./components/Interfaz/Interfaz";
import Producto from "./components/Producto/Producto";

function App() {
  return (
    <>
      <Interfaz></Interfaz>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:category/:id" exact component={Producto} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
