Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = range;

var _and = require('./and');

var _and2 = _interopRequireDefault(_and);

var _between = require('./between');

var _between2 = _interopRequireDefault(_between);

var _integer = require('./integer');

var _integer2 = _interopRequireDefault(_integer);

var _isInteger = require('./helpers/isInteger');

var _isInteger2 = _interopRequireDefault(_isInteger);

var _wrapValidator = require('./helpers/wrapValidator');

var _wrapValidator2 = _interopRequireDefault(_wrapValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */Math.pow(2, 53) - 1;

function isValidLength(x) {
  return (0, _isInteger2['default'])(x) && Math.abs(x) < MAX_SAFE_INTEGER;
}

function range(min, max) {
  if (!isValidLength(min) || !isValidLength(max)) {
    throw new RangeError('"range" requires two integers: ' + String(min) + ' and ' + String(max) + ' given');
  }
  if (min === max) {
    throw new RangeError('min and max must not be the same');
  }
  return (0, _wrapValidator2['default'])((0, _and2['default'])([(0, _integer2['default'])(), (0, _between2['default'])({ gte: min, lt: max })], 'range'), 'range', { min: min, max: max });
}
//# sourceMappingURL=range.js.map