Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = childrenSequenceOfValidator;

var _object = require('object.assign');

var _object2 = _interopRequireDefault(_object);

var _sequenceOf = require('./sequenceOf');

var _sequenceOf2 = _interopRequireDefault(_sequenceOf);

var _renderableChildren = require('./helpers/renderableChildren');

var _renderableChildren2 = _interopRequireDefault(_renderableChildren);

var _wrapValidator = require('./helpers/wrapValidator');

var _wrapValidator2 = _interopRequireDefault(_wrapValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function childrenSequenceOfValidator() {
  for (var _len = arguments.length, specifiers = Array(_len), _key = 0; _key < _len; _key++) {
    specifiers[_key] = arguments[_key];
  }

  var seq = _sequenceOf2['default'].apply(undefined, specifiers);

  var validator = function () {
    function childrenSequenceOf(props, propName, componentName) {
      if (propName !== 'children') {
        return new TypeError(String(componentName) + ' is using the childrenSequenceOf validator on non-children prop "' + String(propName) + '"');
      }

      var propValue = props[propName];
      var children = (0, _renderableChildren2['default'])(propValue);
      if (children.length === 0) {
        return null;
      }

      for (var _len2 = arguments.length, rest = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        rest[_key2 - 3] = arguments[_key2];
      }

      return seq.apply(undefined, [(0, _object2['default'])({}, props, { children: children }), propName, componentName].concat(rest));
    }

    return childrenSequenceOf;
  }();

  validator.isRequired = function () {
    function childrenSequenceOfRequired(props, propName, componentName) {
      if (propName !== 'children') {
        return new TypeError(String(componentName) + ' is using the childrenSequenceOf validator on non-children prop "' + String(propName) + '"');
      }

      var propValue = props[propName];
      var children = (0, _renderableChildren2['default'])(propValue);
      if (children.length === 0) {
        return new TypeError(String(componentName) + ': renderable children are required.');
      }

      for (var _len3 = arguments.length, rest = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
        rest[_key3 - 3] = arguments[_key3];
      }

      return seq.isRequired.apply(seq, [(0, _object2['default'])({}, props, { children: children }), propName, componentName].concat(rest));
    }

    return childrenSequenceOfRequired;
  }();

  return (0, _wrapValidator2['default'])(validator, 'childrenSequenceOf', specifiers);
}
//# sourceMappingURL=childrenSequenceOf.js.map