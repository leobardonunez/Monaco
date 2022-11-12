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
              <Modal/>
            </div>
          </div>
          <div className="row">
            <div className="col">
                <Table/>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Tareas;
