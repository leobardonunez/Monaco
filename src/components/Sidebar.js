import React from "react";
import {Link} from 'react-router-dom'

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Monaco
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="list-group">
            <a
              
              className="list-group-item list-group-item-action active"
              aria-current="true"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Horario</h5>
                <small>3 days ago</small>
              </div>
              <p className="mb-1">Some placeholder content in a paragraph.</p>
              <small>And some small print.</small>
            </a>
            <a  className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Tareas</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">Some placeholder content in a paragraph.</p>
              <small className="text-muted">And some muted small print.</small>
            </a>            
            <Link to="/layout" className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5>Layout</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">Some placeholder content in a paragraph.</p>
              <small className="text-muted">And some muted small print.</small>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
