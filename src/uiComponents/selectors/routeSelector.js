import './routeSelector.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import getBusData from '../../services/nextbusLines.js';
// import _ from 'underscore';
// import muniData from '../../services/muniLinesData.js';
// import map from '../baseMap/map.js';
import createColorIndicator from './busColorIndicator.js';
import pollBus from './updateBusDisplay.js';

// TODO: rename to RenderChoices
export default function populateRouteChoices(data) {

  let routeChoices = [];
  let selectedRoutes = new Set();

  let busRoutes = data.route;

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
      {
        // <button id="getLineRoutes" onClick={getRouteData}> Apply </button>
      }
      <div id="routes-display">
        {routeChoices}
      </div>
    </div>
  ;

  ReactDOM.render(routeSelection, document.getElementById('route-selector-container'));

  // muniData.getLineData(map.geoPath);

  function _checkboxToggled(value) {
    if (selectedRoutes.has(value)) {
      selectedRoutes.delete(value);
    } else {
      selectedRoutes.add(value);
    }
    pollBus.updateBusDisplay(selectedRoutes);
  }

  // function getRouteData() {
  //   muniDataByLine('bogus line', map.geoPath);
  // }

  // routeListPromise.then((routeList, routeList2) => {
  //   let routeChoices = [];
  //
  //   let dynamicContent =
  //     <div id="route-selector">
  //     <h4> Select Routes </h4>
  //       <div className="routes-display">
  //         {routeChoices}
  //       </div>
  //     </div>
  //   ;
  //
  //   ReactDOM.render(dynamicContent, document.getElementById('route-selector-container'));
  // });


}
