import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import loadMap from './uiComponents/baseMap/map.js';
// import getBusData from './services/nextbus.js';
import populateRouteChoices from './uiComponents/selectors/routeSelector.js';

class App extends Component {

  render() {

    loadMap();

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="route-selector-container">
        </div>
      </div>
    );
  }

  componentDidMount() {
    populateRouteChoices();
  }

}

// use albersProjection = d3.geoAlbers() function to process GeoJSON data.
// figure out how to import d3 with React
// albersProjection([-71.057, 42.313]); // longitude and latitude of Boston-ish

export default App;
