import * as d3 from 'd3';
import generateColorHex from '../generators/colorHexGenerator.js';

var muniData = {};

muniData.load = function() {
  const endpoint = "//webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=sf-muni";

  d3.json(endpoint, function(error, data) {
    if (error) {
      throw new Error(error);
    }

    let vehicleData = data.vehicle;

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
      if (latestVehicles[vehicle.routeTag]) {
        latestVehicles[vehicle.routeTag].buses.push(feature)
      } else {
        latestVehicles[vehicle.routeTag] = {
          buses: [],
          color: generateColorHex(vehicle.routeTag)
        }
      }
    });

    muniData.vehiclesData = latestVehicles;
  });
}

export default muniData;
