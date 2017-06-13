Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = valuesOfValidator;

var _isPrimitive = require('./helpers/isPrimitive');

var _isPrimitive2 = _interopRequireDefault(_isPrimitive);

var _wrapValidator = require('./helpers/wrapValidator');

var _wrapValidator2 = _interopRequireDefault(_wrapValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// code adapted from https://github.com/facebook/react/blob/14156e56b9cf18ac86963185c5af4abddf3ff811/src/isomorphic/classic/types/ReactPropTypes.js#L307-L340

function valuesOfValidator(propType) {
  if (typeof propType !== 'function') {
    throw new TypeError('objectOf: propType must be a function');
  }

  var validator = function () {
    function valuesOf(props, propName, componentName, location, propFullName) {
      for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
        rest[_key - 5] = arguments[_key];
      }

      var propValue = props[propName];
      if (propValue == null || (0, _isPrimitive2['default'])(propValue)) {
        return null;
      }

      var firstError = void 0;
      Object.keys(propValue).some(function (key) {
        firstError = propType.apply(undefined, [propValue, key, componentName, location, String(propFullName) + '.' + String(key)].concat(rest));
        return firstError;
      });
      return firstError || null;
    }

    return valuesOf;
  }();
  validator.isRequired = function () {
    function valuesOfRequired(props, propName, componentName) {
      var propValue = props[propName];
      if (propValue == null) {
        return new TypeError(String(componentName) + ': ' + String(propName) + ' is required.');
      }

      for (var _len2 = arguments.length, rest = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        rest[_key2 - 3] = arguments[_key2];
      }

      return validator.apply(undefined, [props, propName, componentName].concat(rest));
    }

    return valuesOfRequired;
  }();

  return (0, _wrapValidator2['default'])(validator, 'valuesOf', propType);
}
//# sourceMappingURL=valuesOf.js.map