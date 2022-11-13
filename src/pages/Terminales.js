import React from "react";
import ButtonAdd from "../components/ButtonAdd";
import Modal from "../components/Modal";
import Table from "../components/Table";
import "../styles/terminales.css";

class Terminales extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <>
        <h3>Terminales</h3>
        <div className="container">
          <div className="row">
            <div className="col-2">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Nueva terminal
              </button>
              <Modal
                title="Añadiendo nueva terminal"
                elementFabricante={
                  <>
                    <div className="row">
                      <div className="col">
                        <h6>Fabricante:</h6>
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nombre del fabricante"
                        />
                      </div>
                    </div>
                    <br />
                  </>
                }
                elementNombreTerminal={
                  <>
                    <div className="row">
                      <div className="col">
                        <h6>Nombre:</h6>
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nombre de terminal"
                        />
                      </div>
                    </div>
                    <br />
                  </>
                }
                elementEstadoTerminal={
                  <>
                    <div className="row">
                      <div className="col">
                        <h6>Estado:</h6>
                      </div>
                      <div className="col">
                        <select className="form-select">
                          <option>Activo</option>
                          <option>Inactivo</option>
                        </select>
                      </div>
                    </div>
                    <br />
                  </>
                }
                elementAreaTerminal={
                  <>
                    <div className="row">
                      <div className="col">
                        <h6>&Aacute;rea:</h6>
                      </div>
                      <div className="col">
                        <select className="form-select">
                          <option>Fumar</option>
                          <option>No fumar</option>
                        </select>
                      </div>
                    </div>
                    <br />
                  </>
                }
                elementProgramaTerminal={
                  <>
                    <div className="row">
                      <div className="col">
                        <h6>Programa:</h6>
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Programa de terminal"
                        />
                      </div>
                    </div>
                    <br />
                  </>
                }
                elementNumeroSerie={
                  <>
                    <div className="row">
                      <div className="col">
                        <h6>Serie:</h6>
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Numero serie"
                        />
                      </div>
                    </div>
                  </>
                }
              />
            </div>
            <Table
              thFabricante={
                <>
                  <th scope="col">Fabricante</th>
                </>
              }
              thNombreTerminal={
                <>
                  <th scope="col">Nombre</th>
                </>
              }
              thEstadoTerminal={
                <>
                  <th scope="col">Estado</th>
                </>
              }
              thAreaTerminal={
                <>
                  <th scope="col">&Aacute;rea</th>
                </>
              }
              thPrograma={
                <>
                  <th scope="col">Programa</th>
                </>
              }
              thNumeroSerie={
                <>
                  <th scope="col">Numero de serie</th>
                </>
              }
              thOptions={
                <>
                  <th scope="col">Opciones</th>
                </>
              }
              /* Body */
              tdFabricante={
                <>
                  <td scope="col">Bally</td>
                </>
              }
              tdNombre={
                <>
                  <td scope="col">1001-Bally</td>
                </>
              }
              tdEstado={
                <>
                  <td scope="col">Activo</td>
                </>
              }
              tdArea={
                <>
                  <td scope="col">No fumar</td>
                </>
              }
              tdPrograma={
                <>
                  <td scope="col">Spirit</td>
                </>
              }
              tdSerie={
                <>
                  <td scope="col">B130480437</td>
                </>
              }
              tdOptions={
                <>
                  <td>
                    <div className="col-2 d-grid gap-2 d-md-flex justify-content-start">
                      <button type="button" className="btn btn-warning">
                        <i class="bi bi-pencil"></i>
                      </button>
                      <button type="butotn" className="btn btn-danger">
                        <i class="bi bi-trash2"></i>
                      </button>
                    </div>
                  </td>
                </>
              }
            />
          </div>
        </div>
      </>
    );
  }
}

export default Terminales;
