Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = nChildren;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _wrapValidator = require('./helpers/wrapValidator');

var _wrapValidator2 = _interopRequireDefault(_wrapValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function nChildren(n) {
  var propType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _propTypes.node;

  if (typeof n !== 'number' || isNaN(n) || n < 0) {
    throw new TypeError('a non-negative number is required');
  }

  var validator = function () {
    function nChildrenValidator(props, propName, componentName) {
      if (propName !== 'children') {
        return new TypeError(String(componentName) + ' is using the nChildren validator on a non-children prop');
      }

      var children = props.children;

      var childrenCount = _react2['default'].Children.count(children);

      if (childrenCount !== n) {
        return new RangeError(String(componentName) + ' expects to receive ' + String(n) + ' children, but received ' + String(childrenCount) + ' children.');
      }

      for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        rest[_key - 3] = arguments[_key];
      }

      return propType.apply(undefined, [props, propName, componentName].concat(rest));
    }

    return nChildrenValidator;
  }();
  validator.isRequired = validator;

  return (0, _wrapValidator2['default'])(validator, 'nChildren:' + String(n), n);
}
//# sourceMappingURL=nChildren.js.map