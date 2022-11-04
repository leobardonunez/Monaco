import React from 'react';
import ButtonAdd from '../components/ButtonAdd';
import Table from '../components/Table';
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
                <ButtonAdd/>
                <div className='container'>
                    <div className='row'>
                        <Table/>
                    </div>
                </div>
            </>
        );
    }
}

export default Terminales;