Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _wrapValidator = require('./helpers/wrapValidator');

var _wrapValidator2 = _interopRequireDefault(_wrapValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function uniqueCountWithSet(arr) {
  return new Set(arr).size;
}
/* istanbul ignore next */
function uniqueCountLegacy(arr) {
  var seen = [];
  arr.forEach(function (item) {
    if (seen.indexOf(item) === -1) {
      seen.push(item);
    }
  });
  return seen.length;
}

var getUniqueCount = typeof Set === 'function' ? uniqueCountWithSet : /* istanbul ignore next */uniqueCountLegacy;

function requiredUniqueArray(props, propName, componentName) {
  for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    rest[_key - 3] = arguments[_key];
  }

  var result = _propTypes.array.isRequired.apply(_propTypes.array, [props, propName, componentName].concat(rest));
  if (result != null) {
    return result;
  }

  var propValue = props[propName];
  var uniqueCount = getUniqueCount(propValue);
  if (uniqueCount !== propValue.length) {
    return new RangeError(String(componentName) + ': values must be unique. ' + (propValue.length - uniqueCount) + ' duplicate values found.');
  }
  return null;
}

function uniqueArray(props, propName) {
  var propValue = props[propName];
  if (propValue == null) {
    return null;
  }

  for (var _len2 = arguments.length, rest = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    rest[_key2 - 2] = arguments[_key2];
  }

  return requiredUniqueArray.apply(undefined, [props, propName].concat(rest));
}
uniqueArray.isRequired = requiredUniqueArray;

exports['default'] = function () {
  return (0, _wrapValidator2['default'])(uniqueArray, 'uniqueArray');
};
//# sourceMappingURL=uniqueArray.js.map