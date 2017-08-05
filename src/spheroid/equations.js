const earthRadius = 6371000;

exports.distanceBetween3D = distanceBetween3D;
exports.latLongToPoint = latLongToPoint;

function distanceBetween3D(point1, point2) {
  if(point1.x === undefined || point1.y === undefined || point1.z === undefined) {
    console.log("Invalid point 1: Must define x, y, and z coordinates");
  }

  if(point2.x === undefined || point2.y === undefined || point2.z === undefined) {
    console.log("Invalid point 2: Must define x, y, and z coordinates");
  }

  if(typeof point1.x === "number" && typeof point1.y === "number" &&
     typeof point1.z === "number" && typeof point2.x === "number" &&
     typeof point2.y === "number" && typeof point2.z === "number") {
    return Math.sqrt( Math.pow((point1.x - point2.x), 2) +
                      Math.pow((point1.y - point2.y), 2) +
                      Math.pow((point1.z - point2.z), 2) );
  }
}

function latLongToPoint(lat, long, radius=earthRadius) {
  let phi = (90 - lat) * (Math.PI / 180);
  let theta = (long + 180) * (Math.PI / 180);

  x = -((radius) * Math.sin(phi) * Math.cos(theta));
  y = ((radius) * Math.cos(phi));
  z = ((radius) * Math.sin(phi) * Math.sin(theta));

  let point = {x: x, y: y, z: z};
  return point;
}

function distanceBetween2D(point1, point2) {
  console.log("Not defined because I'm lazy");
}
