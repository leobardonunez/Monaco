import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <>
       {/*  <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button> */}

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  {this.props.title}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* Elementos componente tareas */}
                {this.props.elementNombre}                                
                {this.props.elementDescripcion}
                {this.props.elementAsignar}
                {/* Elementos componente terminales */}
                {this.props.elementFabricante}
                {this.props.elementNombreTerminal}
                {this.props.elementEstadoTerminal}
                {this.props.elementAreaTerminal}
                {this.props.elementProgramaTerminal}
                {this.props.elementNumeroSerie}
              </div>
              <div className="modal-footer">
            {/*     <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  cerrar
                </button> */}
                <button type="button" className="btn btn-success">
                  <i class="bi bi-check2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
