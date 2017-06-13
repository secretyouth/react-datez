Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _wrapValidator = require('./helpers/wrapValidator');

var _wrapValidator2 = _interopRequireDefault(_wrapValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function explicitNull(props, propName, componentName) {
  if (props[propName] == null) {
    return null;
  }
  return new TypeError(String(componentName) + ': prop \u201C' + String(propName) + '\u201D must be null or undefined; received ' + _typeof(props[propName]));
}
explicitNull.isRequired = function () {
  function explicitNullRequired(props, propName, componentName) {
    if (props[propName] === null) {
      return null;
    }
    return new TypeError(String(componentName) + ': prop \u201C' + String(propName) + '\u201D must be null; received ' + _typeof(props[propName]));
  }

  return explicitNullRequired;
}();

exports['default'] = function () {
  return (0, _wrapValidator2['default'])(explicitNull, 'explicitNull');
};
//# sourceMappingURL=explicitNull.js.map