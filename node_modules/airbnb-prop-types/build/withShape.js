Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = withShape;

var _and = require('./and');

var _and2 = _interopRequireDefault(_and);

var _shape = require('./shape');

var _shape2 = _interopRequireDefault(_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function withShape(type, shapeTypes) {
  if (typeof type !== 'function') {
    throw new TypeError('type must be a valid PropType');
  }
  var shapeValidator = (0, _shape2['default'])(shapeTypes);
  return (0, _and2['default'])([type, shapeValidator], 'withShape');
}
//# sourceMappingURL=withShape.js.map