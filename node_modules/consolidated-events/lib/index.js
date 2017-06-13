Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EVENT_HANDLERS_KEY = undefined;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;

var _normalizeEventOptions = require('./normalizeEventOptions');

var _normalizeEventOptions2 = _interopRequireDefault(_normalizeEventOptions);

var _TargetEventHandlers = require('./TargetEventHandlers');

var _TargetEventHandlers2 = _interopRequireDefault(_TargetEventHandlers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Export to make testing possible.
var EVENT_HANDLERS_KEY = exports.EVENT_HANDLERS_KEY = '__consolidated_events_handlers__';

function addEventListener(target, eventName, listener, options) {
  if (!target[EVENT_HANDLERS_KEY]) {
    // eslint-disable-next-line no-param-reassign
    target[EVENT_HANDLERS_KEY] = new _TargetEventHandlers2['default'](target);
  }
  var normalizedEventOptions = (0, _normalizeEventOptions2['default'])(options);
  return target[EVENT_HANDLERS_KEY].add(eventName, listener, normalizedEventOptions);
}

function removeEventListener(eventHandle) {
  var target = eventHandle.target;

  // There can be a race condition where the target may no longer exist when
  // this function is called, e.g. when a React component is unmounting.
  // Guarding against this prevents the following error:
  //
  //   Cannot read property 'removeEventListener' of undefined

  if (target) {
    target[EVENT_HANDLERS_KEY]['delete'](eventHandle);
  }
}