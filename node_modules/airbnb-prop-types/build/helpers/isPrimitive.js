Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPrimitive;
function isPrimitive(x) {
  return !x || (typeof x === 'undefined' ? 'undefined' : _typeof(x)) !== 'object' && typeof x !== 'function';
}
//# sourceMappingURL=isPrimitive.js.map