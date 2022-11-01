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
                <Link to="/" className="nav-link active" >Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link to="/almacen" className="nav-link">Almacen</Link>
              </li>
              <li className="nav-item">
                <Link to="user" className="nav-link" aria-current="page">User</Link>
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
                    <Link to="/terminales" className="dropdown-item">Terminales activas</Link>
                  </li>
                  <li>
                    <Link to="/incidencias" className="dropdown-item">Incidencias</Link>
                  </li>
                  <li>
                    <Link to="/reportes" className="dropdown-item">Reportes</Link>
                  </li>
                  <li></li>
                  <li>
                    <hr />
                    <Link to="/folios" className="dropdown-item">Folios</Link>
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
