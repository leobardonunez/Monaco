import React from 'react';



class LayoutAtrasBarras extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <>
                <h3>Zona atras de barras</h3>
                <div className='row espaciado-row'>

                    <div className="row">
                        <div className="col numero">1383</div>
                        <div className="col numero">1382</div>
                        <div className="col numero">1381</div>
                        <div className="col numero">1380</div>
                        <div className="col numero">1206</div>
                        <div className="col numero">1205</div>
                        <div className="col numero">1204</div>
                        <div className="col espaciado">-</div>
                        <div className="col numero">1483</div>

                        <div className="col numero  ">1482</div>

                        

                        <div className="col numero">1481</div>
                    </div>
                </div>
            </>
        );
    }
}

export default LayoutAtrasBarras;