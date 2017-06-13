Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = mutuallyExclusiveOfType;

var _object = require('object.assign');

var _object2 = _interopRequireDefault(_object);

var _wrapValidator = require('./helpers/wrapValidator');

var _wrapValidator2 = _interopRequireDefault(_wrapValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function mutuallyExclusiveOfType(propType) {
  if (typeof propType !== 'function') {
    throw new TypeError('a propType is required');
  }

  for (var _len = arguments.length, exclusiveProps = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    exclusiveProps[_key - 1] = arguments[_key];
  }

  if (exclusiveProps.length < 1) {
    throw new TypeError('at least one prop that is mutually exclusive with this propType is required');
  }

  var propList = exclusiveProps.join(', or ');

  var map = exclusiveProps.reduce(function (acc, prop) {
    return (0, _object2['default'])({}, acc, _defineProperty({}, prop, true));
  }, {});
  var countProps = function countProps(count, prop) {
    return count + (map[prop] ? 1 : 0);
  };

  var validator = function () {
    function mutuallyExclusiveProps(props, propName, componentName) {
      var exclusivePropCount = Object.keys(props).filter(function (prop) {
        return props[prop] != null;
      }).reduce(countProps, 0);
      if (exclusivePropCount > 1) {
        return new Error('A ' + String(componentName) + ' cannot have more than one of these props: ' + String(propList));
      }

      for (var _len2 = arguments.length, rest = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        rest[_key2 - 3] = arguments[_key2];
      }

      return propType.apply(undefined, [props, propName, componentName].concat(rest));
    }

    return mutuallyExclusiveProps;
  }();

  validator.isRequired = function () {
    function mutuallyExclusivePropsRequired(props, propName, componentName) {
      var exclusivePropCount = Object.keys(props).filter(function (prop) {
        return prop === propName || props[prop] != null;
      }).reduce(countProps, 0);
      if (exclusivePropCount > 1) {
        return new Error('A ' + String(componentName) + ' cannot have more than one of these props: ' + String(propList));
      }

      for (var _len3 = arguments.length, rest = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
        rest[_key3 - 3] = arguments[_key3];
      }

      return propType.apply(undefined, [props, propName, componentName].concat(rest));
    }

    return mutuallyExclusivePropsRequired;
  }();

  return (0, _wrapValidator2['default'])(validator, 'mutuallyExclusiveProps:' + String(propList), exclusiveProps);
}
//# sourceMappingURL=mutuallyExclusiveProps.js.map