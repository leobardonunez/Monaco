import React from "react";
import "../styles/layout.css";
import LayoutAtrasBarras from "./LayoutAtrasBarra";
import LayoutBaños from "./LayoutBaños";
import LayoutEntradaCentro from "./LayoutEntradaCentro";
import LayoutEntradaPersonal from "./LayoutEntradaPersonal";
import LayoutEsquinaFumador from "./LayoutEsquinaFumador";

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
          <div className="row">
            <div className="col">
              <button type="button" className="btn btn-primary btn-sm">Reemplazar</button>              
            </div>
            <div className="col-4 d-grid gap-2 d-md-flex">              
              <button type="button" className="btn btn-primary btn-sm">Ir</button>
              <input type="text" className="form-control" placeholder="Buscar por home"/>              
            </div>
            <div className="col-4">
              <select className="form-select">
                <option>Bally</option>
                <option>Zitro</option>
                <option>Cadillac</option>
              </select>
            </div>
          </div>
          <LayoutBaños />
          <LayoutEntradaPersonal/>
          <LayoutAtrasBarras/>
          <LayoutEntradaCentro/>
          <LayoutEsquinaFumador/>
        </div>
      </>
    );
  }
}

export default Layout;
