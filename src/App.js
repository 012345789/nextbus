import React, { Component } from 'react';
import './App.css';
import './libraries/simple-grid.css';
// import loadMap from './uiComponents/baseMap/map.js';
import map from './uiComponents/baseMap/map.js';
import getBusRoutes from './services/nextbusLines.js';
// import populateRouteChoices from './uiComponents/selectors/routeSelector.js';
import muniData from './services/muniLinesData.js';
import pollBus from './uiComponents/selectors/updateBusDisplay.js';

class App extends Component {

  componentWillMount() {

  }

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
    // populateRouteChoices();
    map.load();
    // muniData.initializeElements();
    // set interval here
    // setInterval(muniData.load, 12000);
    muniData.load();
    setInterval(function () {
      muniData.load();
      pollBus.updateBusDisplay();
    }, 15000);
  }

}

// use albersProjection = d3.geoAlbers() function to process GeoJSON data.
// figure out how to import d3 with React
// albersProjection([-71.057, 42.313]); // longitude and latitude of Boston-ish

export default App;
