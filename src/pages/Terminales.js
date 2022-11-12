import React from 'react';
import ButtonAdd from '../components/ButtonAdd';
import Modal from '../components/Modal';
import '../styles/terminales.css';




class Terminales extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <>
                <h3>Terminales</h3>
                <div className='container'>
                    <div className='row'>
                        <div className='col-2'>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Nueva terminal
                            </button>
                            <Modal title="Añadiendo nueva terminal"/>
                        </div>
                        <table className='table table-dark table-striped table-hover'>
                            <thead>
                                <tr>
                                    <th scope='col'>Fabricante</th>
                                    <th scope='col'>Nombre</th>
                                    <th scope='col'>Estado</th>
                                    <th scope='col'>&Aacute;rea</th>
                                    <th scope='col'>Programa</th>
                                    <th scope='col'>Numero de serie</th>
                                    <th scope='col'>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {/* <th scope='row'>2</th> */}
                                    <td>{"Bally"}</td>
                                    <td>{"1001-Bally"}</td>
                                    <td>{"Activo"}</td>
                                    <td>{"No fumadores"}</td>
                                    <td>{"Spirit"}</td>
                                    <td>{"B130480437"}</td>
                                    <td><div className='col-2 d-grid gap-2 d-md-flex justify-content-start'>
                                        <button type='button' className='btn btn-warning'><i class="bi bi-pencil"></i></button>
                                        <button type='butotn' className='btn btn-danger'><i class="bi bi-trash2"></i></button>
                                    </div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
}

export default Terminales;