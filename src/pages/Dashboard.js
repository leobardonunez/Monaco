import React from "react";

import Table from "../components/Table";
import "../styles/card-dashboard.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    session: true,
  };
  render() {
    return (
      <section>
        {this.state.session ? (
          <div className="container text-center" id="card">
            <div className="row">
              <div className="col">
                <div className="card text-center shadow-lg">
                  <div className="card-body">
                    <h5 className="card-title">Terminales Activas</h5>
                    <p className="card-text">89</p>                    
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card text-center shadow-lg">
                  <div className="card-body">
                    <h5 className="card-title">Terminales Inactivas</h5>
                    <p className="card-text">1</p>                    
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card text-center shadow-lg">
                  <div className="card-body">
                    <h5 className="card-title">Terminales reportadas</h5>
                    <p className="card-text">21</p>                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}        
        <div className="container">
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
                <td scope="col">
                  <span className="badge bg-success">Activo</span>
                </td>
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
          />
        </div>
      </section>
    );
  }
}

export default Dashboard;
