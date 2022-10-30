import React from 'react';


class Error404 extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div className='container'>
                <h1>Error 404</h1>
                <p>Not Found</p>
            </div>
        );
    }
}

export default Error404;