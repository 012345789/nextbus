import './routeSelector.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import getBusData from '../../services/nextbusLines.js';
// import _ from 'underscore';
import muniDataByLine from '../../services/muniDataByLine.js';
import map from '../baseMap/map.js';

console.log('routeSelector map: ', map);

// TODO: rename to RenderChoices
export default function populateRouteChoices(data) {

  let routeChoices = [];
  let selectedRoutes = new Set();

  let busRoutes = data.route;

  busRoutes.forEach(route => {
    routeChoices.push(
      <div className="route-choice" key={route.tag}>
        <input
          type="checkbox"
          value={route.tag}
          onChange={() => _checkboxToggled(route.tag)}
        />
        {route.tag}
      </div>
    );
  });

  let routeSelection =
    <div id="route-selector">
    <h4> Select Routes </h4>
      <button id="getLineRoutes" onClick={getRouteData}> Apply </button>
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
  }

  function getRouteData() {
    muniDataByLine('bogus line', map.geoPath);
  }

  // let routeListPromise = getBusData();
  // console.log('routeListPromise: ', routeListPromise)

  // let data = routeListPromise

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

  // group together by tag
  // const testElem =
  //   <div id="route-selector">
  //   <h4> Select Routes </h4>
  //     <div className="routes-display">
  //       <div className="route-choice">
  //         <input type="checkbox"/> N
  //       </div>
  //       <div className="route-choice">
  //         <input type="checkbox"/> 16
  //       </div>
  //     </div>
  //   </div>
  // ;


}
