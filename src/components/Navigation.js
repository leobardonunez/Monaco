import React from "react";
import { Link, NavLink } from "react-router-dom";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions">Monaco</Link>
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
                <NavLink exact to="/" className="nav-link">Dashboard</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/almacen" className="nav-link">Almacen</NavLink>
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
                    <Link to="/terminales" className="dropdown-item">Terminales</Link>
                  </li>
                  <li>
                    <Link to="/incidencias" className="dropdown-item">Incidencias</Link>
                  </li>
                  <li>
                    <Link to="/reportes" className="dropdown-item">Reportes</Link>
                  </li>
                  <li>
                    <Link to="/info" className="dropdown-item">Info</Link>
                  </li>
                  <li>
                    <Link to="/proveedores" className="dropdown-item">Proveedores</Link>
                  </li>
                  <li>
                    <hr />
                    <Link to="/folios" className="dropdown-item">Folios</Link>
                  </li>
                </ul>
              </li>              
              <li className="nav-item">
                <NavLink exact to="/user" className="nav-link" aria-current="page">User</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
