import React, { useState } from "react";
import axios from "axios";


const URI = "http://localhost:4000/tasks/";
const OptionsTable = () => {
  const [task  , setTask] = useState([]);

  //Eliminar una tarea
  const deleteTask = async () =>{
    const res = await axios.get(URI);
    setTask(res.data);
  }
  return (
    <>
      <td>
        <div className="col-2 d-grid gap-2 d-md-flex justify-content-start">
          <button type="button" className="btn btn-primary">
            <i className="bi bi-pencil"></i>
          </button>
          <button type="butotn" className="btn btn-secondary" onClick={()=>deleteTask(task.id)}>
            <i className="bi bi-trash2"></i>
          </button>
        </div>
      </td>
    </>
  );
};

export default OptionsTable;
