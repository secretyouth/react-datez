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

	var _reactDom = __webpack_require__(27);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactAddonsShallowCompare = __webpack_require__(3);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _moment = __webpack_require__(6);

	var _moment2 = _interopRequireDefault(_moment);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactPortal = __webpack_require__(28);

	var _reactPortal2 = _interopRequireDefault(_reactPortal);

	var _airbnbPropTypes = __webpack_require__(5);

	var _consolidatedEvents = __webpack_require__(18);

	var _defaultPhrases = __webpack_require__(8);

	var _OutsideClickHandler = __webpack_require__(29);

	var _OutsideClickHandler2 = _interopRequireDefault(_OutsideClickHandler);

	var _getResponsiveContainerStyles = __webpack_require__(30);

	var _getResponsiveContainerStyles2 = _interopRequireDefault(_getResponsiveContainerStyles);

	var _isTouchDevice = __webpack_require__(26);

	var _isTouchDevice2 = _interopRequireDefault(_isTouchDevice);

	var _isInclusivelyAfterDay = __webpack_require__(31);

	var _isInclusivelyAfterDay2 = _interopRequireDefault(_isInclusivelyAfterDay);

	var _DateRangePickerInputController = __webpack_require__(32);

	var _DateRangePickerInputController2 = _interopRequireDefault(_DateRangePickerInputController);

	var _DayPickerRangeController = __webpack_require__(33);

	var _DayPickerRangeController2 = _interopRequireDefault(_DayPickerRangeController);

	var _close = __webpack_require__(34);

	var _close2 = _interopRequireDefault(_close);

	var _DateRangePickerShape = __webpack_require__(35);

	var _DateRangePickerShape2 = _interopRequireDefault(_DateRangePickerShape);

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

	var propTypes = (0, _airbnbPropTypes.forbidExtraProps)(_DateRangePickerShape2['default']);

	var defaultProps = {
	  // required props for a functional interactive DateRangePicker
	  startDate: null,
	  endDate: null,
	  focusedInput: null,

	  // input related props
	  startDateId: _constants.START_DATE,
	  startDatePlaceholderText: 'Start Date',
	  endDateId: _constants.END_DATE,
	  endDatePlaceholderText: 'End Date',
	  disabled: false,
	  required: false,
	  readOnly: false,
	  screenReaderInputMessage: '',
	  showClearDates: false,
	  showDefaultInputIcon: false,
	  customInputIcon: null,
	  customArrowIcon: null,
	  customCloseIcon: null,

	  // calendar presentation and interaction related props
	  renderMonth: null,
	  orientation: _constants.HORIZONTAL_ORIENTATION,
	  anchorDirection: _constants.ANCHOR_LEFT,
	  horizontalMargin: 0,
	  withPortal: false,
	  withFullScreenPortal: false,
	  initialVisibleMonth: null,
	  numberOfMonths: 2,
	  keepOpenOnDateSelect: false,
	  reopenPickerOnClearDates: false,
	  renderCalendarInfo: null,
	  hideKeyboardShortcutsPanel: false,
	  daySize: _constants.DAY_SIZE,
	  isRTL: false,

	  // navigation related props
	  navPrev: null,
	  navNext: null,

	  onPrevMonthClick: function () {
	    function onPrevMonthClick() {}

	    return onPrevMonthClick;
	  }(),
	  onNextMonthClick: function () {
	    function onNextMonthClick() {}

	    return onNextMonthClick;
	  }(),
	  onClose: function () {
	    function onClose() {}

	    return onClose;
	  }(),

	  // day presentation and interaction related props
	  renderDay: null,
	  minimumNights: 1,
	  enableOutsideDays: false,
	  isDayBlocked: function () {
	    function isDayBlocked() {
	      return false;
	    }

	    return isDayBlocked;
	  }(),
	  isOutsideRange: function () {
	    function isOutsideRange(day) {
	      return !(0, _isInclusivelyAfterDay2['default'])(day, (0, _moment2['default'])());
	    }

	    return isOutsideRange;
	  }(),
	  isDayHighlighted: function () {
	    function isDayHighlighted() {
	      return false;
	    }

	    return isDayHighlighted;
	  }(),

	  // internationalization
	  displayFormat: function () {
	    function displayFormat() {
	      return _moment2['default'].localeData().longDateFormat('L');
	    }

	    return displayFormat;
	  }(),
	  monthFormat: 'MMMM YYYY',
	  phrases: _defaultPhrases.DateRangePickerPhrases
	};

	var DateRangePicker = function (_React$Component) {
	  _inherits(DateRangePicker, _React$Component);

	  function DateRangePicker(props) {
	    _classCallCheck(this, DateRangePicker);

	    var _this = _possibleConstructorReturn(this, (DateRangePicker.__proto__ || Object.getPrototypeOf(DateRangePicker)).call(this, props));

	    _this.state = {
	      dayPickerContainerStyles: {},
	      isDateRangePickerInputFocused: false,
	      isDayPickerFocused: false,
	      showKeyboardShortcuts: false
	    };

	    _this.isTouchDevice = false;

	    _this.onOutsideClick = _this.onOutsideClick.bind(_this);
	    _this.onDateRangePickerInputFocus = _this.onDateRangePickerInputFocus.bind(_this);
	    _this.onDayPickerFocus = _this.onDayPickerFocus.bind(_this);
	    _this.onDayPickerBlur = _this.onDayPickerBlur.bind(_this);
	    _this.showKeyboardShortcutsPanel = _this.showKeyboardShortcutsPanel.bind(_this);

	    _this.responsivizePickerPosition = _this.responsivizePickerPosition.bind(_this);
	    return _this;
	  }

	  _createClass(DateRangePicker, [{
	    key: 'componentDidMount',
	    value: function () {
	      function componentDidMount() {
	        this.resizeHandle = (0, _consolidatedEvents.addEventListener)(window, 'resize', this.responsivizePickerPosition, { passive: true });
	        this.responsivizePickerPosition();

	        if (this.props.focusedInput) {
	          this.setState({
	            isDateRangePickerInputFocused: true
	          });
	        }

	        this.isTouchDevice = (0, _isTouchDevice2['default'])();
	      }

	      return componentDidMount;
	    }()
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function () {
	      function shouldComponentUpdate(nextProps, nextState) {
	        return (0, _reactAddonsShallowCompare2['default'])(this, nextProps, nextState);
	      }

	      return shouldComponentUpdate;
	    }()
	  }, {
	    key: 'componentDidUpdate',
	    value: function () {
	      function componentDidUpdate(prevProps) {
	        if (!prevProps.focusedInput && this.props.focusedInput && this.isOpened()) {
	          // The date picker just changed from being closed to being open.
	          this.responsivizePickerPosition();
	        }
	      }

	      return componentDidUpdate;
	    }()
	  }, {
	    key: 'componentWillUnmount',
	    value: function () {
	      function componentWillUnmount() {
	        if (this.resizeHandle) (0, _consolidatedEvents.removeEventListener)(this.resizeHandle);
	      }

	      return componentWillUnmount;
	    }()
	  }, {
	    key: 'onOutsideClick',
	    value: function () {
	      function onOutsideClick() {
	        var _props = this.props;
	        var onFocusChange = _props.onFocusChange;
	        var onClose = _props.onClose;
	        var startDate = _props.startDate;
	        var endDate = _props.endDate;

	        if (!this.isOpened()) return;

	        this.setState({
	          isDateRangePickerInputFocused: false,
	          isDayPickerFocused: false,
	          showKeyboardShortcuts: false
	        });

	        onFocusChange(null);
	        onClose({ startDate: startDate, endDate: endDate });
	      }

	      return onOutsideClick;
	    }()
	  }, {
	    key: 'onDateRangePickerInputFocus',
	    value: function () {
	      function onDateRangePickerInputFocus(focusedInput) {
	        var _props2 = this.props;
	        var onFocusChange = _props2.onFocusChange;
	        var withPortal = _props2.withPortal;
	        var withFullScreenPortal = _props2.withFullScreenPortal;

	        if (focusedInput) {
	          var moveFocusToDayPicker = withPortal || withFullScreenPortal || this.isTouchDevice;
	          if (moveFocusToDayPicker) {
	            this.onDayPickerFocus();
	          } else {
	            this.onDayPickerBlur();
	          }
	        }

	        onFocusChange(focusedInput);
	      }

	      return onDateRangePickerInputFocus;
	    }()
	  }, {
	    key: 'onDayPickerFocus',
	    value: function () {
	      function onDayPickerFocus() {
	        var _props3 = this.props;
	        var focusedInput = _props3.focusedInput;
	        var onFocusChange = _props3.onFocusChange;

	        if (!focusedInput) onFocusChange(_constants.START_DATE);

	        this.setState({
	          isDateRangePickerInputFocused: false,
	          isDayPickerFocused: true,
	          showKeyboardShortcuts: false
	        });
	      }

	      return onDayPickerFocus;
	    }()
	  }, {
	    key: 'onDayPickerBlur',
	    value: function () {
	      function onDayPickerBlur() {
	        this.setState({
	          isDateRangePickerInputFocused: true,
	          isDayPickerFocused: false,
	          showKeyboardShortcuts: false
	        });
	      }

	      return onDayPickerBlur;
	    }()
	  }, {
	    key: 'getDayPickerContainerClasses',
	    value: function () {
	      function getDayPickerContainerClasses() {
	        var _props4 = this.props;
	        var orientation = _props4.orientation;
	        var withPortal = _props4.withPortal;
	        var withFullScreenPortal = _props4.withFullScreenPortal;
	        var anchorDirection = _props4.anchorDirection;
	        var isRTL = _props4.isRTL;

	        var dayPickerClassName = (0, _classnames2['default'])('DateRangePicker__picker', {
	          'DateRangePicker__picker--direction-left': anchorDirection === _constants.ANCHOR_LEFT,
	          'DateRangePicker__picker--direction-right': anchorDirection === _constants.ANCHOR_RIGHT,
	          'DateRangePicker__picker--horizontal': orientation === _constants.HORIZONTAL_ORIENTATION,
	          'DateRangePicker__picker--vertical': orientation === _constants.VERTICAL_ORIENTATION,
	          'DateRangePicker__picker--portal': withPortal || withFullScreenPortal,
	          'DateRangePicker__picker--full-screen-portal': withFullScreenPortal,
	          'DateRangePicker__picker--rtl': isRTL
	        });

	        return dayPickerClassName;
	      }

	      return getDayPickerContainerClasses;
	    }()
	  }, {
	    key: 'getDayPickerDOMNode',
	    value: function () {
	      function getDayPickerDOMNode() {
	        return _reactDom2['default'].findDOMNode(this.dayPicker); // eslint-disable-line react/no-find-dom-node
	      }

	      return getDayPickerDOMNode;
	    }()
	  }, {
	    key: 'isOpened',
	    value: function () {
	      function isOpened() {
	        var focusedInput = this.props.focusedInput;

	        return focusedInput === _constants.START_DATE || focusedInput === _constants.END_DATE;
	      }

	      return isOpened;
	    }()
	  }, {
	    key: 'responsivizePickerPosition',
	    value: function () {
	      function responsivizePickerPosition() {
	        if (!this.isOpened()) {
	          return;
	        }

	        var _props5 = this.props;
	        var anchorDirection = _props5.anchorDirection;
	        var horizontalMargin = _props5.horizontalMargin;
	        var withPortal = _props5.withPortal;
	        var withFullScreenPortal = _props5.withFullScreenPortal;
	        var dayPickerContainerStyles = this.state.dayPickerContainerStyles;

	        var isAnchoredLeft = anchorDirection === _constants.ANCHOR_LEFT;
	        if (!withPortal && !withFullScreenPortal) {
	          var containerRect = this.dayPickerContainer.getBoundingClientRect();
	          var currentOffset = dayPickerContainerStyles[anchorDirection] || 0;
	          var containerEdge = isAnchoredLeft ? containerRect[_constants.ANCHOR_RIGHT] : containerRect[_constants.ANCHOR_LEFT];

	          this.setState({
	            dayPickerContainerStyles: (0, _getResponsiveContainerStyles2['default'])(anchorDirection, currentOffset, containerEdge, horizontalMargin)
	          });
	        }
	      }

	      return responsivizePickerPosition;
	    }()
	  }, {
	    key: 'showKeyboardShortcutsPanel',
	    value: function () {
	      function showKeyboardShortcutsPanel() {
	        this.setState({
	          isDateRangePickerInputFocused: false,
	          isDayPickerFocused: true,
	          showKeyboardShortcuts: true
	        });
	      }

	      return showKeyboardShortcutsPanel;
	    }()
	  }, {
	    key: 'maybeRenderDayPickerWithPortal',
	    value: function () {
	      function maybeRenderDayPickerWithPortal() {
	        var _props6 = this.props;
	        var withPortal = _props6.withPortal;
	        var withFullScreenPortal = _props6.withFullScreenPortal;

	        if (!this.isOpened()) {
	          return null;
	        }

	        if (withPortal || withFullScreenPortal) {
	          return _react2['default'].createElement(_reactPortal2['default'], { isOpened: true }, this.renderDayPicker());
	        }

	        return this.renderDayPicker();
	      }

	      return maybeRenderDayPickerWithPortal;
	    }()
	  }, {
	    key: 'renderDayPicker',
	    value: function () {
	      function renderDayPicker() {
	        var _this2 = this;

	        var _props7 = this.props;
	        var isDayBlocked = _props7.isDayBlocked;
	        var isDayHighlighted = _props7.isDayHighlighted;
	        var isOutsideRange = _props7.isOutsideRange;
	        var numberOfMonths = _props7.numberOfMonths;
	        var orientation = _props7.orientation;
	        var monthFormat = _props7.monthFormat;
	        var renderMonth = _props7.renderMonth;
	        var navPrev = _props7.navPrev;
	        var navNext = _props7.navNext;
	        var onPrevMonthClick = _props7.onPrevMonthClick;
	        var onNextMonthClick = _props7.onNextMonthClick;
	        var onDatesChange = _props7.onDatesChange;
	        var onFocusChange = _props7.onFocusChange;
	        var withPortal = _props7.withPortal;
	        var withFullScreenPortal = _props7.withFullScreenPortal;
	        var daySize = _props7.daySize;
	        var enableOutsideDays = _props7.enableOutsideDays;
	        var focusedInput = _props7.focusedInput;
	        var startDate = _props7.startDate;
	        var endDate = _props7.endDate;
	        var minimumNights = _props7.minimumNights;
	        var keepOpenOnDateSelect = _props7.keepOpenOnDateSelect;
	        var renderDay = _props7.renderDay;
	        var renderCalendarInfo = _props7.renderCalendarInfo;
	        var initialVisibleMonth = _props7.initialVisibleMonth;
	        var hideKeyboardShortcutsPanel = _props7.hideKeyboardShortcutsPanel;
	        var customCloseIcon = _props7.customCloseIcon;
	        var onClose = _props7.onClose;
	        var phrases = _props7.phrases;
	        var isRTL = _props7.isRTL;
	        var _state = this.state;
	        var dayPickerContainerStyles = _state.dayPickerContainerStyles;
	        var isDayPickerFocused = _state.isDayPickerFocused;
	        var showKeyboardShortcuts = _state.showKeyboardShortcuts;

	        var onOutsideClick = !withFullScreenPortal && withPortal ? this.onOutsideClick : undefined;
	        var initialVisibleMonthThunk = initialVisibleMonth || function () {
	          return startDate || endDate || (0, _moment2['default'])();
	        };

	        var closeIcon = customCloseIcon || _react2['default'].createElement(_close2['default'], null);

	        return _react2['default'].createElement('div', { // eslint-disable-line jsx-a11y/no-static-element-interactions
	          ref: function () {
	            function ref(_ref2) {
	              _this2.dayPickerContainer = _ref2;
	            }

	            return ref;
	          }(),
	          className: this.getDayPickerContainerClasses(),
	          style: dayPickerContainerStyles,
	          onClick: onOutsideClick
	        }, _react2['default'].createElement(_DayPickerRangeController2['default'], {
	          ref: function () {
	            function ref(_ref) {
	              _this2.dayPicker = _ref;
	            }

	            return ref;
	          }(),
	          orientation: orientation,
	          enableOutsideDays: enableOutsideDays,
	          numberOfMonths: numberOfMonths,
	          onPrevMonthClick: onPrevMonthClick,
	          onNextMonthClick: onNextMonthClick,
	          onDatesChange: onDatesChange,
	          onFocusChange: onFocusChange,
	          onClose: onClose,
	          focusedInput: focusedInput,
	          startDate: startDate,
	          endDate: endDate,
	          monthFormat: monthFormat,
	          renderMonth: renderMonth,
	          withPortal: withPortal || withFullScreenPortal,
	          daySize: daySize,
	          initialVisibleMonth: initialVisibleMonthThunk,
	          hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
	          navPrev: navPrev,
	          navNext: navNext,
	          minimumNights: minimumNights,
	          isOutsideRange: isOutsideRange,
	          isDayHighlighted: isDayHighlighted,
	          isDayBlocked: isDayBlocked,
	          keepOpenOnDateSelect: keepOpenOnDateSelect,
	          renderDay: renderDay,
	          renderCalendarInfo: renderCalendarInfo,
	          isFocused: isDayPickerFocused,
	          showKeyboardShortcuts: showKeyboardShortcuts,
	          onBlur: this.onDayPickerBlur,
	          phrases: phrases,
	          isRTL: isRTL
	        }), withFullScreenPortal && _react2['default'].createElement('button', {
	          className: 'DateRangePicker__close',
	          type: 'button',
	          onClick: this.onOutsideClick,
	          'aria-label': phrases.closeDatePicker
	        }, _react2['default'].createElement('div', { className: 'DateRangePicker__close' }, closeIcon)));
	      }

	      return renderDayPicker;
	    }()
	  }, {
	    key: 'render',
	    value: function () {
	      function render() {
	        var _props8 = this.props;
	        var startDate = _props8.startDate;
	        var startDateId = _props8.startDateId;
	        var startDatePlaceholderText = _props8.startDatePlaceholderText;
	        var endDate = _props8.endDate;
	        var endDateId = _props8.endDateId;
	        var endDatePlaceholderText = _props8.endDatePlaceholderText;
	        var focusedInput = _props8.focusedInput;
	        var screenReaderInputMessage = _props8.screenReaderInputMessage;
	        var showClearDates = _props8.showClearDates;
	        var showDefaultInputIcon = _props8.showDefaultInputIcon;
	        var customInputIcon = _props8.customInputIcon;
	        var customArrowIcon = _props8.customArrowIcon;
	        var customCloseIcon = _props8.customCloseIcon;
	        var disabled = _props8.disabled;
	        var required = _props8.required;
	        var readOnly = _props8.readOnly;
	        var phrases = _props8.phrases;
	        var isOutsideRange = _props8.isOutsideRange;
	        var withPortal = _props8.withPortal;
	        var withFullScreenPortal = _props8.withFullScreenPortal;
	        var displayFormat = _props8.displayFormat;
	        var reopenPickerOnClearDates = _props8.reopenPickerOnClearDates;
	        var keepOpenOnDateSelect = _props8.keepOpenOnDateSelect;
	        var onDatesChange = _props8.onDatesChange;
	        var onClose = _props8.onClose;
	        var isRTL = _props8.isRTL;
	        var isDateRangePickerInputFocused = this.state.isDateRangePickerInputFocused;

	        var onOutsideClick = !withPortal && !withFullScreenPortal ? this.onOutsideClick : undefined;

	        return _react2['default'].createElement('div', { className: 'DateRangePicker' }, _react2['default'].createElement(_OutsideClickHandler2['default'], { onOutsideClick: onOutsideClick }, _react2['default'].createElement(_DateRangePickerInputController2['default'], {
	          startDate: startDate,
	          startDateId: startDateId,
	          startDatePlaceholderText: startDatePlaceholderText,
	          isStartDateFocused: focusedInput === _constants.START_DATE,
	          endDate: endDate,
	          endDateId: endDateId,
	          endDatePlaceholderText: endDatePlaceholderText,
	          isEndDateFocused: focusedInput === _constants.END_DATE,
	          displayFormat: displayFormat,
	          showClearDates: showClearDates,
	          showCaret: !withPortal && !withFullScreenPortal,
	          showDefaultInputIcon: showDefaultInputIcon,
	          customInputIcon: customInputIcon,
	          customArrowIcon: customArrowIcon,
	          customCloseIcon: customCloseIcon,
	          disabled: disabled,
	          required: required,
	          readOnly: readOnly,
	          reopenPickerOnClearDates: reopenPickerOnClearDates,
	          keepOpenOnDateSelect: keepOpenOnDateSelect,
	          isOutsideRange: isOutsideRange,
	          withFullScreenPortal: withFullScreenPortal,
	          onDatesChange: onDatesChange,
	          onFocusChange: this.onDateRangePickerInputFocus,
	          onArrowDown: this.onDayPickerFocus,
	          onQuestionMark: this.showKeyboardShortcutsPanel,
	          onClose: onClose,
	          phrases: phrases,
	          screenReaderMessage: screenReaderInputMessage,
	          isFocused: isDateRangePickerInputFocused,
	          isRTL: isRTL
	        }), this.maybeRenderDayPickerWithPortal()));
	      }

	      return render;
	    }()
	  }]);

	  return DateRangePicker;
	}(_react2['default'].Component);

	exports['default'] = DateRangePicker;

	DateRangePicker.propTypes = propTypes;
	DateRangePicker.defaultProps = defaultProps;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-addons-shallow-compare");

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	module.exports = require("airbnb-prop-types");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("classnames");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("../defaultPhrases");

/***/ },
/* 9 */,
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
/* 18 */
/***/ function(module, exports) {

	module.exports = require("consolidated-events");

/***/ },
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ function(module, exports) {

	module.exports = require("../utils/isTouchDevice");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("react-portal");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("./OutsideClickHandler");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("../utils/getResponsiveContainerStyles");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("../utils/isInclusivelyAfterDay");

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("./DateRangePickerInputController");

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = require("./DayPickerRangeController");

/***/ },
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
/* 35 */
/***/ function(module, exports) {

	module.exports = require("../shapes/DateRangePickerShape");

/***/ }
/******/ ]);