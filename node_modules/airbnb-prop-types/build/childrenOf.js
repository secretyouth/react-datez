Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = childrenOf;

var _object = require('object.assign');

var _object2 = _interopRequireDefault(_object);

var _renderableChildren = require('./helpers/renderableChildren');

var _renderableChildren2 = _interopRequireDefault(_renderableChildren);

var _wrapValidator = require('./helpers/wrapValidator');

var _wrapValidator2 = _interopRequireDefault(_wrapValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function validateChildren(propType, children, props) {
  for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    rest[_key - 3] = arguments[_key];
  }

  var error = void 0;
  children.some(function (child) {
    error = propType.apply(undefined, [(0, _object2['default'])({}, props, { children: child }), 'children'].concat(rest));
    return error;
  });

  return error || null;
}

function childrenOf(propType) {
  function childrenOfPropType(props, propName, componentName) {
    if (propName !== 'children') {
      return new TypeError(String(componentName) + ' is using the childrenOf validator on non-children prop "' + String(propName) + '"');
    }

    var propValue = props[propName];

    if (propValue == null) {
      return null;
    }
    var children = (0, _renderableChildren2['default'])(propValue);
    if (children.length === 0) {
      return null;
    }

    for (var _len2 = arguments.length, rest = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    return validateChildren.apply(undefined, [propType, children, props, componentName].concat(rest));
  }

  childrenOfPropType.isRequired = function (props, propName, componentName) {
    for (var _len3 = arguments.length, rest = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
      rest[_key3 - 3] = arguments[_key3];
    }

    if (propName !== 'children') {
      return new TypeError(String(componentName) + ' is using the childrenOf validator on non-children prop "' + String(propName) + '"');
    }

    var children = (0, _renderableChildren2['default'])(props[propName]);
    if (children.length === 0) {
      return new TypeError('`' + String(componentName) + '` requires at least one node of type ' + String(propType.typeName || propType.name));
    }

    return validateChildren.apply(undefined, [propType, children, props, componentName].concat(rest));
  };

  return (0, _wrapValidator2['default'])(childrenOfPropType, 'childrenOf', propType);
}
//# sourceMappingURL=childrenOf.js.map