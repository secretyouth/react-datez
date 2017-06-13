Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = elementTypeValidator;

var _propTypes = require('prop-types');

var _and = require('./and');

var _and2 = _interopRequireDefault(_and);

var _getComponentName = require('./helpers/getComponentName');

var _getComponentName2 = _interopRequireDefault(_getComponentName);

var _wrapValidator = require('./helpers/wrapValidator');

var _wrapValidator2 = _interopRequireDefault(_wrapValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getTypeName(Type) {
  if (typeof Type === 'string') {
    return Type;
  }
  var type = (0, _getComponentName2['default'])(Type);

  /* istanbul ignore next */ // in environments where functions do not have names
  return type || 'Anonymous Component';
}

function validateElementType(Type, props, propName, componentName) {
  var type = props[propName].type;


  if (type === Type) {
    return null;
  }

  return new TypeError(String(componentName) + '.' + String(propName) + ' must be a React element of type ' + String(getTypeName(Type)));
}

function elementTypeValidator(Type) {
  if (Type === '*') {
    return (0, _wrapValidator2['default'])(_propTypes.element, 'elementType(*)', Type);
  }

  if (typeof Type !== 'string' && typeof Type !== 'function') {
    throw new TypeError('Type must be a React Component, an HTML element tag name, or "*". Got an ' + (typeof Type === 'undefined' ? 'undefined' : _typeof(Type)));
  }

  function elementType(props, propName, componentName) {
    if (props[propName] == null) {
      return null;
    }

    for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    return validateElementType.apply(undefined, [Type, props, propName, componentName].concat(rest));
  }
  elementType.isRequired = elementType; // covered by and + element

  var typeName = getTypeName(Type);
  var validatorName = 'elementType(' + String(typeName) + ')';
  return (0, _wrapValidator2['default'])((0, _and2['default'])([_propTypes.element, elementType], validatorName), validatorName, Type);
}
//# sourceMappingURL=elementType.js.map