/*import React , {Component} from "react";*/
import React from "react";

/*css*/
import "../styles/table.css";

class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    user: true,
  };
  render() {
    return (
      <div className="table-responsive">
        <table className="table table-primary table-striped table-hover table-sm">
          <thead>
            <tr>
              {/* Elementos de componente terminales */}
              {this.props.thFabricante}
              {this.props.thNombreTerminal}
              {this.props.thEstadoTerminal}
              {this.props.thAreaTerminal}
              {this.props.thPrograma}
              {this.props.thNumeroSerie}              
              {this.state.user ? this.props.thOptions : <></>}
              {/* Elementos de componente tareas */}
              {this.props.thNombreTarea}
              {this.props.thDescripcionTarea}
              {this.props.thAsignacion}
              {this.props.thEstadoTarea}
              {this.state.user ? this.props.thOptionsTarea : <></>}              
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* Elementos de componente terminales */}
              {this.props.tdFabricante}
              {this.props.tdNombre}
              {this.props.tdEstado}
              {this.props.tdArea}
              {this.props.tdPrograma}
              {this.props.tdSerie}
              {this.state.user ? this.props.tdOptions : <></>}              
              {/* Elementos de componente tareas */}
              {this.props.tdNombreTarea}
              {this.props.tdDescripcionTarea}
              {this.props.tdAsignacionTarea}
              {this.props.tdEstadoTarea}
              {this.state.user ? this.props.tdOptionsTarea : <></>}              
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
