Object.defineProperty(exports, "__esModule", {
  value: true
});
var floor = Math.floor;

var finite = isFinite;

exports['default'] = Number.isInteger || /* istanbul ignore next */function (x) {
  return typeof x === 'number' && finite(x) && floor(x) === x;
};
//# sourceMappingURL=isInteger.js.map