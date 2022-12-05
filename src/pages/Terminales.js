import React from "react";
import "../styles/terminales.css";

//Components
import OptionsTable from "../components/table-component/OptionsTable";




const Terminales = (props) => {
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
              data-bs-target="#modalTerminales"
            >
              Nueva terminal
            </button>            

            <div
              className="modal fade"
              id="modalTerminales"
              aria-labelledby="modalTerminalesLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
              <form>
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="modalTerminalesLabel">
                      Añadir nueva terminal
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    {/* Elementos componente terminales */}
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
                    <div className="row">
                      <div className="col">
                        <h6>Estado:</h6>
                      </div>
                      <div className="col">
                      <input                    
                       type="text"
                       className="form-control"
                       placeholder="Estado de terminal"
                       />
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col">
                        <h6>&Aacute;rea:</h6>
                      </div>
                      <div className="col">
                       <input                   
                       type="text"
                       className="form-control"
                       placeholder="Area de sala"
                       />
                      </div>
                    </div>
                    <br />
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
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-success">
                      <i className="bi bi-check2"></i>
                    </button>
                  </div>
                </div>
                </form>
              </div>
            </div>
            {/* Modal */}
          </div>
          <div className="table-responsive">
            <table className="table table-primary table-striped table-hover table-sm">
              <thead>
                <tr>
                  <th scope="col">Fabricante</th>
                  <th scope="col">Home</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Area</th>
                  <th scope="col">Programa</th>
                  <th scope="col">Serie</th>
                  <th scope="col">Options</th>
                </tr>
              </thead>
              <tbody>                
                  <tr>
                    <td scope="col"></td>
                    <td scope="col"></td>
                    <td scope="col">
                      <span className="badge bg-success">
                       
                      </span>
                    </td>
                    <td scope="col"></td>
                    <td scope="col"></td>
                    <td scope="col"></td>
                    <td>
                      <OptionsTable />
                    </td>
                  </tr>                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terminales;
