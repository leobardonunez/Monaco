import React from "react";
import axios from "axios";
import { useState } from "react";
import FormTareas from "./form-component/FormTareas";
import { useParams } from "react-router-dom";

const URI = "http://localhost:4000/tasks/";

const Modal = (props) => {
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
