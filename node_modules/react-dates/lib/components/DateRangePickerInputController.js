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

	var _moment = __webpack_require__(6);

	var _moment2 = _interopRequireDefault(_moment);

	var _reactMomentProptypes = __webpack_require__(4);

	var _reactMomentProptypes2 = _interopRequireDefault(_reactMomentProptypes);

	var _airbnbPropTypes = __webpack_require__(5);

	var _defaultPhrases = __webpack_require__(8);

	var _getPhrasePropTypes = __webpack_require__(9);

	var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

	var _DateRangePickerInput = __webpack_require__(40);

	var _DateRangePickerInput2 = _interopRequireDefault(_DateRangePickerInput);

	var _toMomentObject = __webpack_require__(41);

	var _toMomentObject2 = _interopRequireDefault(_toMomentObject);

	var _toLocalizedDateString = __webpack_require__(42);

	var _toLocalizedDateString2 = _interopRequireDefault(_toLocalizedDateString);

	var _toISODateString = __webpack_require__(15);

	var _toISODateString2 = _interopRequireDefault(_toISODateString);

	var _isInclusivelyAfterDay = __webpack_require__(31);

	var _isInclusivelyAfterDay2 = _interopRequireDefault(_isInclusivelyAfterDay);

	var _isInclusivelyBeforeDay = __webpack_require__(43);

	var _isInclusivelyBeforeDay2 = _interopRequireDefault(_isInclusivelyBeforeDay);

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
	  startDate: _reactMomentProptypes2['default'].momentObj,
	  startDateId: _propTypes2['default'].string,
	  startDatePlaceholderText: _propTypes2['default'].string,
	  isStartDateFocused: _propTypes2['default'].bool,

	  endDate: _reactMomentProptypes2['default'].momentObj,
	  endDateId: _propTypes2['default'].string,
	  endDatePlaceholderText: _propTypes2['default'].string,
	  isEndDateFocused: _propTypes2['default'].bool,

	  screenReaderMessage: _propTypes2['default'].string,
	  showClearDates: _propTypes2['default'].bool,
	  showCaret: _propTypes2['default'].bool,
	  showDefaultInputIcon: _propTypes2['default'].bool,
	  disabled: _propTypes2['default'].bool,
	  required: _propTypes2['default'].bool,
	  readOnly: _propTypes2['default'].bool,

	  keepOpenOnDateSelect: _propTypes2['default'].bool,
	  reopenPickerOnClearDates: _propTypes2['default'].bool,
	  withFullScreenPortal: _propTypes2['default'].bool,
	  isOutsideRange: _propTypes2['default'].func,
	  displayFormat: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].func]),

	  onFocusChange: _propTypes2['default'].func,
	  onClose: _propTypes2['default'].func,
	  onDatesChange: _propTypes2['default'].func,
	  onArrowDown: _propTypes2['default'].func,
	  onQuestionMark: _propTypes2['default'].func,

	  customInputIcon: _propTypes2['default'].node,
	  customArrowIcon: _propTypes2['default'].node,
	  customCloseIcon: _propTypes2['default'].node,

	  // accessibility
	  isFocused: _propTypes2['default'].bool,

	  // i18n
	  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.DateRangePickerInputPhrases)),

	  isRTL: _propTypes2['default'].bool
	});

	var defaultProps = {
	  startDate: null,
	  startDateId: _constants.START_DATE,
	  startDatePlaceholderText: 'Start Date',
	  isStartDateFocused: false,

	  endDate: null,
	  endDateId: _constants.END_DATE,
	  endDatePlaceholderText: 'End Date',
	  isEndDateFocused: false,

	  screenReaderMessage: '',
	  showClearDates: false,
	  showCaret: false,
	  showDefaultInputIcon: false,
	  disabled: false,
	  required: false,
	  readOnly: false,

	  keepOpenOnDateSelect: false,
	  reopenPickerOnClearDates: false,
	  withFullScreenPortal: false,
	  isOutsideRange: function () {
	    function isOutsideRange(day) {
	      return !(0, _isInclusivelyAfterDay2['default'])(day, (0, _moment2['default'])());
	    }

	    return isOutsideRange;
	  }(),
	  displayFormat: function () {
	    function displayFormat() {
	      return _moment2['default'].localeData().longDateFormat('L');
	    }

	    return displayFormat;
	  }(),

	  onFocusChange: function () {
	    function onFocusChange() {}

	    return onFocusChange;
	  }(),
	  onClose: function () {
	    function onClose() {}

	    return onClose;
	  }(),
	  onDatesChange: function () {
	    function onDatesChange() {}

	    return onDatesChange;
	  }(),
	  onArrowDown: function () {
	    function onArrowDown() {}

	    return onArrowDown;
	  }(),
	  onQuestionMark: function () {
	    function onQuestionMark() {}

	    return onQuestionMark;
	  }(),

	  customInputIcon: null,
	  customArrowIcon: null,
	  customCloseIcon: null,

	  // accessibility
	  isFocused: false,

	  // i18n
	  phrases: _defaultPhrases.DateRangePickerInputPhrases,

	  isRTL: false
	};

	var DateRangePickerInputController = function (_React$Component) {
	  _inherits(DateRangePickerInputController, _React$Component);

	  function DateRangePickerInputController(props) {
	    _classCallCheck(this, DateRangePickerInputController);

	    var _this = _possibleConstructorReturn(this, (DateRangePickerInputController.__proto__ || Object.getPrototypeOf(DateRangePickerInputController)).call(this, props));

	    _this.onClearFocus = _this.onClearFocus.bind(_this);
	    _this.onStartDateChange = _this.onStartDateChange.bind(_this);
	    _this.onStartDateFocus = _this.onStartDateFocus.bind(_this);
	    _this.onEndDateChange = _this.onEndDateChange.bind(_this);
	    _this.onEndDateFocus = _this.onEndDateFocus.bind(_this);
	    _this.clearDates = _this.clearDates.bind(_this);
	    return _this;
	  }

	  _createClass(DateRangePickerInputController, [{
	    key: 'onClearFocus',
	    value: function () {
	      function onClearFocus() {
	        var _props = this.props;
	        var onFocusChange = _props.onFocusChange;
	        var onClose = _props.onClose;
	        var startDate = _props.startDate;
	        var endDate = _props.endDate;

	        onFocusChange(null);
	        onClose({ startDate: startDate, endDate: endDate });
	      }

	      return onClearFocus;
	    }()
	  }, {
	    key: 'onEndDateChange',
	    value: function () {
	      function onEndDateChange(endDateString) {
	        var _props2 = this.props;
	        var startDate = _props2.startDate;
	        var isOutsideRange = _props2.isOutsideRange;
	        var keepOpenOnDateSelect = _props2.keepOpenOnDateSelect;
	        var onDatesChange = _props2.onDatesChange;

	        var endDate = (0, _toMomentObject2['default'])(endDateString, this.getDisplayFormat());

	        var isEndDateValid = endDate && !isOutsideRange(endDate) && !(0, _isInclusivelyBeforeDay2['default'])(endDate, startDate);
	        if (isEndDateValid) {
	          onDatesChange({ startDate: startDate, endDate: endDate });
	          if (!keepOpenOnDateSelect) this.onClearFocus();
	        } else {
	          onDatesChange({
	            startDate: startDate,
	            endDate: null
	          });
	        }
	      }

	      return onEndDateChange;
	    }()
	  }, {
	    key: 'onEndDateFocus',
	    value: function () {
	      function onEndDateFocus() {
	        var _props3 = this.props;
	        var startDate = _props3.startDate;
	        var onFocusChange = _props3.onFocusChange;
	        var withFullScreenPortal = _props3.withFullScreenPortal;
	        var disabled = _props3.disabled;

	        if (!startDate && withFullScreenPortal && !disabled) {
	          // When the datepicker is full screen, we never want to focus the end date first
	          // because there's no indication that that is the case once the datepicker is open and it
	          // might confuse the user
	          onFocusChange(_constants.START_DATE);
	        } else if (!disabled) {
	          onFocusChange(_constants.END_DATE);
	        }
	      }

	      return onEndDateFocus;
	    }()
	  }, {
	    key: 'onStartDateChange',
	    value: function () {
	      function onStartDateChange(startDateString) {
	        var startDate = (0, _toMomentObject2['default'])(startDateString, this.getDisplayFormat());

	        var endDate = this.props.endDate;
	        var _props4 = this.props;
	        var isOutsideRange = _props4.isOutsideRange;
	        var onDatesChange = _props4.onDatesChange;
	        var onFocusChange = _props4.onFocusChange;

	        var isStartDateValid = startDate && !isOutsideRange(startDate);
	        if (isStartDateValid) {
	          if ((0, _isInclusivelyBeforeDay2['default'])(endDate, startDate)) {
	            endDate = null;
	          }

	          onDatesChange({ startDate: startDate, endDate: endDate });
	          onFocusChange(_constants.END_DATE);
	        } else {
	          onDatesChange({
	            startDate: null,
	            endDate: endDate
	          });
	        }
	      }

	      return onStartDateChange;
	    }()
	  }, {
	    key: 'onStartDateFocus',
	    value: function () {
	      function onStartDateFocus() {
	        if (!this.props.disabled) {
	          this.props.onFocusChange(_constants.START_DATE);
	        }
	      }

	      return onStartDateFocus;
	    }()
	  }, {
	    key: 'getDisplayFormat',
	    value: function () {
	      function getDisplayFormat() {
	        var displayFormat = this.props.displayFormat;

	        return typeof displayFormat === 'string' ? displayFormat : displayFormat();
	      }

	      return getDisplayFormat;
	    }()
	  }, {
	    key: 'getDateString',
	    value: function () {
	      function getDateString(date) {
	        var displayFormat = this.getDisplayFormat();
	        if (date && displayFormat) {
	          return date && date.format(displayFormat);
	        }
	        return (0, _toLocalizedDateString2['default'])(date);
	      }

	      return getDateString;
	    }()
	  }, {
	    key: 'clearDates',
	    value: function () {
	      function clearDates() {
	        var _props5 = this.props;
	        var onDatesChange = _props5.onDatesChange;
	        var reopenPickerOnClearDates = _props5.reopenPickerOnClearDates;
	        var onFocusChange = _props5.onFocusChange;

	        onDatesChange({ startDate: null, endDate: null });
	        if (reopenPickerOnClearDates) {
	          onFocusChange(_constants.START_DATE);
	        }
	      }

	      return clearDates;
	    }()
	  }, {
	    key: 'render',
	    value: function () {
	      function render() {
	        var _props6 = this.props;
	        var startDate = _props6.startDate;
	        var startDateId = _props6.startDateId;
	        var startDatePlaceholderText = _props6.startDatePlaceholderText;
	        var isStartDateFocused = _props6.isStartDateFocused;
	        var endDate = _props6.endDate;
	        var endDateId = _props6.endDateId;
	        var endDatePlaceholderText = _props6.endDatePlaceholderText;
	        var isEndDateFocused = _props6.isEndDateFocused;
	        var screenReaderMessage = _props6.screenReaderMessage;
	        var showClearDates = _props6.showClearDates;
	        var showCaret = _props6.showCaret;
	        var showDefaultInputIcon = _props6.showDefaultInputIcon;
	        var customInputIcon = _props6.customInputIcon;
	        var customArrowIcon = _props6.customArrowIcon;
	        var customCloseIcon = _props6.customCloseIcon;
	        var disabled = _props6.disabled;
	        var required = _props6.required;
	        var readOnly = _props6.readOnly;
	        var isFocused = _props6.isFocused;
	        var phrases = _props6.phrases;
	        var onArrowDown = _props6.onArrowDown;
	        var onQuestionMark = _props6.onQuestionMark;
	        var isRTL = _props6.isRTL;

	        var startDateString = this.getDateString(startDate);
	        var startDateValue = (0, _toISODateString2['default'])(startDate);
	        var endDateString = this.getDateString(endDate);
	        var endDateValue = (0, _toISODateString2['default'])(endDate);

	        return _react2['default'].createElement(_DateRangePickerInput2['default'], {
	          startDate: startDateString,
	          startDateValue: startDateValue,
	          startDateId: startDateId,
	          startDatePlaceholderText: startDatePlaceholderText,
	          isStartDateFocused: isStartDateFocused,
	          endDate: endDateString,
	          endDateValue: endDateValue,
	          endDateId: endDateId,
	          endDatePlaceholderText: endDatePlaceholderText,
	          isEndDateFocused: isEndDateFocused,
	          isFocused: isFocused,
	          disabled: disabled,
	          required: required,
	          readOnly: readOnly,
	          showCaret: showCaret,
	          showDefaultInputIcon: showDefaultInputIcon,
	          customInputIcon: customInputIcon,
	          customArrowIcon: customArrowIcon,
	          customCloseIcon: customCloseIcon,
	          phrases: phrases,
	          onStartDateChange: this.onStartDateChange,
	          onStartDateFocus: this.onStartDateFocus,
	          onStartDateShiftTab: this.onClearFocus,
	          onEndDateChange: this.onEndDateChange,
	          onEndDateFocus: this.onEndDateFocus,
	          onEndDateTab: this.onClearFocus,
	          showClearDates: showClearDates,
	          onClearDates: this.clearDates,
	          screenReaderMessage: screenReaderMessage,
	          onArrowDown: onArrowDown,
	          onQuestionMark: onQuestionMark,
	          isRTL: isRTL
	        });
	      }

	      return render;
	    }()
	  }]);

	  return DateRangePickerInputController;
	}(_react2['default'].Component);

	exports['default'] = DateRangePickerInputController;

	DateRangePickerInputController.propTypes = propTypes;
	DateRangePickerInputController.defaultProps = defaultProps;

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
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-moment-proptypes");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("airbnb-prop-types");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 7 */,
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
/* 15 */
/***/ function(module, exports) {

	module.exports = require("../utils/toISODateString");

/***/ },
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
/* 31 */
/***/ function(module, exports) {

	module.exports = require("../utils/isInclusivelyAfterDay");

/***/ },
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ function(module, exports) {

	module.exports = require("./DateRangePickerInput");

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = require("../utils/toMomentObject");

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = require("../utils/toLocalizedDateString");

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = require("../utils/isInclusivelyBeforeDay");

/***/ }
/******/ ]);