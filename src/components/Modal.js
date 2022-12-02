import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Tareas from "../pages/Tareas";

const URI = "http://localhost:4000/tasks/";

const Modal = (props) => {
  const [nombre, setName] = useState("");
  const [description, setDescription] = useState("");
  const [asigned_to, setAsignedTo] = useState(0);
  const [estado, setEstado] = useState(0);

  //Agregar una tarea  
    const store = async (e) => {
      e.preventDefault();
      await axios.post(URI, {
        name: nombre,
        description: description,
        asigned_to: asigned_to,
        estado: estado,
      });
    };
  

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={store}>
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  {props.title}
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
                {props.elementNombre}
                {props.elementDescripcion}
                {props.elementAsignar}
                {props.elementEstadoTarea}
                {/* Elementos componente terminales */}
                {props.elementFabricante}
                {props.elementNombreTerminal}
                {props.elementEstadoTerminal}
                {props.elementAreaTerminal}
                {props.elementProgramaTerminal}
                {props.elementNumeroSerie}
              </div>
              <div className="modal-footer">
                {/*     <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            cerrar
          </button> */}
                <button type="submit" className="btn btn-success">
                  <i className="bi bi-check2"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
