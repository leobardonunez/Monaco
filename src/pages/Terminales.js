import React, { useState, useEffect } from "react";
import "../styles/terminales.css";
import { useHistory } from "react-router-dom";

//Components
import ButtonAdd from "../components/ButtonAdd";
import Modal from "../components/Modal";
import OptionsTable from "../components/OptionsTable";
import Table from "../components/Table";

//DB Firestore
import {
  doc,
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  addDoc
} from "firebase/firestore";
//Connection db
import { db } from "../firebaseConfig/firebase";

const Terminales = () => {
  //1 Configuramos los hooks
  const [terminales, setTerminales] = useState([]);

  //2 Referenciamos a la Db firestore
  const terminalesCollection = collection(db, "terminales");

  //3 Funcion para mostrar todos los docs
  const getTerminales = async () => {
    /* Formato del video */
    const data = await getDocs(terminalesCollection);
    console.log(data.docs);
    setTerminales(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log("Formato del video " + terminales);
    /* Formato del video */

    /*Formato documentacion firebase */
    const querySnapshot = await getDocs(collection(db, "terminales"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(
        "Formato documentacion Firebase " + doc.id,
        " => ",
        doc.data()
      );
    });
    /*Formato documentacion firebase */
  };
  //4 Funcion para eliminar un doc
  const deleteTerminal = async (id) => {
    const terminalDoc = doc(db, "terminales", id);
    await deleteDoc(terminalDoc);
    getTerminales();
  };
  //5 Usamos useEffect
  useEffect(() => {
    getTerminales();
    //eslint-disable-next-line
  }, []);


  //Create
  const [fabricante , setFabricante] = useState('')
  const [home , setHome] = useState(0)
  const [estado , setEstado] = useState('')
  const [area , setArea] = useState('')
  const [programa , setPrograma] = useState('')
  const [serie , setSerie] = useState('')
  const history = useHistory();
  //referencia a coleccion
  const terminalesCollectionAdd = collection(db, "terminales");
  //funcion almacenar
  const store = async (e) =>{
    e.preventDefault()
    await addDoc( terminalesCollectionAdd , { fabricante: fabricante , home: home , estado: estado , area: area , programa: programa , serie: serie})
    /* useHistory('/terminales') */
    
  }

  return (
    <>
      <h3>Terminales</h3>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalTerminales"
            >
              Nueva terminal
            </button>
            {/* Modal */}

            <div
              className="modal fade"
              id="modalTerminales"
              aria-labelledby="modalTerminalesLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
              <form onSubmit={store}>
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="modalTerminalesLabel">
                      Añadir nueva terminal
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    {/* Elementos componente terminales */}
                    <div className="row">
                      <div className="col">
                        <h6>Fabricante:</h6>
                      </div>
                      <div className="col">
                        <input
                          value={fabricante}
                          onChange={(e) => setFabricante(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder="Nombre del fabricante"
                        />
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col">
                        <h6>Nombre:</h6>
                      </div>
                      <div className="col">
                        <input
                          value={home}
                          onChange={(e) => setHome(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder="Nombre de terminal"
                        />
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col">
                        <h6>Estado:</h6>
                      </div>
                      <div className="col">
                      <input
                       value={estado}
                       onChange={(e) => setEstado(e.target.value)}
                       type="text"
                       className="form-control"
                       placeholder="Estado de terminal"
                       />
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col">
                        <h6>&Aacute;rea:</h6>
                      </div>
                      <div className="col">
                       <input
                       value={area}
                       onChange={(e) => setArea(e.target.value)}
                       type="text"
                       className="form-control"
                       placeholder="Area de sala"
                       />
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col">
                        <h6>Programa:</h6>
                      </div>
                      <div className="col">
                        <input
                          value={programa}
                          onChange={(e) => setPrograma(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder="Programa de terminal"
                        />
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col">
                        <h6>Serie:</h6>
                      </div>
                      <div className="col">
                        <input
                          value={serie}
                          onChange={(e) => setSerie(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder="Numero serie"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-success">
                      <i className="bi bi-check2"></i>
                    </button>
                  </div>
                </div>
                </form>
              </div>
            </div>
            {/* Modal */}
          </div>
          <div className="table-responsive">
            <table className="table table-primary table-striped table-hover table-sm">
              <thead>
                <tr>
                  <th scope="col">Fabricante</th>
                  <th scope="col">Home</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Area</th>
                  <th scope="col">Programa</th>
                  <th scope="col">Serie</th>
                  <th scope="col">Options</th>
                </tr>
              </thead>
              <tbody>
                {terminales.map((terminal) => (
                  <tr key={terminal.id}>
                    <td scope="col">{terminal.fabricante}</td>
                    <td scope="col">{terminal.home}</td>
                    <td scope="col">
                      <span className="badge bg-success">
                        {terminal.estado}
                      </span>
                    </td>
                    <td scope="col">{terminal.area}</td>
                    <td scope="col">{terminal.programa}</td>
                    <td scope="col">{terminal.serie}</td>
                    <td>
                      <OptionsTable />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terminales;
