import React from "react";
import "../styles/layout.css";
import LayoutBaños from "./LayoutBaños";
import LayoutEntradaPersonal from "./LayoutEntradaPersonal";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <>
        <h3>Layout</h3>

        <div className="container">
          <button type="button" className="btn btn-primary">
            Reemplazar
          </button>
          <LayoutBaños />
          <LayoutEntradaPersonal/>
        </div>
      </>
    );
  }
}

export default Layout;
