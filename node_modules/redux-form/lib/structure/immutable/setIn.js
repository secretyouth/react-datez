'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toPath2 = require('lodash/toPath');

var _toPath3 = _interopRequireDefault(_toPath2);

exports.default = setIn;

var _immutable = require('immutable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arrayPattern = /\[(\d+)\]/;

var undefinedArrayMerge = function undefinedArrayMerge(previous, next) {
  return next !== undefined ? next : previous;
};

var mergeLists = function mergeLists(original, value) {
  return original && _immutable.List.isList(original) ? original.mergeDeepWith(undefinedArrayMerge, value) : value;
};

/*
 * ImmutableJS' setIn function doesn't support array (List) creation
 * so we must pre-insert all arrays in the path ahead of time.
 * 
 * Additionally we must also pre-set a dummy Map at the location
 * of an array index if there's parts that come afterwards because 
 * the setIn function uses `{}` to mark an unset value instead of 
 * undefined (which is the case for list / arrays).
 */
function setIn(state, field, value) {
  var path = (0, _toPath3.default)(field);
  if (!field || typeof field !== 'string' || !arrayPattern.test(field)) {
    return state.setIn(path, value);
  }

  return state.withMutations(function (mutable) {
    var _loop = function _loop(pathIndex) {
      var nextPart = path[pathIndex + 1];
      if (isNaN(nextPart)) {
        return 'continue';
      }

      var arr = [];
      arr[nextPart] = new _immutable.Map();
      mutable = mutable.updateIn(path.slice(0, pathIndex + 1), function (value) {
        return mergeLists(value, new _immutable.List(arr));
      });
    };

    for (var pathIndex = 0; pathIndex < path.length - 1; ++pathIndex) {
      var _ret = _loop(pathIndex);

      if (_ret === 'continue') continue;
    }

    return mutable.setIn(path, value);
  });
}