Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayPrototype = require('array.prototype.find');

var _arrayPrototype2 = _interopRequireDefault(_arrayPrototype);

var _getComponentName = require('./helpers/getComponentName');

var _getComponentName2 = _interopRequireDefault(_getComponentName);

var _renderableChildren = require('./helpers/renderableChildren');

var _renderableChildren2 = _interopRequireDefault(_renderableChildren);

var _wrapValidator = require('./helpers/wrapValidator');

var _wrapValidator2 = _interopRequireDefault(_wrapValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function onlyTypes(types, children, componentName) {
  if (!children.every(function (child) {
    return child && (0, _arrayPrototype2['default'])(types, function (Type) {
      return Type === '*' || child.type === Type;
    });
  })) {
    var typeNames = types.map(_getComponentName2['default']).join(', or ');
    return new TypeError('`' + String(componentName) + '` only accepts children of type ' + String(typeNames));
  }
  return null;
}

function isRequired(types, children, componentName) {
  if (children.length === 0) {
    var typeNames = types.map(_getComponentName2['default']).join(', or ');
    return new TypeError('`' + String(componentName) + '` requires at least one node of type ' + String(typeNames));
  }
  return null;
}

function childrenOfType() {
  for (var _len = arguments.length, types = Array(_len), _key = 0; _key < _len; _key++) {
    types[_key] = arguments[_key];
  }

  if (types.length < 1) {
    throw new TypeError('childrenOfType: at least 1 type is required');
  }

  function validator(props, propName, componentName) {
    return onlyTypes(types, (0, _renderableChildren2['default'])(props[propName]), componentName);
  }

  validator.isRequired = function (props, propName, componentName) {
    var children = (0, _renderableChildren2['default'])(props[propName]);
    return isRequired(types, children, componentName) || onlyTypes(types, children, componentName);
  };

  return (0, _wrapValidator2['default'])(validator, 'childrenOfType', types);
}

exports['default'] = childrenOfType;
//# sourceMappingURL=childrenOfType.js.map