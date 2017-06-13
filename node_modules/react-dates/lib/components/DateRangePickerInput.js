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
/******/ ([
/* 0 */
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

	var _defaultPhrases = __webpack_require__(8);

	var _getPhrasePropTypes = __webpack_require__(9);

	var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

	var _DateInput = __webpack_require__(36);

	var _DateInput2 = _interopRequireDefault(_DateInput);

	var _arrowRight = __webpack_require__(37);

	var _arrowRight2 = _interopRequireDefault(_arrowRight);

	var _arrowLeft = __webpack_require__(38);

	var _arrowLeft2 = _interopRequireDefault(_arrowLeft);

	var _close = __webpack_require__(34);

	var _close2 = _interopRequireDefault(_close);

	var _calendar = __webpack_require__(39);

	var _calendar2 = _interopRequireDefault(_calendar);

	var _constants = __webpack_require__(11);

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
	  startDateId: _propTypes2['default'].string,
	  startDatePlaceholderText: _propTypes2['default'].string,
	  screenReaderMessage: _propTypes2['default'].string,

	  endDateId: _propTypes2['default'].string,
	  endDatePlaceholderText: _propTypes2['default'].string,

	  onStartDateFocus: _propTypes2['default'].func,
	  onEndDateFocus: _propTypes2['default'].func,
	  onStartDateChange: _propTypes2['default'].func,
	  onEndDateChange: _propTypes2['default'].func,
	  onStartDateShiftTab: _propTypes2['default'].func,
	  onEndDateTab: _propTypes2['default'].func,
	  onClearDates: _propTypes2['default'].func,
	  onArrowDown: _propTypes2['default'].func,
	  onQuestionMark: _propTypes2['default'].func,

	  startDate: _propTypes2['default'].string,
	  startDateValue: _propTypes2['default'].string,
	  endDate: _propTypes2['default'].string,
	  endDateValue: _propTypes2['default'].string,

	  isStartDateFocused: _propTypes2['default'].bool,
	  isEndDateFocused: _propTypes2['default'].bool,
	  showClearDates: _propTypes2['default'].bool,
	  disabled: _propTypes2['default'].bool,
	  required: _propTypes2['default'].bool,
	  readOnly: _propTypes2['default'].bool,
	  showCaret: _propTypes2['default'].bool,
	  showDefaultInputIcon: _propTypes2['default'].bool,
	  customInputIcon: _propTypes2['default'].node,
	  customArrowIcon: _propTypes2['default'].node,
	  customCloseIcon: _propTypes2['default'].node,

	  // accessibility
	  isFocused: _propTypes2['default'].bool, // describes actual DOM focus

	  // i18n
	  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.DateRangePickerInputPhrases)),

	  isRTL: _propTypes2['default'].bool
	});

	var defaultProps = {
	  startDateId: _constants.START_DATE,
	  endDateId: _constants.END_DATE,
	  startDatePlaceholderText: 'Start Date',
	  endDatePlaceholderText: 'End Date',
	  screenReaderMessage: '',
	  onStartDateFocus: function () {
	    function onStartDateFocus() {}

	    return onStartDateFocus;
	  }(),
	  onEndDateFocus: function () {
	    function onEndDateFocus() {}

	    return onEndDateFocus;
	  }(),
	  onStartDateChange: function () {
	    function onStartDateChange() {}

	    return onStartDateChange;
	  }(),
	  onEndDateChange: function () {
	    function onEndDateChange() {}

	    return onEndDateChange;
	  }(),
	  onStartDateShiftTab: function () {
	    function onStartDateShiftTab() {}

	    return onStartDateShiftTab;
	  }(),
	  onEndDateTab: function () {
	    function onEndDateTab() {}

	    return onEndDateTab;
	  }(),
	  onClearDates: function () {
	    function onClearDates() {}

	    return onClearDates;
	  }(),
	  onArrowDown: function () {
	    function onArrowDown() {}

	    return onArrowDown;
	  }(),
	  onQuestionMark: function () {
	    function onQuestionMark() {}

	    return onQuestionMark;
	  }(),

	  startDate: '',
	  startDateValue: '',
	  endDate: '',
	  endDateValue: '',

	  isStartDateFocused: false,
	  isEndDateFocused: false,
	  showClearDates: false,
	  disabled: false,
	  required: false,
	  readOnly: false,
	  showCaret: false,
	  showDefaultInputIcon: false,
	  customInputIcon: null,
	  customArrowIcon: null,
	  customCloseIcon: null,

	  // accessibility
	  isFocused: false,

	  // i18n
	  phrases: _defaultPhrases.DateRangePickerInputPhrases,

	  isRTL: false
	};

	var DateRangePickerInput = function (_React$Component) {
	  _inherits(DateRangePickerInput, _React$Component);

	  function DateRangePickerInput(props) {
	    _classCallCheck(this, DateRangePickerInput);

	    var _this = _possibleConstructorReturn(this, (DateRangePickerInput.__proto__ || Object.getPrototypeOf(DateRangePickerInput)).call(this, props));

	    _this.state = {
	      isClearDatesHovered: false
	    };

	    _this.onClearDatesMouseEnter = _this.onClearDatesMouseEnter.bind(_this);
	    _this.onClearDatesMouseLeave = _this.onClearDatesMouseLeave.bind(_this);
	    return _this;
	  }

	  _createClass(DateRangePickerInput, [{
	    key: 'onClearDatesMouseEnter',
	    value: function () {
	      function onClearDatesMouseEnter() {
	        this.setState({
	          isClearDatesHovered: true
	        });
	      }

	      return onClearDatesMouseEnter;
	    }()
	  }, {
	    key: 'onClearDatesMouseLeave',
	    value: function () {
	      function onClearDatesMouseLeave() {
	        this.setState({
	          isClearDatesHovered: false
	        });
	      }

	      return onClearDatesMouseLeave;
	    }()
	  }, {
	    key: 'render',
	    value: function () {
	      function render() {
	        var isClearDatesHovered = this.state.isClearDatesHovered;
	        var _props = this.props;
	        var startDate = _props.startDate;
	        var startDateValue = _props.startDateValue;
	        var startDateId = _props.startDateId;
	        var startDatePlaceholderText = _props.startDatePlaceholderText;
	        var screenReaderMessage = _props.screenReaderMessage;
	        var isStartDateFocused = _props.isStartDateFocused;
	        var onStartDateChange = _props.onStartDateChange;
	        var onStartDateFocus = _props.onStartDateFocus;
	        var onStartDateShiftTab = _props.onStartDateShiftTab;
	        var endDate = _props.endDate;
	        var endDateValue = _props.endDateValue;
	        var endDateId = _props.endDateId;
	        var endDatePlaceholderText = _props.endDatePlaceholderText;
	        var isEndDateFocused = _props.isEndDateFocused;
	        var onEndDateChange = _props.onEndDateChange;
	        var onEndDateFocus = _props.onEndDateFocus;
	        var onEndDateTab = _props.onEndDateTab;
	        var onArrowDown = _props.onArrowDown;
	        var onQuestionMark = _props.onQuestionMark;
	        var onClearDates = _props.onClearDates;
	        var showClearDates = _props.showClearDates;
	        var disabled = _props.disabled;
	        var required = _props.required;
	        var readOnly = _props.readOnly;
	        var showCaret = _props.showCaret;
	        var showDefaultInputIcon = _props.showDefaultInputIcon;
	        var customInputIcon = _props.customInputIcon;
	        var customArrowIcon = _props.customArrowIcon;
	        var customCloseIcon = _props.customCloseIcon;
	        var isFocused = _props.isFocused;
	        var phrases = _props.phrases;
	        var isRTL = _props.isRTL;

	        var inputIcon = customInputIcon || _react2['default'].createElement(_calendar2['default'], null);
	        var arrowIcon = customArrowIcon || (isRTL ? _react2['default'].createElement(_arrowLeft2['default'], null) : _react2['default'].createElement(_arrowRight2['default'], null));
	        var closeIcon = customCloseIcon || _react2['default'].createElement(_close2['default'], null);
	        var screenReaderText = screenReaderMessage || phrases.keyboardNavigationInstructions;

	        return _react2['default'].createElement('div', {
	          className: (0, _classnames2['default'])('DateRangePickerInput', {
	            'DateRangePickerInput--disabled': disabled,
	            'DateRangePickerInput--rtl': isRTL
	          })
	        }, (showDefaultInputIcon || customInputIcon !== null) && _react2['default'].createElement('button', {
	          type: 'button',
	          className: 'DateRangePickerInput__calendar-icon',
	          'aria-label': phrases.focusStartDate,
	          onClick: onArrowDown
	        }, inputIcon), _react2['default'].createElement(_DateInput2['default'], {
	          id: startDateId,
	          placeholder: startDatePlaceholderText,
	          displayValue: startDate,
	          inputValue: startDateValue,
	          screenReaderMessage: screenReaderText,
	          focused: isStartDateFocused,
	          isFocused: isFocused,
	          disabled: disabled,
	          required: required,
	          readOnly: readOnly,
	          showCaret: showCaret,

	          onChange: onStartDateChange,
	          onFocus: onStartDateFocus,
	          onKeyDownShiftTab: onStartDateShiftTab,
	          onKeyDownArrowDown: onArrowDown,
	          onKeyDownQuestionMark: onQuestionMark
	        }), _react2['default'].createElement('div', {
	          className: 'DateRangePickerInput__arrow',
	          'aria-hidden': 'true',
	          role: 'presentation'
	        }, arrowIcon), _react2['default'].createElement(_DateInput2['default'], {
	          id: endDateId,
	          placeholder: endDatePlaceholderText,
	          displayValue: endDate,
	          inputValue: endDateValue,
	          screenReaderMessage: screenReaderText,
	          focused: isEndDateFocused,
	          isFocused: isFocused,
	          disabled: disabled,
	          required: required,
	          readOnly: readOnly,
	          showCaret: showCaret,

	          onChange: onEndDateChange,
	          onFocus: onEndDateFocus,
	          onKeyDownTab: onEndDateTab,
	          onKeyDownArrowDown: onArrowDown,
	          onKeyDownQuestionMark: onQuestionMark
	        }), showClearDates && _react2['default'].createElement('button', {
	          type: 'button',
	          'aria-label': phrases.clearDates,
	          className: (0, _classnames2['default'])('DateRangePickerInput__clear-dates', {
	            'DateRangePickerInput__clear-dates--hide': !(startDate || endDate),
	            'DateRangePickerInput__clear-dates--hover': isClearDatesHovered
	          }),
	          onMouseEnter: this.onClearDatesMouseEnter,
	          onMouseLeave: this.onClearDatesMouseLeave,
	          onClick: onClearDates
	        }, _react2['default'].createElement('div', { className: 'DateRangePickerInput__close-icon' }, closeIcon)));
	      }

	      return render;
	    }()
	  }]);

	  return DateRangePickerInput;
	}(_react2['default'].Component);

	exports['default'] = DateRangePickerInput;

	DateRangePickerInput.propTypes = propTypes;
	DateRangePickerInput.defaultProps = defaultProps;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("prop-types");

/***/ },
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	module.exports = require("airbnb-prop-types");

/***/ },
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	module.exports = require("classnames");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("../defaultPhrases");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("../utils/getPhrasePropTypes");

/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	module.exports = require("../../constants");

/***/ },
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SVG = function (_React$Component) {
	  _inherits(SVG, _React$Component);

	  function SVG() {
	    _classCallCheck(this, SVG);

	    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
	  }

	  _createClass(SVG, [{
	    key: "render",
	    value: function () {
	      function render() {
	        return _react2["default"].createElement(
	          "svg",
	          _extends({ viewBox: "0 0 12 12" }, this.props),
	          _react2["default"].createElement("path", { fillRule: "evenodd", d: "M11.53.47a.75.75 0 0 0-1.061 0l-4.47 4.47L1.529.47A.75.75 0 1 0 .468 1.531l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.061 1.061l4.47-4.47 4.47 4.47a.75.75 0 1 0 1.061-1.061l-4.47-4.47 4.47-4.47a.75.75 0 0 0 0-1.061z" })
	        );
	      }

	      return render;
	    }()
	  }]);

	  return SVG;
	}(_react2["default"].Component);

	exports["default"] = SVG;

/***/ },
/* 35 */,
/* 36 */
/***/ function(module, exports) {

	module.exports = require("./DateInput");

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SVG = function (_React$Component) {
	  _inherits(SVG, _React$Component);

	  function SVG() {
	    _classCallCheck(this, SVG);

	    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
	  }

	  _createClass(SVG, [{
	    key: "render",
	    value: function () {
	      function render() {
	        return _react2["default"].createElement(
	          "svg",
	          _extends({ viewBox: "0 0 1000 1000" }, this.props),
	          _react2["default"].createElement("path", { d: "M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z" })
	        );
	      }

	      return render;
	    }()
	  }]);

	  return SVG;
	}(_react2["default"].Component);

	exports["default"] = SVG;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SVG = function (_React$Component) {
	  _inherits(SVG, _React$Component);

	  function SVG() {
	    _classCallCheck(this, SVG);

	    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
	  }

	  _createClass(SVG, [{
	    key: "render",
	    value: function () {
	      function render() {
	        return _react2["default"].createElement(
	          "svg",
	          _extends({ viewBox: "0 0 1000 1000" }, this.props),
	          _react2["default"].createElement("path", { d: "M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z" })
	        );
	      }

	      return render;
	    }()
	  }]);

	  return SVG;
	}(_react2["default"].Component);

	exports["default"] = SVG;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SVG = function (_React$Component) {
	  _inherits(SVG, _React$Component);

	  function SVG() {
	    _classCallCheck(this, SVG);

	    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
	  }

	  _createClass(SVG, [{
	    key: "render",
	    value: function () {
	      function render() {
	        return _react2["default"].createElement(
	          "svg",
	          _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1393.1 1500" }, this.props),
	          _react2["default"].createElement("path", { d: "M107.2 1392.9h241.1v-241.1H107.2v241.1zm294.7 0h267.9v-241.1H401.9v241.1zm-294.7-294.7h241.1V830.4H107.2v267.8zm294.7 0h267.9V830.4H401.9v267.8zM107.2 776.8h241.1V535.7H107.2v241.1zm616.2 616.1h267.9v-241.1H723.4v241.1zM401.9 776.8h267.9V535.7H401.9v241.1zm642.9 616.1H1286v-241.1h-241.1v241.1zm-321.4-294.7h267.9V830.4H723.4v267.8zM428.7 375V133.9c0-7.3-2.7-13.5-8-18.8-5.3-5.3-11.6-8-18.8-8h-53.6c-7.3 0-13.5 2.7-18.8 8-5.3 5.3-8 11.6-8 18.8V375c0 7.3 2.7 13.5 8 18.8 5.3 5.3 11.6 8 18.8 8h53.6c7.3 0 13.5-2.7 18.8-8 5.3-5.3 8-11.5 8-18.8zm616.1 723.2H1286V830.4h-241.1v267.8zM723.4 776.8h267.9V535.7H723.4v241.1zm321.4 0H1286V535.7h-241.1v241.1zm26.8-401.8V133.9c0-7.3-2.7-13.5-8-18.8-5.3-5.3-11.6-8-18.8-8h-53.6c-7.3 0-13.5 2.7-18.8 8-5.3 5.3-8 11.6-8 18.8V375c0 7.3 2.7 13.5 8 18.8 5.3 5.3 11.6 8 18.8 8h53.6c7.3 0 13.5-2.7 18.8-8 5.4-5.3 8-11.5 8-18.8zm321.5-53.6v1071.4c0 29-10.6 54.1-31.8 75.3-21.2 21.2-46.3 31.8-75.3 31.8H107.2c-29 0-54.1-10.6-75.3-31.8C10.6 1447 0 1421.9 0 1392.9V321.4c0-29 10.6-54.1 31.8-75.3s46.3-31.8 75.3-31.8h107.2v-80.4c0-36.8 13.1-68.4 39.3-94.6S311.4 0 348.3 0h53.6c36.8 0 68.4 13.1 94.6 39.3 26.2 26.2 39.3 57.8 39.3 94.6v80.4h321.5v-80.4c0-36.8 13.1-68.4 39.3-94.6C922.9 13.1 954.4 0 991.3 0h53.6c36.8 0 68.4 13.1 94.6 39.3s39.3 57.8 39.3 94.6v80.4H1286c29 0 54.1 10.6 75.3 31.8 21.2 21.2 31.8 46.3 31.8 75.3z" })
	        );
	      }

	      return render;
	    }()
	  }]);

	  return SVG;
	}(_react2["default"].Component);

	exports["default"] = SVG;

/***/ }
/******/ ]);