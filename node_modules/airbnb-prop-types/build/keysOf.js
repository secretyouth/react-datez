Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = keysOfValidator;

var _isPrimitive = require('./helpers/isPrimitive');

var _isPrimitive2 = _interopRequireDefault(_isPrimitive);

var _wrapValidator = require('./helpers/wrapValidator');

var _wrapValidator2 = _interopRequireDefault(_wrapValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function keysOfValidator(propType) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'keysOf';

  if (typeof propType !== 'function') {
    throw new TypeError('argument to keysOf must be a valid PropType function');
  }

  var validator = function () {
    function keysOf(props, propName, componentName, location, propFullName) {
      for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
        rest[_key - 5] = arguments[_key];
      }

      var propValue = props[propName];

      if (propValue == null || (0, _isPrimitive2['default'])(propValue)) {
        return null;
      }

      var firstError = null;
      Object.keys(propValue).some(function (key) {
        firstError = propType.apply(undefined, [_defineProperty({}, key, key), key, componentName, location, '(' + String(propFullName) + ').' + String(key)].concat(rest));
        return firstError != null;
      });
      return firstError || null;
    }

    return keysOf;
  }();

  validator.isRequired = function () {
    function keyedByRequired(props, propName, componentName) {
      var propValue = props[propName];

      if (propValue == null) {
        return new TypeError(String(componentName) + ': ' + String(propName) + ' is required, but value is ' + String(propValue));
      }

      for (var _len2 = arguments.length, rest = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        rest[_key2 - 3] = arguments[_key2];
      }

      return validator.apply(undefined, [props, propName, componentName].concat(rest));
    }

    return keyedByRequired;
  }();

  return (0, _wrapValidator2['default'])(validator, name, propType);
}
//# sourceMappingURL=keysOf.js.map