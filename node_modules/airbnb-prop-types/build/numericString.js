Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _wrapValidator = require('./helpers/wrapValidator');

var _wrapValidator2 = _interopRequireDefault(_wrapValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var validNumericChars = /^[-+]?(?:[1-9][0-9]*(?:\.[0-9]+)?|0|0\.[0-9]+)$/;

var validator = function () {
  function numericString(props, propName, componentName) {
    if (props[propName] == null) {
      return null;
    }

    for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    var stringError = _propTypes.string.apply(undefined, [props, propName, componentName].concat(rest));
    if (stringError) {
      return stringError;
    }

    var value = props[propName];

    var passesRegex = validNumericChars.test(value);
    if (passesRegex) {
      return null;
    }

    return new TypeError(String(componentName) + ': prop "' + String(propName) + '" (value "' + String(value) + '") must be a numeric string:\n    - starting with an optional + or -\n    - that does not have a leading zero\n    - with an optional decimal part (that contains only one decimal point, if present)\n    - that otherwise only contains digits (0-9)\n    - not +-NaN, or +-Infinity\n  ');
  }

  return numericString;
}();

validator.isRequired = function () {
  function numericStringRequired(props, propName, componentName) {
    if (props[propName] == null) {
      return new TypeError(String(componentName) + ': ' + String(propName) + ' is required');
    }

    for (var _len2 = arguments.length, rest = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    return validator.apply(undefined, [props, propName, componentName].concat(rest));
  }

  return numericStringRequired;
}();

exports['default'] = function () {
  return (0, _wrapValidator2['default'])(validator, 'numericString');
};
//# sourceMappingURL=numericString.js.map