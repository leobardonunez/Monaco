import React from "react";
import "../styles/layout.css";
import LayoutAtrasBarras from "./LayoutAtrasBarra";
import LayoutBaños from "./LayoutBaños";
import LayoutEntradaCentro from "./LayoutEntradaCentro";
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
          <LayoutAtrasBarras/>
          <LayoutEntradaCentro/>
        </div>
      </>
    );
  }
}

export default Layout;
