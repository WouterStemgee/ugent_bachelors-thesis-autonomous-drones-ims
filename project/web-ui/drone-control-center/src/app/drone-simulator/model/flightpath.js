export class FlightPath {

  constructor(mapId) {
    this.mapId = mapId;
    this.waypoints = [];
  }

  toJSON() {
    let flightpath = {
      mapId: 0,
      waypoints: [],
      radius: 0
    };
    flightpath.mapId = this.mapId;
    this.waypoints.forEach(waypoint => flightpath.waypoints.push({x: waypoint.x, y: waypoint.y, z: waypoint.z, scan: waypoint.scan, orientation: waypoint.orientation}));
    return flightpath;
  }
}
