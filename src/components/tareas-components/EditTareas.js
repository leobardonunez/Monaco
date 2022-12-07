import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SelectTecnicos from "../select-component/SelectTecnicos";

const URI = "http://localhost:4000/tasks/";

const EditTareas = (props) => {
   const [nombre , setName] = useState("");
   const [description , setDescription] = useState("");
   const [asigned_to , setAsignedTo] = useState("");
   const id = useParams;


  //Traer los datos del registro
  const getTaskById = async () => {
    const res = await axios.get(URI + id);
    setName(res.data.name);
    setDescription(res.data.description);
    setAsignedTo(res.data.asigned_to);
  };

  //Editar una tarea
  const update = async (e) => {
    e.preventDefault();
    await axios.put(URI + id, {
      nombre: nombre,
      description: description,
      asigned_to: asigned_to,
    });
  };

  return (
    <>
      <form onSubmit={update}>
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Editando Tarea
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
          <div className="row">
            <div className="col">
              <h6>Nombre:</h6>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre de la actividad"
                value={nombre}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <h6>Descripci&oacute;n:</h6>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Breve descripci&oacute;n.."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <h6>Asignar a:</h6>
            </div>
            <div className="col">
              <SelectTecnicos
                value={props.id_select}
                onChange={(e) => setAsignedTo(e.target.value)}
              />
            </div>
            {console.log(props.id_select)}
          </div>
          <br />
          {/*    <div className="row">
            <div className="col">
              <h6>Estado</h6>
            </div>
            <div className="col">
              <SelectEstados
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              />
            </div>
          </div> */}
          <br />

          {/* Elementos componente terminales */}
          {/*  {props.elementFabricante}
          {props.elementNombreTerminal}
          {props.elementEstadoTerminal}
          {props.elementAreaTerminal}
          {props.elementProgramaTerminal}
          {props.elementNumeroSerie} */}
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
    </>
  );
};

export default EditTareas;
