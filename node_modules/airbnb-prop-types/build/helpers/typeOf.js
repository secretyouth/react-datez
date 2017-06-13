Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = typeOf;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function typeOf(child) {
  if (child === null) {
    return 'null';
  }
  if (Array.isArray(child)) {
    return 'array';
  }
  if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) !== 'object') {
    return typeof child === 'undefined' ? 'undefined' : _typeof(child);
  }
  if (_react2['default'].isValidElement(child)) {
    return child.type;
  }
  return child;
}
//# sourceMappingURL=typeOf.js.map