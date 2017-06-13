Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventOptionsKey = require('./eventOptionsKey');

var _eventOptionsKey2 = _interopRequireDefault(_eventOptionsKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TargetEventHandlers = function () {
  function TargetEventHandlers(target) {
    _classCallCheck(this, TargetEventHandlers);

    this.target = target;
    this.events = {};
  }

  _createClass(TargetEventHandlers, [{
    key: 'getEventHandlers',
    value: function () {
      function getEventHandlers(eventName, options) {
        var key = String(eventName) + ' ' + String((0, _eventOptionsKey2['default'])(options));

        if (!this.events[key]) {
          this.events[key] = {
            size: 0,
            index: 0,
            handlers: {},
            handleEvent: undefined
          };
        }
        return this.events[key];
      }

      return getEventHandlers;
    }()
  }, {
    key: 'handleEvent',
    value: function () {
      function handleEvent(eventName, options, event) {
        var _getEventHandlers = this.getEventHandlers(eventName, options),
            handlers = _getEventHandlers.handlers;

        Object.keys(handlers).forEach(function (index) {
          var handler = handlers[index];
          if (handler) {
            // We need to check for presence here because a handler function may
            // cause later handlers to get removed. This can happen if you for
            // instance have a waypoint that unmounts another waypoint as part of an
            // onEnter/onLeave handler.
            handler(event);
          }
        });
      }

      return handleEvent;
    }()
  }, {
    key: 'add',
    value: function () {
      function add(eventName, listener, options) {
        // options has already been normalized at this point.
        var eventHandlers = this.getEventHandlers(eventName, options);

        if (eventHandlers.size === 0) {
          eventHandlers.handleEvent = this.handleEvent.bind(this, eventName, options);

          this.target.addEventListener(eventName, eventHandlers.handleEvent, options);
        }

        eventHandlers.size += 1;
        eventHandlers.index += 1;
        eventHandlers.handlers[eventHandlers.index] = listener;

        return {
          target: this.target,
          eventName: eventName,
          options: options,
          index: eventHandlers.index
        };
      }

      return add;
    }()
  }, {
    key: 'delete',
    value: function () {
      function _delete(_ref) {
        var eventName = _ref.eventName,
            index = _ref.index,
            options = _ref.options;

        // options has already been normalized at this point.
        var eventHandlers = this.getEventHandlers(eventName, options);

        if (eventHandlers.size === 0) {
          // There are no matching event handlers, so no work to be done here.
          return;
        }

        if (eventHandlers.handlers[index]) {
          delete eventHandlers.handlers[index];
          eventHandlers.size -= 1;
        }

        if (eventHandlers.size === 0) {
          this.target.removeEventListener(eventName, eventHandlers.handleEvent, options);

          eventHandlers.handleEvent = undefined;
        }
      }

      return _delete;
    }()
  }]);

  return TargetEventHandlers;
}();

exports['default'] = TargetEventHandlers;