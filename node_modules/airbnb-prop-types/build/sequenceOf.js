Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = sequenceOfValidator;

var _object = require('object.assign');

var _object2 = _interopRequireDefault(_object);

var _propTypes = require('prop-types');

var _and = require('./and');

var _and2 = _interopRequireDefault(_and);

var _between = require('./between');

var _between2 = _interopRequireDefault(_between);

var _nonNegativeInteger = require('./nonNegativeInteger');

var _nonNegativeInteger2 = _interopRequireDefault(_nonNegativeInteger);

var _object3 = require('./object');

var _object4 = _interopRequireDefault(_object3);

var _withShape = require('./withShape');

var _withShape2 = _interopRequireDefault(_withShape);

var _typeOf = require('./helpers/typeOf');

var _typeOf2 = _interopRequireDefault(_typeOf);

var _wrapValidator = require('./helpers/wrapValidator');

var _wrapValidator2 = _interopRequireDefault(_wrapValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var minValidator = _nonNegativeInteger2['default'];
var maxValidator = (0, _and2['default'])([_nonNegativeInteger2['default'], (0, _between2['default'])({ gte: 1 })]);

function validateRange(min, max) {
  if (typeof max !== 'number' || typeof min !== 'number') {
    return null; // no additional checking needed unless both are present
  }

  if (min <= max) {
    return null;
  }
  return new RangeError('min must be less than or equal to max');
}

var specifierShape = {
  validator: function () {
    function validator(props, propName) {
      if (typeof props[propName] !== 'function') {
        return new TypeError('"validator" must be a propType validator function');
      }
      return null;
    }

    return validator;
  }(),
  min: function () {
    function min(props, propName) {
      return minValidator(props, propName) || validateRange(props.min, props.max);
    }

    return min;
  }(),
  max: function () {
    function max(props, propName) {
      return maxValidator(props, propName) || validateRange(props.min, props.max);
    }

    return max;
  }()
};

function getMinMax(_ref) {
  var min = _ref.min,
      max = _ref.max;

  var minimum = void 0;
  var maximum = void 0;
  if (typeof min !== 'number' && typeof max !== 'number') {
    // neither provided, default to "1"
    minimum = 1;
    maximum = 1;
  } else {
    minimum = typeof min === 'number' ? min : 1;
    maximum = typeof max === 'number' ? max : Infinity;
  }
  return { minimum: minimum, maximum: maximum };
}

function chunkByType(items) {
  var chunk = [];
  var lastType = void 0;
  return items.reduce(function (chunks, item) {
    var itemType = (0, _typeOf2['default'])(item);
    if (!lastType || itemType === lastType) {
      chunk.push(item);
    } else {
      chunks.push(chunk);
      chunk = [item];
    }
    lastType = itemType;
    return chunks;
  }, []).concat(chunk.length > 0 ? [chunk] : []);
}

function validateChunks(specifiers, props, propName, componentName) {
  var items = props[propName];
  var chunks = chunkByType(items);

  for (var _len = arguments.length, rest = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    rest[_key - 4] = arguments[_key];
  }

  for (var i = 0; i < specifiers.length; i += 1) {
    var _specifiers$i = specifiers[i],
        validator = _specifiers$i.validator,
        min = _specifiers$i.min,
        max = _specifiers$i.max;

    var _getMinMax = getMinMax({ min: min, max: max }),
        minimum = _getMinMax.minimum,
        maximum = _getMinMax.maximum;

    if (chunks.length === 0 && minimum === 0) {
      // no chunks left, but this specifier does not require any items
      continue; // eslint-disable-line no-continue
    }

    var arrayOfValidator = (0, _propTypes.arrayOf)(validator).isRequired;

    var chunk = chunks.shift(); // extract the next chunk to test

    var chunkError = arrayOfValidator.apply(undefined, [(0, _object2['default'])({}, props, _defineProperty({}, propName, chunk)), propName, componentName].concat(rest));

    if (chunkError) {
      // this chunk is invalid
      if (minimum === 0) {
        // but, specifier has a min of 0 and can be skipped
        chunks.unshift(chunk); // put the chunk back, for the next iteration
        continue; // eslint-disable-line no-continue
      }
      return chunkError;
    }

    // chunk is valid!

    if (chunk.length < minimum) {
      return new RangeError(String(componentName) + ': specifier index ' + i + ' requires a minimum of ' + String(min) + ' items, but only has ' + String(chunk.length) + '.');
    }

    if (chunk.length > maximum) {
      return new RangeError(String(componentName) + ': specifier index ' + i + ' requires a maximum of ' + String(max) + ' items, but has ' + String(chunk.length) + '.');
    }
  }

  if (chunks.length > 0) {
    return new TypeError(String(componentName) + ': after all ' + String(specifiers.length) + ' specifiers matched, ' + String(chunks.length) + ' types of items were remaining.');
  }

  return null;
}

var specifierValidator = (0, _withShape2['default'])((0, _object4['default'])(), specifierShape).isRequired;

function sequenceOfValidator() {
  for (var _len2 = arguments.length, specifiers = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    specifiers[_key2] = arguments[_key2];
  }

  if (specifiers.length === 0) {
    throw new RangeError('sequenceOf: at least one specifier is required');
  }

  var errors = specifiers.map(function (specifier, i) {
    return specifierValidator({ specifier: specifier }, 'specifier', 'sequenceOf specifier', 'suequenceOf specifier, index ' + String(i), 'specifier, index ' + String(i));
  });
  if (errors.some(Boolean)) {
    throw new TypeError('\n      sequenceOf: all specifiers must match the appropriate shape.\n\n      Errors:\n        ' + String(errors.map(function (e, i) {
      return ' - Argument index ' + String(i) + ': ' + String(e.message);
    }).join(',\n        ')) + '\n    ');
  }

  var validator = function () {
    function sequenceOf(props, propName) {
      var propValue = props[propName];

      if (propValue == null) {
        return null;
      }

      for (var _len3 = arguments.length, rest = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        rest[_key3 - 2] = arguments[_key3];
      }

      var error = _propTypes.array.apply(undefined, [props, propName].concat(rest));
      if (error) {
        return error;
      }

      return validateChunks.apply(undefined, [specifiers, props, propName].concat(rest));
    }

    return sequenceOf;
  }();

  validator.isRequired = function () {
    function sequenceOfRequired(props, propName, componentName) {
      for (var _len4 = arguments.length, rest = Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
        rest[_key4 - 3] = arguments[_key4];
      }

      var error = _propTypes.array.isRequired.apply(_propTypes.array, [props, propName, componentName].concat(rest));
      if (error) {
        return error;
      }

      return validateChunks.apply(undefined, [specifiers, props, propName, componentName].concat(rest));
    }

    return sequenceOfRequired;
  }();

  return (0, _wrapValidator2['default'])(validator, 'sequenceOf', specifiers);
}
//# sourceMappingURL=sequenceOf.js.map