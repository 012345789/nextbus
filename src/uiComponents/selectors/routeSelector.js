import './routeSelector.css';
import React from 'react';
import ReactDOM from 'react-dom';
import createColorIndicator from './busColorIndicator.js';
import pollBus from './updateBusDisplay.js';

export default function renderListOfRoutes(data) {

  let routeChoices = [];
  let selectedRoutes = new Set();

  let busRoutes = data.route.sort();

  busRoutes.forEach(route => {
    routeChoices.push(
      <div className="route-choice" key={route.tag}>
        <div>
          <input
            type="checkbox"
            value={route.tag}
            onChange={() => _checkboxToggled(route.tag)}
          />
        </div>
        <div>
          {route.tag}
        </div>
        {createColorIndicator(route.tag)}
      </div>
    );
  });

  let routeSelection =
    <div id="route-selector">
    <h4> Select Routes </h4>
      <div id="routes-display">
        {routeChoices}
      </div>
    </div>
  ;

  ReactDOM.render(routeSelection, document.getElementById('route-selector-container'));

  function _checkboxToggled(value) {
    if (selectedRoutes.has(value)) {
      selectedRoutes.delete(value);
    } else {
      selectedRoutes.add(value);
    }
    pollBus.updateBusDisplay(selectedRoutes);
  }

}
