import React from "react";
import "../styles/card-dashboard.css";

const colorStyle = {
  backgroundColor: "blue"
}

class CardDashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render(props) {
    return (
      <>
        <div className="card text-center shadow-lg" style={colorStyle}>          
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.number}</p>
            <p className="card-text">{this.state.contador}</p>
          </div>
        </div>
      </>
    );
  }
}

export default CardDashboard;
