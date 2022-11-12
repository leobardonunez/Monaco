import React from 'react';

import Table from '../components/Table';
import CardDashboard from '../components/CardDashboard';
import '../styles/card-dashboard.css';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <section>
                <div className="container text-center" id="card">
                    <div className="row">
                        <div className="col">
                            <CardDashboard title='Terminales activas' color="red" number={120}/>
                        </div>
                        <div className="col">
                            <CardDashboard title="Terminales inactivas" color="blue" number={7}/>
                        </div>
                        <div className="col">
                            <CardDashboard title="Terminales reportadas" color="green" number={10}/>
                        </div>
                    </div>
                </div>
                
                <div className="container">
                    <Table />
                </div>
            </section>
        );
    }
}

export default Dashboard;