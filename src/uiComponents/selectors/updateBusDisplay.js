import * as d3 from 'd3';
import muniData from '../../services/muniLinesData.js';
import map from '../baseMap/map.js';

var pollBus = {};

pollBus.updateBusDisplay = function(lines) {

  if (!lines && !pollBus.previousLines) {
    // user has not interacted with selector
    return;
  }

  if (!lines) {
    // no change since user's last input. but there is updated data from server
    lines = pollBus.previousLines;
  }

  let geoPath = map.geoPath;

  let svg = d3.select("svg");

  // clear stale buses
  d3.selectAll(".bus").remove();

  let vehiclesByRouteTag = muniData.vehiclesData;

  lines.forEach(line => {

    if (!vehiclesByRouteTag[line]) {
      // no vehicles found for this bus route
      return;
    }

    let busPoint = svg.append("g")
      .attr("class", "bus")
    let features = vehiclesByRouteTag[line].buses;
    let color = vehiclesByRouteTag[line].color;

    busPoint.selectAll("path")
      .data(features)
      .enter()
      .append("path")
      .attr("fill", color)
      .attr("stroke", "#CC1442")
      .attr("d", geoPath)
    ;
  });

  pollBus.previousLines = lines;
}

export default pollBus;
