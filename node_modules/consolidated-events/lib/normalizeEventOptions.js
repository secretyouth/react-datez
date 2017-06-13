Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = normalizeEventOptions;

var _canUsePassiveEventListeners = require('./canUsePassiveEventListeners');

var _canUsePassiveEventListeners2 = _interopRequireDefault(_canUsePassiveEventListeners);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function normalizeEventOptions(eventOptions) {
  if (!eventOptions) {
    return undefined;
  }

  if (!(0, _canUsePassiveEventListeners2['default'])()) {
    // If the browser does not support the passive option, then it is expecting
    // a boolean for the options argument to specify whether it should use
    // capture or not. In more modern browsers, this is passed via the `capture`
    // option, so let's just hoist that value up.
    return !!eventOptions.capture;
  }

  return eventOptions;
}