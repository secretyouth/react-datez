Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = childrenHavePropXorChildren;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _wrapValidator = require('./helpers/wrapValidator');

var _wrapValidator2 = _interopRequireDefault(_wrapValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function childrenHavePropXorChildren(prop) {
  if (typeof prop !== 'string' && (typeof prop === 'undefined' ? 'undefined' : _typeof(prop)) !== 'symbol') {
    throw new TypeError('invalid prop: must be string or symbol');
  }

  var validator = function () {
    function childrenHavePropXorChildrenWithProp(_ref, _, componentName) {
      var children = _ref.children;

      var truthyChildrenCount = 0;
      var propCount = 0;
      var grandchildrenCount = 0;

      _react2['default'].Children.forEach(children, function (child) {
        if (!child) {
          return;
        }

        truthyChildrenCount += 1;

        if (child.props[prop]) {
          propCount += 1;
        }

        if (_react2['default'].Children.count(child.props.children)) {
          grandchildrenCount += 1;
        }
      });

      if (propCount === truthyChildrenCount && grandchildrenCount === 0 || propCount === 0 && grandchildrenCount === truthyChildrenCount || propCount === 0 && grandchildrenCount === 0) {
        return null;
      }

      return new TypeError('`' + String(componentName) + '` requires children to all have prop \u201C' + String(prop) + '\u201D, all have children, or all have neither.');
    }

    return childrenHavePropXorChildrenWithProp;
  }();
  validator.isRequired = validator;

  return (0, _wrapValidator2['default'])(validator, 'childrenHavePropXorChildrenWithProp:' + String(prop), prop);
}
//# sourceMappingURL=childrenHavePropXorChildren.js.map