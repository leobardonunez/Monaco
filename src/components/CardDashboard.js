import React from 'react';
import '../styles/card-dashboard.css'


class CardDashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div class="card text-center" >
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>                    
                </div>
            </div>
        );
    }
}

export default CardDashboard;