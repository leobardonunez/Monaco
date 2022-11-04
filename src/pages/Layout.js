import React from 'react';
import '../styles/layout.css';


class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <>
                <h3>Layout</h3>

                <div className='container'>
                    <button type='button' className='btn btn-primary'>Reemplazar</button>
                </div>
            </>
        );
    }
}

export default Layout;