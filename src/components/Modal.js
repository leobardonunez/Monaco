import React from "react";
import axios from "axios";
import { useState } from "react";
import FormTareas from "./form-component/FormTareas";

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
            <FormTareas />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
