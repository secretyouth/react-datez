Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isInteger = require('./helpers/isInteger');

var _isInteger2 = _interopRequireDefault(_isInteger);

var _wrapValidator = require('./helpers/wrapValidator');

var _wrapValidator2 = _interopRequireDefault(_wrapValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function requiredInteger(props, propName, componentName) {
  var value = props[propName];
  if (value == null || !(0, _isInteger2['default'])(value)) {
    return new RangeError(String(propName) + ' in ' + String(componentName) + ' must be an integer');
  }
  return null;
}

var validator = function () {
  function integer(props, propName) {
    var value = props[propName];

    if (value == null) {
      return null;
    }

    for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      rest[_key - 2] = arguments[_key];
    }

    return requiredInteger.apply(undefined, [props, propName].concat(rest));
  }

  return integer;
}();

validator.isRequired = requiredInteger;

exports['default'] = function () {
  return (0, _wrapValidator2['default'])(validator, 'integer');
};
//# sourceMappingURL=integer.js.map