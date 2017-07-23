import * as d3 from 'd3';

// endpoint: http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=sf-muni

export default function getLineRoute(line, geoPath) {
  // setInterval poll the API every 15000 ms
  // on another call of this function, destroy the last interval set so as to not overlap

  // currently always gets the route for 45
  const endpoint = "http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=sf-muni&r=45";

  d3.json(endpoint, function(error, data) {
    if (error) {
      throw new Error(error);
    }

    console.log('route data for 45: ', data);
    console.log('geoPath2: ', geoPath)

    // attach bus figures to the map
    let svg = d3.select("svg");

    var g = svg.append( "g" );

    let buses = svg.append("g")
      .attr("id", "buses");

    buses.selectAll("path")
      .data(data.vehicle)
      .enter()
      .append("path")
      .attr("fill", "#2F4952")
      .attr("stroke", "#CC1442")
      .attr("d", geoPath)
    ;

  });
}
