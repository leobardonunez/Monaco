import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

//Components
import Modal from "../components/Modal";
import Table from "../components/table-component/Table";
import OptionsTable from "../components/table-component/OptionsTable";

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
    console.log("Estas son las tareas: " + res.data);
  };

  //Eliminar una tarea
  const deleteTask = async (id) => {
    await axios.delete(`${URI}${id}`);
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
            <Modal />
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
                  <td scope="col">
                    {task.estado ? (
                      <span className="badge bg-success">Completada</span>
                    ) : (
                      <span className="badge bg-danger">No completada</span>
                    )}
                  </td>
                  <td>
                    <div className="col-2 d-grid gap-2 d-md-flex justify-content-start">
                      <button type="button" className="btn btn-primary">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button
                        type="butotn"
                        className="btn btn-secondary"
                        onClick={() => deleteTask(task.id)}
                      >
                        <i className="bi bi-trash2"></i>
                      </button>
                    </div>
                  </td>
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
