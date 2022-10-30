import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch ,Link } from "react-router-dom";

//Import components
import Table from "./components/Table";
import CardDashboard from "./components/CardDashboard";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Almacen from "../src/pages/Almacen";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Error404 from "./pages/Error404";

function App() {
  return (
    <div className="App">
      {/*    <header className="App-header">

      </header> */}      
      <Router>
      <Navigation />
      <Sidebar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/almacen" exact component={Almacen} />
          <Route path="/layout" exact component={Layout} />
          <Route path="*" component={Error404}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
