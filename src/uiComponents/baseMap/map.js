import * as d3 from 'd3';
import streets from '../../geoJson/sfmaps/streets.json';

var map = {};

map.load = function() {
// export default function loadMap() {
  var width = 600,
      height = 450;

  // var svg = d3.select( "#map" )
  //   .append( "svg" )
  //   .attr( "width", width )
  //   .attr( "height", height );

  // var g = svg.append( "g" );

  var albersProjection = d3.geoAlbers();

  let geoPath = d3.geoPath()
      .projection( albersProjection );

  let geoJson = streets;

  // Centering map
  // from https://stackoverflow.com/a/14654988
  let center = d3.geoCentroid(geoJson);
  let initialScale  = 800;
  let bounds  = geoPath.bounds(geoJson);
  let hscale  = initialScale*width  / (bounds[1][0] - bounds[0][0]);
  let vscale  = initialScale*height / (bounds[1][1] - bounds[0][1]);
  let scale   = Math.min(hscale, vscale); //(hscale < vscale) ? hscale : vscale;
  let offset  = [width - (bounds[0][0] + bounds[1][0]),
                    height - (bounds[0][1] + bounds[1][1])/2];

  // let vis = d3.select("#vis").append("svg")
  //   .attr("width", width).attr("height", height);
  // let map = d3.select("#vis").append("#map")
  //   .attr("width", width).attr("height", height);

  var svg = d3.select( "#map" )
    .append( "svg" )
    .attr( "width", width )
    .attr( "height", height );

  // new projection
  let newProjection = d3.geoMercator().center(center)
    .scale(scale).translate(offset)
  ;

  // var g = svg.append( "g" );

  geoPath = geoPath.projection(newProjection);

  // add a rectangle to see the bound of the svg
  let rect = svg.append("rect").attr('width', width).attr('height', height)
    .style('stroke', 'black').style('fill', 'none')
  ;

  rect.selectAll("path").data(geoJson.features).enter().append("path")
    .attr("d", geoPath)
    // .style("fill", "red")
    .style("stroke-width", "2")
    .style("stroke", "black")
  ;

  let g2 = svg.append("g").attr('width', width).attr('height', height)
    .style('stroke', 'black').style('fill', 'none')
  ;

  g2.selectAll("path").data(geoJson.features).enter().append("path")
    .attr("d", geoPath)
    // .style("fill", "red")
    .style("stroke-width", "1")
    .style("stroke", "black")
  ;

  // g.selectAll( "path" )
  //   .data(geoJson.features)
  //   .enter()
  //   .append( "path" )
  //   .attr( "fill", "#ccc" )
  //   .attr( "d", geoPath )
  // ;

  // return geoPath;
  map.geoPath = geoPath;

}

export default map;
