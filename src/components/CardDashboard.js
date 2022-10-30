import React from 'react';
import '../styles/card-dashboard.css'


class CardDashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div className="card text-center" >
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>                    
                </div>
            </div>
        );
    }
}

export default CardDashboard;