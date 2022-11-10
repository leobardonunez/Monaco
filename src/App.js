import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

//Import components
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Routes from "./pages/Routes";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navigation />
          <Sidebar />
          <Routes />
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
