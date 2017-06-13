Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = componentWithName;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isRegex = require('is-regex');

var _isRegex2 = _interopRequireDefault(_isRegex);

var _arrayPrototype = require('array.prototype.find');

var _arrayPrototype2 = _interopRequireDefault(_arrayPrototype);

var _getComponentName = require('./helpers/getComponentName');

var _getComponentName2 = _interopRequireDefault(_getComponentName);

var _wrapValidator = require('./helpers/wrapValidator');

var _wrapValidator2 = _interopRequireDefault(_wrapValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function hasName(name, prop, propName, componentName) {
  for (var _len = arguments.length, rest = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    rest[_key - 4] = arguments[_key];
  }

  if (Array.isArray(prop)) {
    return (0, _arrayPrototype2['default'])(prop.map(function (item) {
      return hasName.apply(undefined, [name, item, propName, componentName].concat(rest));
    }), Boolean) || null;
  }

  if (!_react2['default'].isValidElement(prop)) {
    return new TypeError(String(componentName) + '.' + String(propName) + ' is not a valid React element');
  }

  var type = prop.type;

  var componentNameFromType = (0, _getComponentName2['default'])(type);

  if ((0, _isRegex2['default'])(name) && !name.test(componentNameFromType)) {
    return new TypeError('`' + String(componentName) + '.' + String(propName) + '` only accepts components matching the regular expression ' + String(name));
  }

  if (!(0, _isRegex2['default'])(name) && componentNameFromType !== name) {
    return new TypeError('`' + String(componentName) + '.' + String(propName) + '` only accepts components named ' + String(name));
  }

  return null;
}

function componentWithName(name) {
  if (typeof name !== 'string' && !(0, _isRegex2['default'])(name)) {
    throw new TypeError('name must be a string or a regex');
  }

  function componentWithNameValidator(props, propName, componentName) {
    var prop = props[propName];
    if (props[propName] == null) {
      return null;
    }

    for (var _len2 = arguments.length, rest = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    return hasName.apply(undefined, [name, prop, propName, componentName].concat(rest));
  }

  componentWithNameValidator.isRequired = function () {
    function componentWithNameRequired(props, propName, componentName) {
      var prop = props[propName];
      if (prop == null) {
        return new TypeError('`' + String(componentName) + '.' + String(propName) + '` requires at least one component named ' + String(name));
      }

      for (var _len3 = arguments.length, rest = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
        rest[_key3 - 3] = arguments[_key3];
      }

      return hasName.apply(undefined, [name, prop, propName, componentName].concat(rest));
    }

    return componentWithNameRequired;
  }();

  return (0, _wrapValidator2['default'])(componentWithNameValidator, 'componentWithName:' + String(name), name);
}
//# sourceMappingURL=componentWithName.js.map