import * as d3 from 'd3';
import muniData from '../../services/muniLinesData.js';
import map from '../baseMap/map.js';
import _ from 'underscore';

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

  // let busPoints = svg.append("g")
  //   .attr("id", "buses");

  // let busPoints = muniData.busPoints;
  let vehiclesByRouteTag = muniData.vehiclesData;

  // console.log('lines: ', lines)

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
      // .merge(busPoints)
      // fill needs to be dynamic
      // .attr("fill", "#2F4952")
      .attr("fill", color)
      .attr("stroke", "#CC1442")
      .attr("d", geoPath)
    ;
  });

  pollBus.previousLines = lines;

  // _.each(vehiclesByRouteTag, (busesOfRoute, route) => {
  //   busPoints.selectAll("path")
  //     // need a mapping from array of route tags to array of features
  //     // .data(features)
  //     .enter()
  //     .append("path")
  //     // fill needs to be dynamic
  //     // .attr("fill", "#2F4952")
  //     .attr("fill", busesOfRoute.color)
  //     .attr("stroke", "#CC1442")
  //     .attr("d", geoPath)
  //   ;
  // });

}

export default pollBus;
