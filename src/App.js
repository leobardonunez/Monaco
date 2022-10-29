import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import components
import Table from "./components/Table";
import CardDashboard from "./components/CardDashboard";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Almacen from "./components/Almacen";

function App() {
  return (
    <div className="App">
      {/*    <header className="App-header">

      </header> */}
      <Navigation />
      <Sidebar />

      <Router>
        <Switch>
          <Route path="/" exact>
            <section>
              <div className="container text-center" id="card">
                <div className="row">
                  <div className="col">
                    <CardDashboard />
                  </div>
                  <div className="col">
                    <CardDashboard />
                  </div>
                  <div className="col">
                    <CardDashboard />
                  </div>
                </div>
              </div>
              <div className="container">
                <Table />
              </div>
            </section>
          </Route>
          <Route path="/almacen" exact>
            <Almacen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
