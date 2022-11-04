import React from 'react';
import '../styles/card-dashboard.css'


class CardDashboard extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    state = {}
    render(props) {
        return (
           console.log(props)           
        );
    }
}

export default CardDashboard;


{/* <div className="card text-center shadow-lg" >
<div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>                    
</div>
</div> */}