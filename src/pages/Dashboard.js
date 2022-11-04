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
                            <CardDashboard />
                        </div>
                        <div className="col">
                            <CardDashboard title="como estas?"/>
                        </div>
                        <div className="col">
                            <CardDashboard title="que bueno que estes bien"/>
                        </div>
                        <div className="col">
                            <CardDashboard title="que bueno que estes bien"/>
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