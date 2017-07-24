import React, { Component } from 'react';
import './App.css';
import './libraries/simple-grid.css';
// import loadMap from './uiComponents/baseMap/map.js';
import map from './uiComponents/baseMap/map.js';
import getBusRoutes from './services/nextbusLines.js';
// import populateRouteChoices from './uiComponents/selectors/routeSelector.js';
import muniData from './services/muniLinesData.js';

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
              {
              /*<div id="map2222" className="col-8"></div>*/
              }
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
    muniData.load();
  }

}

// use albersProjection = d3.geoAlbers() function to process GeoJSON data.
// figure out how to import d3 with React
// albersProjection([-71.057, 42.313]); // longitude and latitude of Boston-ish

export default App;
