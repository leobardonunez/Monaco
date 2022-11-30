import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Components
import Modal from "../components/Modal";
import Table from "../components/Table";

const URI = "http://localhost:4000/tasks/";

const Tareas = () => {
  const [task, setTask] = useState([]);
  useEffect(() => {
    getTasks();
  }, []);

  //Mostrar todas las tareas
  const getTasks = async () => {
    const res = await axios.get(URI);
    setTask(res.data);
  };

  //Eliminar una tarea
  const deleteTask = async (id) => {
    axios.delete(`${URI}${id}`);
    getTasks();
  };

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
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Descripci&oacute;n</th>
                  <th scope="col">Asignado a</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Options</th>
                </tr>
              </thead>
              <tbody>
                {task.map((task) => (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabla reactiva */}
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
          thOptionsTarea={
            <>
              <th scope="col">Options</th>
            </>
          }
          /* Body */
          tdNombreTarea={
            <>
              {task.map((task) => (
                <tr key={task.id}>
                  <td scope="col">{task.name}</td>
                  <td scope="col">{task.description}</td>
                  <td scope="col">{task.asigned_to}</td>
                  if(task.state===1){
                     <td scope="col">Completada</td>
                  }else{
                    <td scope="col">No completada</td>
                  }                  
                </tr>
              ))}              
            </>
          }
        />

      </div>
    </>
  );
};

export default Tareas;
