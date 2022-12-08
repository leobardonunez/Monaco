import React from "react";
import axios from "axios";
import { useState } from "react";
import FormTareas from "./tareas-components/FormTareas";
import { useParams } from "react-router-dom";
import EditTareas from "./tareas-components/EditTareas";

const URI = "http://localhost:4000/tasks/";

const Modal = (props) => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModalEdit"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <EditTareas />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
