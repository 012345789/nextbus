import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './libraries/simple-grid.css';
// import loadMap from './uiComponents/baseMap/map.js';
import map from './uiComponents/baseMap/map.js';
import getBusData from './services/nextbusLines.js';
// import populateRouteChoices from './uiComponents/selectors/routeSelector.js';

class App extends Component {

  componentWillMount() {

  }

  render() {

    getBusData();

    return (
      <div className="App">
        {
          /*<div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">

          </p>*/
        }
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
    // let geoPath = loadMap();
    map.load();
  }

}

// use albersProjection = d3.geoAlbers() function to process GeoJSON data.
// figure out how to import d3 with React
// albersProjection([-71.057, 42.313]); // longitude and latitude of Boston-ish

export default App;
