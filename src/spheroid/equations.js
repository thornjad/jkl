const earthRadius = 6371000;

exports.distanceBetween3D = distanceBetween3D;
exports.latLongToPoint = latLongToPoint;
exports.maxDepth = maxDepth;
exports.earthRadius = earthRadius;

function distanceBetween3D(point1, point2) {
  if (pointsAreValid(point1, point2)) {
    return Math.sqrt( Math.pow((point1.x - point2.x), 2) +
                      Math.pow((point1.y - point2.y), 2) +
                      Math.pow((point1.z - point2.z), 2) );
  }
}

const pointsAreValid = (point1, point2) =>
  pointsAreDefined(point1, point2) &&
  pointsAreNum(point1, point2);

const pointsAreDefined = (point1, point2) => {
  if (pointIsDefined(point1)) {
    console.log('Invalid point 1: Must define x, y, and z coordinates');
    return false;
  }

  if (pointIsDefined(point2)) {
    console.log('Invalid point 2: Must define x, y, and z coordinates');
    return false;
  }

  return true;
};

const pointIsDefined = point => point1.x === undefined || point1.y === undefined || point1.z === undefined;

const pointsAreNum = (point1, point2) =>
  typeof point1.x === 'number' &&
  typeof point1.y === 'number' &&
  typeof point1.z === 'number' &&
  typeof point2.x === 'number' &&
  typeof point2.y === 'number' &&
  typeof point2.z === 'number';

function latLongToPoint(lat, long, radius=earthRadius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (long + 180) * (Math.PI / 180);

  x = -((radius) * Math.sin(phi) * Math.cos(theta));
  y = ((radius) * Math.cos(phi));
  z = ((radius) * Math.sin(phi) * Math.sin(theta));

  const point = {x: x, y: y, z: z};
  return point;
}

function distanceBetween2D(point1, point2) {
  console.log('THE EARTH IS AN OBLIQUE SPHEROID');
}

// Because of trigonometry, we know that the maximum 'depth' of a chord across
// a circle is equal to the radius minus the square root of the radius squared
// minus one quarter of the distance between the two points squared. In other
// words, because math.
function maxDepth(point1, point2, radius=earthRadius) {
  const dist = distanceBetween3D(point1, point2);
  const depth = radius - Math.sqrt(Math.pow(radius, 2) - (0.25 * Math.pow(dist, 2)));
  return depth;
}
