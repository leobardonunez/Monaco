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
                  Creando nueva tarea
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                    <div className="col">
                        <h6>Nombre:</h6>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Nombre de la actividad"/>
                        </div>
                </div><br/>
                <div className="row">
                    <div className="col">
                        <h6>Descripci&oacute;n:</h6>
                    </div>
                    <div className="col">
                    <input type="text" className="form-control" placeholder="Breve descripci&oacute;n.."/>
                    </div>
                </div><br/>
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
                  Crear
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
