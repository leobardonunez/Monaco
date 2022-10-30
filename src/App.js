import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

//Import components
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Routes from "./pages/Routes";

function App() {
  return (
    <div className="App">      
      <Router>
      <Navigation />
      <Sidebar />        
          <Routes/>             
      </Router>    
    </div>
  );
}

export default App;
