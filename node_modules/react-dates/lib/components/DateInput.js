module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _airbnbPropTypes = __webpack_require__(5);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _lodash = __webpack_require__(25);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _isTouchDevice = __webpack_require__(26);

	var _isTouchDevice2 = _interopRequireDefault(_isTouchDevice);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
	  id: _propTypes2['default'].string.isRequired,
	  placeholder: _propTypes2['default'].string, // also used as label
	  displayValue: _propTypes2['default'].string,
	  inputValue: _propTypes2['default'].string,
	  screenReaderMessage: _propTypes2['default'].string,
	  focused: _propTypes2['default'].bool,
	  disabled: _propTypes2['default'].bool,
	  required: _propTypes2['default'].bool,
	  readOnly: _propTypes2['default'].bool,
	  showCaret: _propTypes2['default'].bool,

	  onChange: _propTypes2['default'].func,
	  onFocus: _propTypes2['default'].func,
	  onKeyDownShiftTab: _propTypes2['default'].func,
	  onKeyDownTab: _propTypes2['default'].func,

	  onKeyDownArrowDown: _propTypes2['default'].func,
	  onKeyDownQuestionMark: _propTypes2['default'].func,

	  // accessibility
	  isFocused: _propTypes2['default'].bool });

	var defaultProps = {
	  placeholder: 'Select Date',
	  displayValue: '',
	  inputValue: '',
	  screenReaderMessage: '',
	  focused: false,
	  disabled: false,
	  required: false,
	  readOnly: false,
	  showCaret: false,

	  onChange: function () {
	    function onChange() {}

	    return onChange;
	  }(),
	  onFocus: function () {
	    function onFocus() {}

	    return onFocus;
	  }(),
	  onKeyDownShiftTab: function () {
	    function onKeyDownShiftTab() {}

	    return onKeyDownShiftTab;
	  }(),
	  onKeyDownTab: function () {
	    function onKeyDownTab() {}

	    return onKeyDownTab;
	  }(),
	  onKeyDownArrowDown: function () {
	    function onKeyDownArrowDown() {}

	    return onKeyDownArrowDown;
	  }(),
	  onKeyDownQuestionMark: function () {
	    function onKeyDownQuestionMark() {}

	    return onKeyDownQuestionMark;
	  }(),

	  // accessibility
	  isFocused: false
	};

	var DateInput = function (_React$Component) {
	  _inherits(DateInput, _React$Component);

	  function DateInput(props) {
	    _classCallCheck(this, DateInput);

	    var _this = _possibleConstructorReturn(this, (DateInput.__proto__ || Object.getPrototypeOf(DateInput)).call(this, props));

	    _this.state = {
	      dateString: '',
	      isTouchDevice: false
	    };

	    _this.onChange = _this.onChange.bind(_this);
	    _this.onKeyDown = _this.onKeyDown.bind(_this);
	    return _this;
	  }

	  _createClass(DateInput, [{
	    key: 'componentDidMount',
	    value: function () {
	      function componentDidMount() {
	        this.setState({ isTouchDevice: (0, _isTouchDevice2['default'])() });
	      }

	      return componentDidMount;
	    }()
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function () {
	      function componentWillReceiveProps(nextProps) {
	        if (!this.props.displayValue && nextProps.displayValue) {
	          this.setState({
	            dateString: ''
	          });
	        }
	      }

	      return componentWillReceiveProps;
	    }()
	  }, {
	    key: 'componentDidUpdate',
	    value: function () {
	      function componentDidUpdate(prevProps) {
	        var _props = this.props;
	        var focused = _props.focused;
	        var isFocused = _props.isFocused;

	        if (prevProps.focused === focused && prevProps.isFocused === isFocused) return;

	        if (focused && isFocused) {
	          this.inputRef.focus();
	          this.inputRef.select();
	        } else {
	          this.inputRef.blur();
	        }
	      }

	      return componentDidUpdate;
	    }()
	  }, {
	    key: 'onChange',
	    value: function () {
	      function onChange(e) {
	        var _props2 = this.props;
	        var onChange = _props2.onChange;
	        var onKeyDownQuestionMark = _props2.onKeyDownQuestionMark;

	        var dateString = e.target.value;

	        // In Safari, onKeyDown does not consistently fire ahead of onChange. As a result, we need to
	        // special case the `?` key so that it always triggers the appropriate callback, instead of
	        // modifying the input value
	        if (dateString[dateString.length - 1] === '?') {
	          onKeyDownQuestionMark(e);
	        } else {
	          this.setState({ dateString: dateString });
	          onChange(dateString);
	        }
	      }

	      return onChange;
	    }()
	  }, {
	    key: 'onKeyDown',
	    value: function () {
	      function onKeyDown(e) {
	        e.stopPropagation();

	        var _props3 = this.props;
	        var onKeyDownShiftTab = _props3.onKeyDownShiftTab;
	        var onKeyDownTab = _props3.onKeyDownTab;
	        var onKeyDownArrowDown = _props3.onKeyDownArrowDown;
	        var onKeyDownQuestionMark = _props3.onKeyDownQuestionMark;
	        var key = e.key;

	        if (key === 'Tab') {
	          if (e.shiftKey) {
	            onKeyDownShiftTab(e);
	          } else {
	            onKeyDownTab(e);
	          }
	        } else if (key === 'ArrowDown') {
	          onKeyDownArrowDown(e);
	        } else if (key === '?') {
	          e.preventDefault();
	          onKeyDownQuestionMark(e);
	        }
	      }

	      return onKeyDown;
	    }()
	  }, {
	    key: 'render',
	    value: function () {
	      function render() {
	        var _this2 = this;

	        var _state = this.state;
	        var dateString = _state.dateString;
	        var isTouch = _state.isTouchDevice;
	        var _props4 = this.props;
	        var id = _props4.id;
	        var placeholder = _props4.placeholder;
	        var displayValue = _props4.displayValue;
	        var inputValue = _props4.inputValue;
	        var screenReaderMessage = _props4.screenReaderMessage;
	        var focused = _props4.focused;
	        var showCaret = _props4.showCaret;
	        var onFocus = _props4.onFocus;
	        var disabled = _props4.disabled;
	        var required = _props4.required;
	        var readOnly = _props4.readOnly;

	        var displayText = displayValue || inputValue || dateString || placeholder || '';
	        var value = inputValue || displayValue || dateString || '';
	        var screenReaderMessageId = 'DateInput__screen-reader-message-' + String(id);

	        return _react2['default'].createElement('div', {
	          className: (0, _classnames2['default'])('DateInput', {
	            'DateInput--with-caret': showCaret && focused,
	            'DateInput--disabled': disabled
	          })
	        }, _react2['default'].createElement('input', {
	          'aria-label': placeholder,
	          className: 'DateInput__input needsclick',
	          type: 'text',
	          id: id,
	          name: id,
	          ref: function () {
	            function ref(_ref) {
	              _this2.inputRef = _ref;
	            }

	            return ref;
	          }(),
	          value: value,
	          onChange: this.onChange,
	          onKeyDown: (0, _lodash2['default'])(this.onKeyDown, 300),
	          onFocus: onFocus,
	          placeholder: placeholder,
	          autoComplete: 'off',
	          disabled: disabled,
	          readOnly: readOnly || isTouch,
	          required: required,
	          'aria-describedby': screenReaderMessage && screenReaderMessageId
	        }), screenReaderMessage && _react2['default'].createElement('p', { id: screenReaderMessageId, className: 'screen-reader-only' }, screenReaderMessage), _react2['default'].createElement('div', {
	          className: (0, _classnames2['default'])('DateInput__display-text', {
	            'DateInput__display-text--has-input': !!value,
	            'DateInput__display-text--focused': focused,
	            'DateInput__display-text--disabled': disabled
	          })
	        }, displayText));
	      }

	      return render;
	    }()
	  }]);

	  return DateInput;
	}(_react2['default'].Component);

	exports['default'] = DateInput;

	DateInput.propTypes = propTypes;
	DateInput.defaultProps = defaultProps;

/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = require("prop-types");

/***/ },

/***/ 5:
/***/ function(module, exports) {

	module.exports = require("airbnb-prop-types");

/***/ },

/***/ 7:
/***/ function(module, exports) {

	module.exports = require("classnames");

/***/ },

/***/ 25:
/***/ function(module, exports) {

	module.exports = require("lodash.throttle");

/***/ },

/***/ 26:
/***/ function(module, exports) {

	module.exports = require("../utils/isTouchDevice");

/***/ }

/******/ });