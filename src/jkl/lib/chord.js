const planet = require('../conf/planet.json');

exports.maxDepth = maxDepth;
exports.distanceBetween3D = distanceBetween3D;
exports.distanceBetween2D = distanceBetween2D;

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

function distanceBetween2D(point1, point2) {
  console.log('THE EARTH IS AN OBLATE SPHEROID');
}

// Because of trigonometry, we know that the maximum 'depth' of a chord across
// a circle is equal to the radius minus the square root of the radius squared
// minus one quarter of the distance between the two points squared. In other
// words, because math.
function maxDepth(point1, point2, radius = planet.earth.radius) {
  const dist = distanceBetween3D(point1, point2);
  const depth = radius - Math.sqrt(Math.pow(radius, 2) - (0.25 * Math.pow(dist, 2)));
  return depth;
}
