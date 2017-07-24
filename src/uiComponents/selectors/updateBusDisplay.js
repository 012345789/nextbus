import * as d3 from 'd3';
import muniData from '../../services/muniLinesData.js';
import map from '../baseMap/map.js';
import _ from 'underscore';

export default function updateBusDisplay(lines) {

  let geoPath = map.geoPath;

  let svg = d3.select("svg");
  // clear stale buses
  d3.select("#buses").remove();

  let busPoints = svg.append("g")
    .attr("id", "buses");

  // let busPoints = muniData.busPoints;
  let vehiclesByRouteTag = muniData.vehiclesData;

  // console.log('lines: ', lines)

  lines.forEach(line => {

    // console.log('vehiclesByRouteTag: ', vehiclesByRouteTag)
    if (!vehiclesByRouteTag[line]) {
      // no vehicles found for this bus route
      return;
    }

    let features = vehiclesByRouteTag[line].buses;
    let color = vehiclesByRouteTag[line].color;

    busPoints.selectAll("path")
      .data(features)
      .enter()
      .append("path")
      // fill needs to be dynamic
      // .attr("fill", "#2F4952")
      .attr("fill", color)
      .attr("stroke", "#CC1442")
      .attr("d", geoPath)
    ;
  });

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
