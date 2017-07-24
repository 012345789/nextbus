import React, { Component } from 'react';
import './App.css';
import './libraries/simple-grid.css';
import map from './uiComponents/baseMap/map.js';
import getBusRoutes from './services/nextbusLines.js';
import muniData from './services/muniLinesData.js';
import pollBus from './uiComponents/selectors/updateBusDisplay.js';

class App extends Component {

  render() {
    getBusRoutes();

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div id="route-selector-container" className="col-2">
            </div>
            <div id="vis" className="col-10">
              <div id="map"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    map.load();
    muniData.load();
    setInterval(function () {
      muniData.load();
      pollBus.updateBusDisplay();
    }, 15000);
  }

}

export default App;
