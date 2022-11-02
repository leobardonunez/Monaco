import React from "react";
import ButtonAdd from "../components/ButtonAdd";
import Table from "../components/Table";
import "../styles/almacen.css";

class Almacen extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="container">
        <h3>Almacen</h3>
        <ButtonAdd />
        <div className="row">
          <Table />
        </div>
      </div>
    );
  }
}

export default Almacen;
