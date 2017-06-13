Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isPlainObject = require('./helpers/isPlainObject');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _typeOf = require('./helpers/typeOf');

var _typeOf2 = _interopRequireDefault(_typeOf);

var _wrapValidator = require('./helpers/wrapValidator');

var _wrapValidator2 = _interopRequireDefault(_wrapValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/*
  code adapted from https://github.com/facebook/react/blob/14156e56b9cf18ac86963185c5af4abddf3ff811/src/isomorphic/classic/types/ReactPropTypes.js#L202-L206
  so that it can be called outside of React's normal PropType flow
*/

var ReactPropTypeLocationNames = {
  prop: 'prop',
  context: 'context',
  childContext: 'child context'
};

function object(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  if (propValue == null) {
    return null;
  }

  if ((0, _isPlainObject2['default'])(propValue)) {
    return null;
  }
  var locationName = ReactPropTypeLocationNames[location] || location;
  return new TypeError('Invalid ' + String(locationName) + ' `' + String(propFullName) + '` of type `' + String((0, _typeOf2['default'])(propValue)) + '` supplied to `' + String(componentName) + '`, expected `object`.');
}
object.isRequired = function () {
  function objectRequired(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    if (propValue == null) {
      var locationName = ReactPropTypeLocationNames[location] || location;
      return new TypeError('The ' + String(locationName) + ' `' + String(propFullName) + '` is marked as required in `' + String(componentName) + '`, but its value is `' + String(propValue) + '`.');
    }

    for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    return object.apply(undefined, [props, propName, componentName, location, propFullName].concat(rest));
  }

  return objectRequired;
}();

exports['default'] = function () {
  return (0, _wrapValidator2['default'])(object, 'object');
};
//# sourceMappingURL=object.js.map