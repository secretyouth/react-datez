Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = andValidator;

var _wrapValidator = require('./helpers/wrapValidator');

var _wrapValidator2 = _interopRequireDefault(_wrapValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function andValidator(validators) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'and';

  if (!Array.isArray(validators)) {
    throw new TypeError('and: 2 or more validators are required');
  }
  if (validators.length <= 1) {
    throw new RangeError('and: 2 or more validators are required');
  }

  var validator = function () {
    function and() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var firstError = null;
      validators.some(function (validatorFn) {
        firstError = validatorFn.apply(undefined, args);
        return firstError != null;
      });
      return firstError == null ? null : firstError;
    }

    return and;
  }();

  validator.isRequired = function () {
    function andIsRequired() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var firstError = null;
      validators.some(function (validatorFn) {
        firstError = validatorFn.isRequired.apply(validatorFn, args);
        return firstError != null;
      });
      return firstError == null ? null : firstError;
    }

    return andIsRequired;
  }();

  return (0, _wrapValidator2['default'])(validator, name, validators);
}
//# sourceMappingURL=and.js.map