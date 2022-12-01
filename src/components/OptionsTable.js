import React from "react";

class OptionsTable extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <>
        <td>
          <div className="col-2 d-grid gap-2 d-md-flex justify-content-start">
            <button type="button" className="btn btn-primary">
              <i className="bi bi-pencil"></i>
            </button>
            <button type="butotn" className="btn btn-secondary">
              <i className="bi bi-trash2"></i>
            </button>
          </div>
        </td>
      </>
    );
  }
}

export default OptionsTable;
