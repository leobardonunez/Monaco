import React from 'react';
import './App.css';

//Import components
import Table from './components/Table';
import CardDashboard from './components/CardDashboard';

function App() {
  return (
    <div className="App">
      {/*    <header className="App-header">

      </header> */}
      <section>
        <div className='container text-center' id='card'>
          <div className='row'>
            <div className="col">
              <CardDashboard />
            </div>
            <div className='col'>
              <CardDashboard />
            </div>
            <div className='col'>
              <CardDashboard />
            </div>
          </div>
        </div>
        <div className='container'>
          <Table />
        </div>

      </section>
    </div>
  );
}

export default App;
