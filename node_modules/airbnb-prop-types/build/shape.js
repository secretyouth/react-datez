Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = shapeValidator;

var _isPlainObject = require('./helpers/isPlainObject');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _wrapValidator = require('./helpers/wrapValidator');

var _wrapValidator2 = _interopRequireDefault(_wrapValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function shapeValidator(shapeTypes) {
  if (!(0, _isPlainObject2['default'])(shapeTypes)) {
    throw new TypeError('shape must be a normal object');
  }

  function shape(props, propName, componentName, location) {
    var propValue = props[propName];
    if (propValue == null) {
      return null;
    }
    // code adapted from PropTypes.shape: https://github.com/facebook/react/blob/14156e56b9cf18ac86963185c5af4abddf3ff811/src/isomorphic/classic/types/ReactPropTypes.js#L381
    // eslint-disable-next-line guard-for-in, no-restricted-syntax

    for (var _len = arguments.length, rest = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
      rest[_key - 4] = arguments[_key];
    }

    for (var key in shapeTypes) {
      var checker = shapeTypes[key];
      if (checker) {
        var error = checker.apply(undefined, [propValue, key, componentName, location].concat(rest));
        if (error) {
          return error;
        }
      }
    }
    return null;
  }

  shape.isRequired = function () {
    function shapeRequired(props, propName, componentName) {
      var propValue = props[propName];
      if (propValue == null) {
        return new TypeError(String(componentName) + ': ' + String(propName) + ' is required.');
      }

      for (var _len2 = arguments.length, rest = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        rest[_key2 - 3] = arguments[_key2];
      }

      return shape.apply(undefined, [props, propName, componentName].concat(rest));
    }

    return shapeRequired;
  }();

  return (0, _wrapValidator2['default'])(shape, 'shape', shapeTypes);
}
//# sourceMappingURL=shape.js.map