import React from 'react';
import ReactDOM from 'react-dom';
import getBusData from '../../services/nextbusLines.js';
import _ from 'underscore';

// TODO: rename to RenderChoices
export default function populateRouteChoices() {
  let routeList = getBusData();
  console.log('routeList: ', routeList)

  // group together by tag
  const testElem =
    <div id="route-selector">
    <h4> Select Routes </h4>
      <div className="routes-display">
        <div className="route-choice">
          <input type="checkbox"/> N
        </div>
        <div className="route-choice">
          <input type="checkbox"/> 16
        </div>
      </div>
    </div>
  ;

  ReactDOM.render(testElem, document.getElementById('route-selector-container'));
}
