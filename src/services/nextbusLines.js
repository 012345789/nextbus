import * as d3 from 'd3';
import renderListOfRoutes from '../uiComponents/selectors/routeSelector.js';

const endpoint = "http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=sf-muni";

export default function getBusRoutes() {
  d3.json(endpoint, function(error, data) {
    if (error) {
      throw new Error(error);
    }

    renderListOfRoutes(data);
  });
}
