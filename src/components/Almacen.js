import React from 'react'
import Table from './Table';


class Almacen extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className='container'>
                <Table/>
            </div>            
         );
    }
}
 
export default Almacen;