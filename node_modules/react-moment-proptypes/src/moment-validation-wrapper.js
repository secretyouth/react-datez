var moment = require('moment');

function isValidMoment(testMoment) {
  if (typeof testMoment.isValid === 'function') {
    // moment 1.7.0+
    return testMoment.isValid();
  }

  return ! isNaN(testMoment);
}

module.exports = {
  isValidMoment : isValidMoment,
}
