import fetch from 'isomorphic-fetch';
import renderListOfRoutes from '../uiComponents/selectors/routeSelector.js';

const endpoint = "//webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=sf-muni";

export default function getBusRoutes() {
  fetch(endpoint).then(function(response) {
    if (!response.ok) {
      // end point may be unavailable
      throw new Error(response.statusText);
    }
    return response.json();
  }).then(function(data) {
    renderListOfRoutes(data);
  });
}
