import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div
      className="offcanvas offcanvas-start"
      data-bs-scroll="true"
      tabIndex="-1"
      id="offcanvasWithBothOptions"
      aria-labelledby="offcanvasWithBothOptionsLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
          Monaco
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="list-group">
          <NavLink
            exact
            to="/horario"
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Horario</h5>
              <small>
                <span className="badge bg-success">Hace 3 dias</span>
              </small>
            </div>
            <p className="mb-1">Horario de la semana</p>
            <small className="text-muted">y actividades de proveedores.</small>
          </NavLink>

          <NavLink
            exact
            to="/tareas"
            className="list-group-item list-group-item-action"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Tareas y actividades</h5>
              <small>
                <span className="badge bg-success">Hace 3 dias</span>
              </small>
            </div>
            <small className="text-muted">Tareas a realizar en sala.</small>
          </NavLink>
          <NavLink
            to="/layout"
            className="list-group-item list-group-item-action"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5>Layout</h5>
              <small>
                <span className="badge bg-success">Hace 3 dias</span>
              </small>
            </div>
            <p className="mb-1">Croquis de terminales en sala.</p>
            <small className="text-muted">And some muted small print.</small>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
