// if error, display "Could not retrieve bus data"
// endpoint: http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=sf-muni

import * as d3 from 'd3';
import populateRouteChoices from '../uiComponents/selectors/routeSelector.js';

const endpoint = "http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=sf-muni";

// TODO: rename method
export default function getBusData() {
  // console.log('json: ', d3.json)
  d3.json(endpoint, function(error, data) {
    if (error) {
      throw new Error(error);
    }

    // console.log('fetched nextbus data: ', data);
    populateRouteChoices(data);
    // return data;
  });
  // console.log('outer result: ', result);
  // return result;
}
