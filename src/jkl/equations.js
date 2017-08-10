exports.distanceBetween3D = distanceBetween3D;
exports.latLongToPoint = latLongToPoint;
exports.maxDepth = maxDepth;
exports.earthRadius = earthRadius;

const earthRadius = 6371000;

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

const pointsAreDefined = (point1, point2) =>
  pointIsDefined(point1) &&
  pointIsDefined(point2);

const pointIsDefined = point =>
  point1.x === undefined ||
  point1.y === undefined ||
  point1.z === undefined;

const pointsAreNum = (point1, point2) =>
  typeof point1.x === 'number' &&
  typeof point1.y === 'number' &&
  typeof point1.z === 'number' &&
  typeof point2.x === 'number' &&
  typeof point2.y === 'number' &&
  typeof point2.z === 'number';

function latLongToPoint(lat, lon) {
  const phi = getPhi(lat);
  const theta = getTheta(lon);
  const point = createPoint(phi, theta);
  return point;
}

const getPhi = lat => (90 - lat) * (Math.PI / 180);
const getTheta = lon => (lon + 180) * (Math.PI / 180);
const getX = (r, p, t) => -(r * Math.sin(p) * Math.cos(t));
const getY = (r, p) => r * Math.cos(p);
const getZ = (r, p, t) => r * Math.sin(p) * Math.sin(t);

const createPoint = (phi, theta, radius = earthRadius) => {
  x = getX(radius, phi, theta);
  y = getY(radius, phi);
  z = getZ(radius, phi, theta);
  return {x: x, y: y, z: z};
}

function distanceBetween2D(point1, point2) {
  console.log('THE EARTH IS AN OBLATE SPHEROID');
}

// Because of trigonometry, we know that the maximum 'depth' of a chord across
// a circle is equal to the radius minus the square root of the radius squared
// minus one quarter of the distance between the two points squared. In other
// words, because math.
function maxDepth(point1, point2, radius = earthRadius) {
  const dist = distanceBetween3D(point1, point2);
  const depth = radius - Math.sqrt(Math.pow(radius, 2) - (0.25 * Math.pow(dist, 2)));
  return depth;
}
