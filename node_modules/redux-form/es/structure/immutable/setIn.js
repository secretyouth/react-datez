import _toPath from 'lodash-es/toPath';
import { List, Map } from 'immutable';


var arrayPattern = /\[(\d+)\]/;

var undefinedArrayMerge = function undefinedArrayMerge(previous, next) {
  return next !== undefined ? next : previous;
};

var mergeLists = function mergeLists(original, value) {
  return original && List.isList(original) ? original.mergeDeepWith(undefinedArrayMerge, value) : value;
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
export default function setIn(state, field, value) {
  var path = _toPath(field);
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
      arr[nextPart] = new Map();
      mutable = mutable.updateIn(path.slice(0, pathIndex + 1), function (value) {
        return mergeLists(value, new List(arr));
      });
    };

    for (var pathIndex = 0; pathIndex < path.length - 1; ++pathIndex) {
      var _ret = _loop(pathIndex);

      if (_ret === 'continue') continue;
    }

    return mutable.setIn(path, value);
  });
}