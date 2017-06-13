Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wrapValidator = require('./helpers/wrapValidator');

var _wrapValidator2 = _interopRequireDefault(_wrapValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function isNonNegative(x) {
  return typeof x === 'number' && isFinite(x) && x >= 0 && !Object.is(x, -0);
}

function nonNegativeNumber(props, propName, componentName) {
  var value = props[propName];

  if (value == null || isNonNegative(value)) {
    return null;
  }

  return new RangeError(String(propName) + ' in ' + String(componentName) + ' must be a non-negative number');
}

function requiredNonNegativeNumber(props, propName, componentName) {
  var value = props[propName];

  if (isNonNegative(value)) {
    return null;
  }

  return new RangeError(String(propName) + ' in ' + String(componentName) + ' must be a non-negative number');
}

nonNegativeNumber.isRequired = requiredNonNegativeNumber;

exports['default'] = function () {
  return (0, _wrapValidator2['default'])(nonNegativeNumber, 'nonNegativeNumber');
};
//# sourceMappingURL=nonNegativeNumber.js.map