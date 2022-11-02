import React from 'react'


class ButtonAdd extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <button type='button' className='btn btn-success shadow-lg'>Añadir +</button>
         );
    }
}
 
export default ButtonAdd;