const planet = require('./conf/planet');

const convert = require('./lib/convert');
const chord = require('./lib/chord');

function main(latLonPointMap) {
  if (latLonPointMap == {}) { // not supplied

  }
}

const calculateChord = (latLonPointMap) => {
  const point1 = convert.latLonToPoint(latLonPointMap.point1);
  const point2 = convert.latLonToPoint(latLonPointMap.point2);
  // TODO determine planet, default earth
  const dist = chord.distanceBetween3D(point1, point2);
  const depth = chord.maxDepth(point1, point2, planet.earth.radius, dist);
  return {
    "dist": dist,
    "depth": depth
  }
}
