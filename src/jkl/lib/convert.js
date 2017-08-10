const planet = require('../conf/planet.json');

exports.letLonToPoint = latLonToPoint;

// TODO km to mi
// TODO mi to km

function latLonToPoint(lat, lon) {
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

const createPoint = (phi, theta, radius = planet.earth.radius) => {
  x = getX(radius, phi, theta);
  y = getY(radius, phi);
  z = getZ(radius, phi, theta);
  return {x: x, y: y, z: z};
}
