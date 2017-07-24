import * as d3 from 'd3';
// import createColorIndicator from '../uiComponents/selectors/busColorIndicator.js';
import generateColorHex from '../generators/colorHexGenerator.js';

// import map from '../uiComponents/baseMap/map.js';

// endpoint for all buses: http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=sf-muni
// for 45 only: http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=sf-muni&r=45

var muniData = {};

// gets the data and maps it to our domain models
muniData.load = function() {
  const endpoint = "http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=sf-muni";

  d3.json(endpoint, function(error, data) {
    if (error) {
      throw new Error(error);
    }

    let vehicleData = data.vehicle;

    // format the data
    // {type: "Feature", id: 1, "geometry":
    //    {
    //     type : "Point"
    //     coordinates: [`longitude`, `latitude`, 0]
    //    }
    // }

    // clear stale buses
    // d3.select("#buses").remove();

    let latestVehicles = {};

    vehicleData.forEach(vehicle => {
      let feature = {
        type: "Feature",
        id: vehicle.id,
        geometry: {
          type: "Point",
          coordinates: [vehicle.lon, vehicle.lat],
        },
      };
      // features.push(feature);
      if (latestVehicles[vehicle.routeTag]) {
        latestVehicles[vehicle.routeTag].buses.push(feature)
      } else {
        latestVehicles[vehicle.routeTag] = {
          buses: [],
          color: generateColorHex(vehicle.routeTag)
        }
      }
    });

    // attach bus figures to the map
    // let svg = d3.select("svg");

    // this needs to be moved to an initializer
    // let buses = svg.append("g")
    //   .attr("id", "buses");

    // the below needs to be refactored into another js file that
    // is called only on checkbox toggle

    // buses.selectAll("path")
    //   .data(features)
    //   .enter()
    //   .append("path")
    //   // fill needs to be dynamic
    //   .attr("fill", "#2F4952")
    //   .attr("stroke", "#CC1442")
    //   .attr("d", geoPath)
    // ;

    muniData.vehiclesData = latestVehicles;
  });
}

export default muniData;
