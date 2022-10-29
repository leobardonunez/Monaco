import React from "react";
import { Link } from "react-router-dom";




class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a
            className="navbar-brand"            
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            Monaco
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" >
                  Dashboard
                </a>               
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" >
                  Almacen
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >
                  User
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Diario
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" >
                      Terminales activas
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" >
                      Incidencias
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" >
                      Reportes
                    </a>
                  </li>
                  <li></li>
                  <li>
                    <hr/>
                    <a className="dropdown-item" >
                      Folios
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
