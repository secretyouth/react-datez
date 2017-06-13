Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = or;

var _propTypes = require('prop-types');

var _wrapValidator = require('./helpers/wrapValidator');

var _wrapValidator2 = _interopRequireDefault(_wrapValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function oneOfTypeValidator(validators) {
  var validator = function () {
    function oneOfType(props, propName, componentName) {
      for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        rest[_key - 3] = arguments[_key];
      }

      if (typeof props[propName] === 'undefined') {
        return null;
      }

      var errors = validators.map(function (v) {
        return v.apply(undefined, [props, propName, componentName].concat(rest));
      }).filter(Boolean);

      if (errors.length < validators.length) {
        return null;
      }
      return new TypeError(String(componentName) + ': invalid value supplied to ' + String(propName) + '.');
    }

    return oneOfType;
  }();
  validator.isRequired = function () {
    function oneOfTypeRequired(props, propName, componentName) {
      for (var _len2 = arguments.length, rest = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        rest[_key2 - 3] = arguments[_key2];
      }

      if (typeof props[propName] === 'undefined') {
        return new TypeError(String(componentName) + ': missing value for required ' + String(propName) + '.');
      }

      var errors = validators.map(function (v) {
        return v.apply(undefined, [props, propName, componentName].concat(rest));
      }).filter(Boolean);

      if (errors.length === validators.length) {
        return new TypeError(String(componentName) + ': invalid value ' + String(errors) + ' supplied to required ' + String(propName) + '.');
      }
      return null;
    }

    return oneOfTypeRequired;
  }();
  return (0, _wrapValidator2['default'])(validator, 'oneOfType', validators);
}

function or(validators) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'or';

  if (!Array.isArray(validators)) {
    throw new TypeError('or: 2 or more validators are required');
  }
  if (validators.length <= 1) {
    throw new RangeError('or: 2 or more validators are required');
  }

  var validator = oneOfTypeValidator([(0, _propTypes.arrayOf)(oneOfTypeValidator(validators))].concat(_toConsumableArray(validators)));

  return (0, _wrapValidator2['default'])(validator, name, validators);
}
//# sourceMappingURL=or.js.map