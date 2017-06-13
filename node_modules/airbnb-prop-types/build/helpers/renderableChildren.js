Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = renderableChildren;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function renderableChildren(childrenProp) {
  return _react2['default'].Children.toArray(childrenProp).filter(function (child) {
    return child === 0 || child;
  });
}
//# sourceMappingURL=renderableChildren.js.map