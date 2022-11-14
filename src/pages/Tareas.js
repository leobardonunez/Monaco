import React from "react";
import "../styles/tareas.css";
import Modal from "../components/Modal.js";
import Table from "../components/Table.js";
class Tareas extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <>
        <h3>Tareas y actividades</h3>
        <div className="container">
          <div className="row">
            <div className="col-2 es-btn">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Nueva tarea
              </button>
              <Modal
                title="Creando nueva tarea"
                elementNombre={
                  <>
                    <div className="row">
                      <div className="col">
                        <h6>Nombre:</h6>
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nombre de la actividad"
                        />
                      </div>
                    </div>
                    <br />
                  </>
                }
                elementDescripcion={
                  <>
                    <div className="row">
                      <div className="col">
                        <h6>Descripci&oacute;n:</h6>
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Breve descripci&oacute;n.."
                        />
                      </div>
                    </div>
                    <br />
                  </>
                }
                elementAsignar={
                  <>
                    <div className="row">
                      <div className="col">
                        <h6>Asignar</h6>
                      </div>
                      <div className="col">
                        <select className="form-select">
                          <option>Leobardo</option>
                          <option>Edgar</option>
                          <option>David</option>
                        </select>
                      </div>
                    </div>
                  </>
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Table 
              thNombreTarea={
                <>
                <th scope="col">Nombre</th>
                </>
              }
              thDescripcionTarea={
                <>
                <th scope="col">Descripci&oacute;n</th>
                </>
              }
              thAsignacion={
                <>
                <th scope="col">Asignado a</th>
                </>
              }
              thEstadoTarea={
                <>
                <th scope="col">Estado</th>
                </>
              }
              /* Body */
              tdNombreTarea={
                <>
                <td scope="col">Mantenimiento</td>
                </>
              }
              tdDescripcionTarea={
                <>
                <td scope="col">Sopletear terminales E-gaming de fumadores.</td>
                </>
              }
              tdAsignacionTarea={
                  <>
                <td scope="col">Leobardo</td>
                </>
              }
              tdEstadoTarea={
                <>
                <td scope="col"><span className="badge bg-success">Completado</span></td>
                </>
              }
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Tareas;
