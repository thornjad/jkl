const planet = require('./conf/planet');

const convert = require('./lib/convert');
const chord = require('./lib/chord');

// main program

// take lat, lon
// return distance, depth

const calculateChord = (lat, lon) => {
  const point1 = convert.latLonToPoint(lat);
  const point2 = convert.latLonToPoint(lon);

}
