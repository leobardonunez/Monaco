import React from 'react'
import Table from '../components/Table';
import logo from '../resources/user.png';

class User extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
               <div className='container p-4'>
                <div className='p-5 mb-4 bg-light rounded-3 shadow-lg'>
                    <div className='container-fluid py-5'>
                    <img src={logo} className="rounded mx-auto d-block" alt="..." width="350" />
                        <h1 className='display-5 fw-bold'>Leobardo nuñez</h1>
                        <p className='col-md-3 fs-5'>Puesto: <b>Auxiliar tecnico en sistemas</b></p>                        
                        <button className='btn btn-primary btn-sm'>Editar perfil</button>
                    </div>
                </div>
                <div className='row align-items-md-stretch p-3'>
                    <div className='col-6'>
                        <div className='h-100 p-5 text-bg-primary rounded-3 shadow-lg'>
                            <h2>Producci&oacute;n</h2>
                            <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                        </div>
                    </div>
                    <div className='col-6'>
                    <div className='h-100 p-5 text-bg-light rounded-3 shadow-lg'>
                            <h2>Notas</h2>
                            <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                        </div>
                    </div>
                </div>

                <div className='row align-items-md-stretch p-3'>
                    <div className='col'>
                    <div className='h-100 p-5 text-bg-dark rounded-3 shadow-lg'>
                            <h2>Tareas pendientes</h2>
                            <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                        </div>
                    </div>
                </div>
                
               </div>
            </>
         );
    }
}
 
export default User;