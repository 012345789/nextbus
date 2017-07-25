import fetch from 'isomorphic-fetch';
import generateColorHex from '../generators/colorHexGenerator.js';

var muniData = {};

muniData.load = function() {
  const endpoint = "//webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=sf-muni";

  fetch(endpoint).then(function(response) {
    if (!response.ok) {
      // end point may be unavailable
      throw new Error(response.statusText);
    }
    return response.json();
  }).then(function(data) {
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
