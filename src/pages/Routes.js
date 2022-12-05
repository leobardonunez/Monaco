import React from "react";
import { Switch, Route } from "react-router-dom";

//Import components
import Dashboard from "./Dashboard";
import Almacen from "./Almacen";
import Layout from "./Layout";
import Error404 from "./Error404";
import Terminales from "./Terminales";
import User from "./User";
import Tareas from "./Tareas";
import Horario from "./Horario";

const Routes = (props) => {
  return (
    <>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/almacen" exact component={Almacen} />
      <Route path="/layout" exact component={Layout} />
      <Route path="/terminales" exact component={Terminales} />
      <Route path="/user" exact component={User} />
      <Route path="/tareas" exact component={Tareas} />
      <Route path="/horario" exact component={Horario} />
      <Route path="*" component={Error404} />
    </Switch>
    </>
  );
};

export default Routes;
