Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = mutuallyExclusiveTrue;

var _propTypes = require('prop-types');

var _wrapValidator = require('./helpers/wrapValidator');

var _wrapValidator2 = _interopRequireDefault(_wrapValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function mutuallyExclusiveTrue() {
  for (var _len = arguments.length, exclusiveProps = Array(_len), _key = 0; _key < _len; _key++) {
    exclusiveProps[_key] = arguments[_key];
  }

  if (exclusiveProps.length < 1) {
    throw new TypeError('at least one prop that is mutually exclusive is required');
  }
  if (!exclusiveProps.every(function (x) {
    return typeof x === 'string';
  })) {
    throw new TypeError('all exclusive true props must be strings');
  }

  var propsList = exclusiveProps.join(', or ');

  var validator = function () {
    function mutuallyExclusiveTrueProps(props, propName, componentName) {
      var countProps = function () {
        function countProps(count, prop) {
          return count + (props[prop] ? 1 : 0);
        }

        return countProps;
      }();

      var exclusivePropCount = exclusiveProps.reduce(countProps, 0);
      if (exclusivePropCount > 1) {
        return new Error('A ' + String(componentName) + ' cannot have more than one of these boolean props be true: ' + String(propsList));
      }

      for (var _len2 = arguments.length, rest = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        rest[_key2 - 3] = arguments[_key2];
      }

      return _propTypes.bool.apply(undefined, [props, propName, componentName].concat(rest));
    }

    return mutuallyExclusiveTrueProps;
  }();

  validator.isRequired = function () {
    function mutuallyExclusiveTruePropsRequired(props, propName, componentName) {
      var countProps = function () {
        function countProps(count, prop) {
          return count + (props[prop] ? 1 : 0);
        }

        return countProps;
      }();

      var exclusivePropCount = exclusiveProps.reduce(countProps, 0);
      if (exclusivePropCount > 1) {
        return new Error('A ' + String(componentName) + ' cannot have more than one of these boolean props be true: ' + String(propsList));
      }

      for (var _len3 = arguments.length, rest = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
        rest[_key3 - 3] = arguments[_key3];
      }

      return _propTypes.bool.isRequired.apply(_propTypes.bool, [props, propName, componentName].concat(rest));
    }

    return mutuallyExclusiveTruePropsRequired;
  }();

  return (0, _wrapValidator2['default'])(validator, 'mutuallyExclusiveTrueProps: ' + String(propsList), exclusiveProps);
}
//# sourceMappingURL=mutuallyExclusiveTrueProps.js.map