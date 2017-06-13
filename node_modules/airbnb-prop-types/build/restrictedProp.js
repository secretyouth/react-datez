Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wrapValidator = require('./helpers/wrapValidator');

var _wrapValidator2 = _interopRequireDefault(_wrapValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function customMessageWrapper(messsageFunction) {
  function restrictedProp(props, propName, componentName, location) {
    if (props[propName] == null) {
      return null;
    }

    if (messsageFunction && typeof messsageFunction === 'function') {
      for (var _len = arguments.length, rest = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
        rest[_key - 4] = arguments[_key];
      }

      return new TypeError(messsageFunction.apply(undefined, [props, propName, componentName, location].concat(rest)));
    }
    return new TypeError('The ' + String(propName) + ' ' + String(location) + ' on ' + String(componentName) + ' is not allowed.');
  }
  restrictedProp.isRequired = restrictedProp;
  return restrictedProp;
}

exports['default'] = function () {
  var messsageFunction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return (0, _wrapValidator2['default'])(customMessageWrapper(messsageFunction), 'restrictedProp');
};
//# sourceMappingURL=restrictedProp.js.map