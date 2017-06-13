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

	var _object3 = __webpack_require__(17);

	var _object4 = _interopRequireDefault(_object3);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(6);

	var _moment2 = _interopRequireDefault(_moment);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactPortal = __webpack_require__(28);

	var _reactPortal2 = _interopRequireDefault(_reactPortal);

	var _airbnbPropTypes = __webpack_require__(5);

	var _consolidatedEvents = __webpack_require__(18);

	var _object = __webpack_require__(51);

	var _object2 = _interopRequireDefault(_object);

	var _SingleDatePickerShape = __webpack_require__(57);

	var _SingleDatePickerShape2 = _interopRequireDefault(_SingleDatePickerShape);

	var _defaultPhrases = __webpack_require__(8);

	var _OutsideClickHandler = __webpack_require__(29);

	var _OutsideClickHandler2 = _interopRequireDefault(_OutsideClickHandler);

	var _toMomentObject = __webpack_require__(41);

	var _toMomentObject2 = _interopRequireDefault(_toMomentObject);

	var _toLocalizedDateString = __webpack_require__(42);

	var _toLocalizedDateString2 = _interopRequireDefault(_toLocalizedDateString);

	var _getResponsiveContainerStyles = __webpack_require__(30);

	var _getResponsiveContainerStyles2 = _interopRequireDefault(_getResponsiveContainerStyles);

	var _isTouchDevice = __webpack_require__(26);

	var _isTouchDevice2 = _interopRequireDefault(_isTouchDevice);

	var _getVisibleDays = __webpack_require__(54);

	var _getVisibleDays2 = _interopRequireDefault(_getVisibleDays);

	var _isDayVisible = __webpack_require__(48);

	var _isDayVisible2 = _interopRequireDefault(_isDayVisible);

	var _toISODateString = __webpack_require__(15);

	var _toISODateString2 = _interopRequireDefault(_toISODateString);

	var _toISOMonthString = __webpack_require__(23);

	var _toISOMonthString2 = _interopRequireDefault(_toISOMonthString);

	var _SingleDatePickerInput = __webpack_require__(58);

	var _SingleDatePickerInput2 = _interopRequireDefault(_SingleDatePickerInput);

	var _DayPicker = __webpack_require__(56);

	var _DayPicker2 = _interopRequireDefault(_DayPicker);

	var _close = __webpack_require__(34);

	var _close2 = _interopRequireDefault(_close);

	var _isInclusivelyAfterDay = __webpack_require__(31);

	var _isInclusivelyAfterDay2 = _interopRequireDefault(_isInclusivelyAfterDay);

	var _isSameDay = __webpack_require__(14);

	var _isSameDay2 = _interopRequireDefault(_isSameDay);

	var _isAfterDay = __webpack_require__(24);

	var _isAfterDay2 = _interopRequireDefault(_isAfterDay);

	var _isBeforeDay = __webpack_require__(53);

	var _isBeforeDay2 = _interopRequireDefault(_isBeforeDay);

	var _constants = __webpack_require__(11);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
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

	var propTypes = (0, _airbnbPropTypes.forbidExtraProps)(_SingleDatePickerShape2['default']);

	var defaultProps = {
	  // required props for a functional interactive SingleDatePicker
	  date: null,
	  focused: false,

	  // input related props
	  id: 'date',
	  placeholder: 'Date',
	  disabled: false,
	  required: false,
	  readOnly: false,
	  screenReaderInputMessage: '',
	  showClearDate: false,
	  showDefaultInputIcon: false,
	  customInputIcon: null,
	  customCloseIcon: null,

	  // calendar presentation and interaction related props
	  orientation: _constants.HORIZONTAL_ORIENTATION,
	  anchorDirection: _constants.ANCHOR_LEFT,
	  horizontalMargin: 0,
	  withPortal: false,
	  withFullScreenPortal: false,
	  initialVisibleMonth: null,
	  numberOfMonths: 2,
	  keepOpenOnDateSelect: false,
	  reopenPickerOnClearDate: false,
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

	  // month presentation and interaction related props
	  renderMonth: null,

	  // day presentation and interaction related props
	  renderDay: null,
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
	    function isDayHighlighted() {}

	    return isDayHighlighted;
	  }(),

	  // internationalization props
	  displayFormat: function () {
	    function displayFormat() {
	      return _moment2['default'].localeData().longDateFormat('L');
	    }

	    return displayFormat;
	  }(),
	  monthFormat: 'MMMM YYYY',
	  phrases: _defaultPhrases.SingleDatePickerPhrases
	};

	var SingleDatePicker = function (_React$Component) {
	  _inherits(SingleDatePicker, _React$Component);

	  function SingleDatePicker(props) {
	    _classCallCheck(this, SingleDatePicker);

	    var _this = _possibleConstructorReturn(this, (SingleDatePicker.__proto__ || Object.getPrototypeOf(SingleDatePicker)).call(this, props));

	    _this.isTouchDevice = false;
	    _this.today = (0, _moment2['default'])();

	    _this.modifiers = {
	      today: function () {
	        function today(day) {
	          return _this.isToday(day);
	        }

	        return today;
	      }(),
	      blocked: function () {
	        function blocked(day) {
	          return _this.isBlocked(day);
	        }

	        return blocked;
	      }(),
	      'blocked-calendar': function () {
	        function blockedCalendar(day) {
	          return props.isDayBlocked(day);
	        }

	        return blockedCalendar;
	      }(),
	      'blocked-out-of-range': function () {
	        function blockedOutOfRange(day) {
	          return props.isOutsideRange(day);
	        }

	        return blockedOutOfRange;
	      }(),
	      'highlighted-calendar': function () {
	        function highlightedCalendar(day) {
	          return props.isDayHighlighted(day);
	        }

	        return highlightedCalendar;
	      }(),
	      valid: function () {
	        function valid(day) {
	          return !_this.isBlocked(day);
	        }

	        return valid;
	      }(),
	      hovered: function () {
	        function hovered(day) {
	          return _this.isHovered(day);
	        }

	        return hovered;
	      }(),
	      selected: function () {
	        function selected(day) {
	          return _this.isSelected(day);
	        }

	        return selected;
	      }()
	    };

	    var _this$getStateForNewM = _this.getStateForNewMonth(props);

	    var currentMonth = _this$getStateForNewM.currentMonth;
	    var visibleDays = _this$getStateForNewM.visibleDays;

	    _this.state = {
	      dayPickerContainerStyles: {},
	      hoverDate: null,
	      isDayPickerFocused: false,
	      isInputFocused: false,
	      currentMonth: currentMonth,
	      visibleDays: visibleDays
	    };

	    _this.onDayMouseEnter = _this.onDayMouseEnter.bind(_this);
	    _this.onDayMouseLeave = _this.onDayMouseLeave.bind(_this);
	    _this.onDayClick = _this.onDayClick.bind(_this);

	    _this.onDayPickerFocus = _this.onDayPickerFocus.bind(_this);
	    _this.onDayPickerBlur = _this.onDayPickerBlur.bind(_this);

	    _this.onPrevMonthClick = _this.onPrevMonthClick.bind(_this);
	    _this.onNextMonthClick = _this.onNextMonthClick.bind(_this);

	    _this.onChange = _this.onChange.bind(_this);
	    _this.onFocus = _this.onFocus.bind(_this);
	    _this.onClearFocus = _this.onClearFocus.bind(_this);
	    _this.clearDate = _this.clearDate.bind(_this);

	    _this.getFirstFocusableDay = _this.getFirstFocusableDay.bind(_this);

	    _this.responsivizePickerPosition = _this.responsivizePickerPosition.bind(_this);
	    return _this;
	  }

	  /* istanbul ignore next */

	  _createClass(SingleDatePicker, [{
	    key: 'componentDidMount',
	    value: function () {
	      function componentDidMount() {
	        this.resizeHandle = (0, _consolidatedEvents.addEventListener)(window, 'resize', this.responsivizePickerPosition, { passive: true });
	        this.responsivizePickerPosition();

	        if (this.props.focused) {
	          this.setState({
	            isInputFocused: true
	          });
	        }

	        this.isTouchDevice = (0, _isTouchDevice2['default'])();
	      }

	      return componentDidMount;
	    }()
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function () {
	      function componentWillReceiveProps(nextProps) {
	        var _this2 = this;

	        var date = nextProps.date;
	        var focused = nextProps.focused;
	        var isOutsideRange = nextProps.isOutsideRange;
	        var isDayBlocked = nextProps.isDayBlocked;
	        var isDayHighlighted = nextProps.isDayHighlighted;
	        var initialVisibleMonth = nextProps.initialVisibleMonth;
	        var numberOfMonths = nextProps.numberOfMonths;
	        var enableOutsideDays = nextProps.enableOutsideDays;
	        var visibleDays = this.state.visibleDays;

	        if (isOutsideRange !== this.props.isOutsideRange) {
	          this.modifiers['blocked-out-of-range'] = function (day) {
	            return isOutsideRange(day);
	          };
	        }

	        if (isDayBlocked !== this.props.isDayBlocked) {
	          this.modifiers['blocked-calendar'] = function (day) {
	            return isDayBlocked(day);
	          };
	        }

	        if (isDayHighlighted !== this.props.isDayHighlighted) {
	          this.modifiers['highlighted-calendar'] = function (day) {
	            return isDayHighlighted(day);
	          };
	        }

	        if (initialVisibleMonth !== this.props.initialVisibleMonth || numberOfMonths !== this.props.numberOfMonths || enableOutsideDays !== this.props.enableOutsideDays) {
	          var newMonthState = this.getStateForNewMonth(nextProps);
	          var currentMonth = newMonthState.currentMonth;
	          visibleDays = newMonthState.visibleDays;
	          this.setState({
	            currentMonth: currentMonth,
	            visibleDays: visibleDays
	          });
	        }

	        var didDateChange = date !== this.props.date;
	        var didFocusChange = focused !== this.props.focused;

	        var modifiers = {};

	        if (didDateChange) {
	          modifiers = this.deleteModifier(modifiers, this.props.date, 'selected');
	          modifiers = this.addModifier(modifiers, date, 'selected');
	        }

	        if (didFocusChange) {
	          (0, _object2['default'])(visibleDays).forEach(function (days) {
	            Object.keys(days).forEach(function (day) {
	              var momentObj = (0, _moment2['default'])(day);
	              if (isDayBlocked(momentObj)) {
	                modifiers = _this2.addModifier(modifiers, momentObj, 'blocked-calendar');
	              } else {
	                modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked-calendar');
	              }

	              if (isDayHighlighted(momentObj)) {
	                modifiers = _this2.addModifier(modifiers, momentObj, 'highlighted-calendar');
	              } else {
	                modifiers = _this2.deleteModifier(modifiers, momentObj, 'highlighted-calendar');
	              }
	            });
	          });
	        }

	        var today = (0, _moment2['default'])();
	        if (!(0, _isSameDay2['default'])(this.today, today)) {
	          modifiers = this.deleteModifier(modifiers, this.today, 'today');
	          modifiers = this.addModifier(modifiers, today, 'today');
	          this.today = today;
	        }

	        if (Object.keys(modifiers).length > 0) {
	          this.setState({
	            visibleDays: (0, _object4['default'])({}, visibleDays, modifiers)
	          });
	        }
	      }

	      return componentWillReceiveProps;
	    }()
	  }, {
	    key: 'componentWillUpdate',
	    value: function () {
	      function componentWillUpdate() {
	        this.today = (0, _moment2['default'])();
	      }

	      return componentWillUpdate;
	    }()
	  }, {
	    key: 'componentDidUpdate',
	    value: function () {
	      function componentDidUpdate(prevProps) {
	        if (!prevProps.focused && this.props.focused) {
	          this.responsivizePickerPosition();
	        }
	      }

	      return componentDidUpdate;
	    }()

	    /* istanbul ignore next */

	  }, {
	    key: 'componentWillUnmount',
	    value: function () {
	      function componentWillUnmount() {
	        (0, _consolidatedEvents.removeEventListener)(this.resizeHandle);
	      }

	      return componentWillUnmount;
	    }()
	  }, {
	    key: 'onChange',
	    value: function () {
	      function onChange(dateString) {
	        var _props = this.props;
	        var startDate = _props.startDate;
	        var isOutsideRange = _props.isOutsideRange;
	        var keepOpenOnDateSelect = _props.keepOpenOnDateSelect;
	        var onDateChange = _props.onDateChange;
	        var onFocusChange = _props.onFocusChange;
	        var onClose = _props.onClose;

	        var endDate = (0, _toMomentObject2['default'])(dateString, this.getDisplayFormat());

	        var isValid = endDate && !isOutsideRange(endDate);
	        if (isValid) {
	          onDateChange(endDate);
	          if (!keepOpenOnDateSelect) {
	            onFocusChange({ focused: false });
	            onClose({ startDate: startDate, endDate: endDate });
	          }
	        } else {
	          onDateChange(null);
	        }
	      }

	      return onChange;
	    }()
	  }, {
	    key: 'onDayClick',
	    value: function () {
	      function onDayClick(day, e) {
	        if (e) e.preventDefault();
	        if (this.isBlocked(day)) return;
	        var _props2 = this.props;
	        var onDateChange = _props2.onDateChange;
	        var keepOpenOnDateSelect = _props2.keepOpenOnDateSelect;
	        var onFocusChange = _props2.onFocusChange;
	        var onClose = _props2.onClose;
	        var startDate = _props2.startDate;
	        var endDate = _props2.endDate;

	        onDateChange(day);
	        if (!keepOpenOnDateSelect) {
	          onFocusChange({ focused: null });
	          onClose({ startDate: startDate, endDate: endDate });
	        }
	      }

	      return onDayClick;
	    }()
	  }, {
	    key: 'onDayMouseEnter',
	    value: function () {
	      function onDayMouseEnter(day) {
	        if (this.isTouchDevice) return;
	        var _state = this.state;
	        var hoverDate = _state.hoverDate;
	        var visibleDays = _state.visibleDays;

	        var modifiers = this.deleteModifier({}, hoverDate, 'hovered');
	        modifiers = this.addModifier(modifiers, day, 'hovered');

	        this.setState({
	          hoverDate: day,
	          visibleDays: (0, _object4['default'])({}, visibleDays, modifiers)
	        });
	      }

	      return onDayMouseEnter;
	    }()
	  }, {
	    key: 'onDayMouseLeave',
	    value: function () {
	      function onDayMouseLeave() {
	        var _state2 = this.state;
	        var hoverDate = _state2.hoverDate;
	        var visibleDays = _state2.visibleDays;

	        if (this.isTouchDevice || !hoverDate) return;

	        var modifiers = this.deleteModifier({}, hoverDate, 'hovered');

	        this.setState({
	          hoverDate: null,
	          visibleDays: (0, _object4['default'])({}, visibleDays, modifiers)
	        });
	      }

	      return onDayMouseLeave;
	    }()
	  }, {
	    key: 'onFocus',
	    value: function () {
	      function onFocus() {
	        var _props3 = this.props;
	        var disabled = _props3.disabled;
	        var onFocusChange = _props3.onFocusChange;
	        var withPortal = _props3.withPortal;
	        var withFullScreenPortal = _props3.withFullScreenPortal;

	        var moveFocusToDayPicker = withPortal || withFullScreenPortal || this.isTouchDevice;
	        if (moveFocusToDayPicker) {
	          this.onDayPickerFocus();
	        } else {
	          this.onDayPickerBlur();
	        }

	        if (!disabled) {
	          onFocusChange({ focused: true });
	        }
	      }

	      return onFocus;
	    }()
	  }, {
	    key: 'onClearFocus',
	    value: function () {
	      function onClearFocus() {
	        var _props4 = this.props;
	        var startDate = _props4.startDate;
	        var endDate = _props4.endDate;
	        var focused = _props4.focused;
	        var onFocusChange = _props4.onFocusChange;
	        var onClose = _props4.onClose;

	        if (!focused) return;

	        this.setState({
	          isInputFocused: false,
	          isDayPickerFocused: false
	        });

	        onFocusChange({ focused: false });
	        onClose({ startDate: startDate, endDate: endDate });
	      }

	      return onClearFocus;
	    }()
	  }, {
	    key: 'onDayPickerFocus',
	    value: function () {
	      function onDayPickerFocus() {
	        this.setState({
	          isInputFocused: false,
	          isDayPickerFocused: true
	        });
	      }

	      return onDayPickerFocus;
	    }()
	  }, {
	    key: 'onDayPickerBlur',
	    value: function () {
	      function onDayPickerBlur() {
	        this.setState({
	          isInputFocused: true,
	          isDayPickerFocused: false
	        });
	      }

	      return onDayPickerBlur;
	    }()
	  }, {
	    key: 'onPrevMonthClick',
	    value: function () {
	      function onPrevMonthClick() {
	        var _props5 = this.props;
	        var onPrevMonthClick = _props5.onPrevMonthClick;
	        var numberOfMonths = _props5.numberOfMonths;
	        var enableOutsideDays = _props5.enableOutsideDays;
	        var _state3 = this.state;
	        var currentMonth = _state3.currentMonth;
	        var visibleDays = _state3.visibleDays;

	        var newVisibleDays = {};
	        Object.keys(visibleDays).sort().slice(0, numberOfMonths + 1).forEach(function (month) {
	          newVisibleDays[month] = visibleDays[month];
	        });

	        var prevMonth = currentMonth.clone().subtract(1, 'month');
	        var prevMonthVisibleDays = (0, _getVisibleDays2['default'])(prevMonth, 1, enableOutsideDays);

	        this.setState({
	          currentMonth: prevMonth,
	          visibleDays: (0, _object4['default'])({}, newVisibleDays, this.getModifiers(prevMonthVisibleDays))
	        });

	        onPrevMonthClick();
	      }

	      return onPrevMonthClick;
	    }()
	  }, {
	    key: 'onNextMonthClick',
	    value: function () {
	      function onNextMonthClick() {
	        var _props6 = this.props;
	        var onNextMonthClick = _props6.onNextMonthClick;
	        var numberOfMonths = _props6.numberOfMonths;
	        var enableOutsideDays = _props6.enableOutsideDays;
	        var _state4 = this.state;
	        var currentMonth = _state4.currentMonth;
	        var visibleDays = _state4.visibleDays;

	        var newVisibleDays = {};
	        Object.keys(visibleDays).sort().slice(1).forEach(function (month) {
	          newVisibleDays[month] = visibleDays[month];
	        });

	        var nextMonth = currentMonth.clone().add(numberOfMonths, 'month');
	        var nextMonthVisibleDays = (0, _getVisibleDays2['default'])(nextMonth, 1, enableOutsideDays);

	        this.setState({
	          currentMonth: currentMonth.clone().add(1, 'month'),
	          visibleDays: (0, _object4['default'])({}, newVisibleDays, this.getModifiers(nextMonthVisibleDays))
	        });

	        onNextMonthClick();
	      }

	      return onNextMonthClick;
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
	    key: 'getDayPickerContainerClasses',
	    value: function () {
	      function getDayPickerContainerClasses() {
	        var _props7 = this.props;
	        var orientation = _props7.orientation;
	        var withPortal = _props7.withPortal;
	        var withFullScreenPortal = _props7.withFullScreenPortal;
	        var anchorDirection = _props7.anchorDirection;
	        var isRTL = _props7.isRTL;
	        var hoverDate = this.state.hoverDate;

	        var dayPickerClassName = (0, _classnames2['default'])('SingleDatePicker__picker', {
	          'SingleDatePicker__picker--direction-left': anchorDirection === _constants.ANCHOR_LEFT,
	          'SingleDatePicker__picker--direction-right': anchorDirection === _constants.ANCHOR_RIGHT,
	          'SingleDatePicker__picker--horizontal': orientation === _constants.HORIZONTAL_ORIENTATION,
	          'SingleDatePicker__picker--vertical': orientation === _constants.VERTICAL_ORIENTATION,
	          'SingleDatePicker__picker--portal': withPortal || withFullScreenPortal,
	          'SingleDatePicker__picker--full-screen-portal': withFullScreenPortal,
	          'SingleDatePicker__picker--valid-date-hovered': hoverDate && !this.isBlocked(hoverDate),
	          'SingleDatePicker__picker--rtl': isRTL
	        });

	        return dayPickerClassName;
	      }

	      return getDayPickerContainerClasses;
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
	    key: 'getFirstFocusableDay',
	    value: function () {
	      function getFirstFocusableDay(newMonth) {
	        var _this3 = this;

	        var _props8 = this.props;
	        var date = _props8.date;
	        var numberOfMonths = _props8.numberOfMonths;

	        var focusedDate = newMonth.clone().startOf('month');
	        if (date) {
	          focusedDate = date.clone();
	        }

	        if (this.isBlocked(focusedDate)) {
	          var days = [];
	          var lastVisibleDay = newMonth.clone().add(numberOfMonths - 1, 'months').endOf('month');
	          var currentDay = focusedDate.clone();
	          while (!(0, _isAfterDay2['default'])(currentDay, lastVisibleDay)) {
	            currentDay = currentDay.clone().add(1, 'day');
	            days.push(currentDay);
	          }

	          var viableDays = days.filter(function (day) {
	            return !_this3.isBlocked(day) && (0, _isAfterDay2['default'])(day, focusedDate);
	          });
	          if (viableDays.length > 0) focusedDate = viableDays[0];
	        }

	        return focusedDate;
	      }

	      return getFirstFocusableDay;
	    }()
	  }, {
	    key: 'getModifiers',
	    value: function () {
	      function getModifiers(visibleDays) {
	        var _this4 = this;

	        var modifiers = {};
	        Object.keys(visibleDays).forEach(function (month) {
	          modifiers[month] = {};
	          visibleDays[month].forEach(function (day) {
	            modifiers[month][(0, _toISODateString2['default'])(day)] = _this4.getModifiersForDay(day);
	          });
	        });

	        return modifiers;
	      }

	      return getModifiers;
	    }()
	  }, {
	    key: 'getModifiersForDay',
	    value: function () {
	      function getModifiersForDay(day) {
	        var _this5 = this;

	        return new Set(Object.keys(this.modifiers).filter(function (modifier) {
	          return _this5.modifiers[modifier](day);
	        }));
	      }

	      return getModifiersForDay;
	    }()
	  }, {
	    key: 'getStateForNewMonth',
	    value: function () {
	      function getStateForNewMonth(nextProps) {
	        var _this6 = this;

	        var initialVisibleMonth = nextProps.initialVisibleMonth;
	        var date = nextProps.date;
	        var numberOfMonths = nextProps.numberOfMonths;
	        var enableOutsideDays = nextProps.enableOutsideDays;

	        var initialVisibleMonthThunk = initialVisibleMonth || (date ? function () {
	          return date;
	        } : function () {
	          return _this6.today;
	        });
	        var currentMonth = initialVisibleMonthThunk();
	        var visibleDays = this.getModifiers((0, _getVisibleDays2['default'])(currentMonth, numberOfMonths, enableOutsideDays));
	        return { currentMonth: currentMonth, visibleDays: visibleDays };
	      }

	      return getStateForNewMonth;
	    }()
	  }, {
	    key: 'addModifier',
	    value: function () {
	      function addModifier(updatedDays, day, modifier) {
	        var _props9 = this.props;
	        var numberOfMonths = _props9.numberOfMonths;
	        var enableOutsideDays = _props9.enableOutsideDays;
	        var _state5 = this.state;
	        var currentMonth = _state5.currentMonth;
	        var visibleDays = _state5.visibleDays;

	        if (!day || !(0, _isDayVisible2['default'])(day, currentMonth, numberOfMonths, enableOutsideDays)) {
	          return updatedDays;
	        }

	        var monthIso = (0, _toISOMonthString2['default'])(day);
	        var month = updatedDays[monthIso] || visibleDays[monthIso];

	        var iso = (0, _toISODateString2['default'])(day);
	        if (enableOutsideDays) {
	          var startOfMonth = day.clone().startOf('month');
	          var endOfMonth = day.clone().endOf('month');
	          if ((0, _isBeforeDay2['default'])(startOfMonth, currentMonth.clone().startOf('month')) || (0, _isAfterDay2['default'])(endOfMonth, currentMonth.clone().endOf('month'))) {
	            monthIso = Object.keys(visibleDays).filter(function (monthKey) {
	              return monthKey !== monthIso && Object.keys(visibleDays[monthKey]).indexOf(iso) > -1;
	            })[0];
	            month = updatedDays[monthIso] || visibleDays[monthIso];
	          }
	        }
	        var modifiers = new Set(month[iso]);
	        modifiers.add(modifier);
	        return (0, _object4['default'])({}, updatedDays, _defineProperty({}, monthIso, (0, _object4['default'])({}, month, _defineProperty({}, iso, modifiers))));
	      }

	      return addModifier;
	    }()
	  }, {
	    key: 'deleteModifier',
	    value: function () {
	      function deleteModifier(updatedDays, day, modifier) {
	        var _props10 = this.props;
	        var numberOfMonths = _props10.numberOfMonths;
	        var enableOutsideDays = _props10.enableOutsideDays;
	        var _state6 = this.state;
	        var currentMonth = _state6.currentMonth;
	        var visibleDays = _state6.visibleDays;

	        if (!day || !(0, _isDayVisible2['default'])(day, currentMonth, numberOfMonths, enableOutsideDays)) {
	          return updatedDays;
	        }

	        var monthIso = (0, _toISOMonthString2['default'])(day);
	        var month = updatedDays[monthIso] || visibleDays[monthIso];

	        var iso = (0, _toISODateString2['default'])(day);
	        if (enableOutsideDays) {
	          var startOfMonth = day.clone().startOf('month');
	          var endOfMonth = day.clone().endOf('month');
	          if ((0, _isBeforeDay2['default'])(startOfMonth, currentMonth.clone().startOf('month')) || (0, _isAfterDay2['default'])(endOfMonth, currentMonth.clone().endOf('month'))) {
	            monthIso = Object.keys(visibleDays).filter(function (monthKey) {
	              return monthKey !== monthIso && Object.keys(visibleDays[monthKey]).indexOf(iso) > -1;
	            })[0];
	            month = updatedDays[monthIso] || visibleDays[monthIso];
	          }
	        }

	        var modifiers = new Set(month[iso]);
	        modifiers['delete'](modifier);
	        return (0, _object4['default'])({}, updatedDays, _defineProperty({}, monthIso, (0, _object4['default'])({}, month, _defineProperty({}, iso, modifiers))));
	      }

	      return deleteModifier;
	    }()
	  }, {
	    key: 'clearDate',
	    value: function () {
	      function clearDate() {
	        var _props11 = this.props;
	        var onDateChange = _props11.onDateChange;
	        var reopenPickerOnClearDate = _props11.reopenPickerOnClearDate;
	        var onFocusChange = _props11.onFocusChange;

	        onDateChange(null);
	        if (reopenPickerOnClearDate) {
	          onFocusChange({ focused: true });
	        }
	      }

	      return clearDate;
	    }()

	    /* istanbul ignore next */

	  }, {
	    key: 'responsivizePickerPosition',
	    value: function () {
	      function responsivizePickerPosition() {
	        var _props12 = this.props;
	        var anchorDirection = _props12.anchorDirection;
	        var horizontalMargin = _props12.horizontalMargin;
	        var withPortal = _props12.withPortal;
	        var withFullScreenPortal = _props12.withFullScreenPortal;
	        var focused = _props12.focused;
	        var dayPickerContainerStyles = this.state.dayPickerContainerStyles;

	        if (!focused) {
	          return;
	        }

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
	    key: 'isBlocked',
	    value: function () {
	      function isBlocked(day) {
	        var _props13 = this.props;
	        var isDayBlocked = _props13.isDayBlocked;
	        var isOutsideRange = _props13.isOutsideRange;

	        return isDayBlocked(day) || isOutsideRange(day);
	      }

	      return isBlocked;
	    }()
	  }, {
	    key: 'isHovered',
	    value: function () {
	      function isHovered(day) {
	        var _ref = this.state || {};

	        var hoverDate = _ref.hoverDate;

	        return (0, _isSameDay2['default'])(day, hoverDate);
	      }

	      return isHovered;
	    }()
	  }, {
	    key: 'isSelected',
	    value: function () {
	      function isSelected(day) {
	        return (0, _isSameDay2['default'])(day, this.props.date);
	      }

	      return isSelected;
	    }()
	  }, {
	    key: 'isToday',
	    value: function () {
	      function isToday(day) {
	        return (0, _isSameDay2['default'])(day, this.today);
	      }

	      return isToday;
	    }()
	  }, {
	    key: 'maybeRenderDayPickerWithPortal',
	    value: function () {
	      function maybeRenderDayPickerWithPortal() {
	        var _props14 = this.props;
	        var focused = _props14.focused;
	        var withPortal = _props14.withPortal;
	        var withFullScreenPortal = _props14.withFullScreenPortal;

	        if (!focused) {
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
	        var _this7 = this;

	        var _props15 = this.props;
	        var enableOutsideDays = _props15.enableOutsideDays;
	        var numberOfMonths = _props15.numberOfMonths;
	        var orientation = _props15.orientation;
	        var monthFormat = _props15.monthFormat;
	        var navPrev = _props15.navPrev;
	        var navNext = _props15.navNext;
	        var withPortal = _props15.withPortal;
	        var withFullScreenPortal = _props15.withFullScreenPortal;
	        var focused = _props15.focused;
	        var renderMonth = _props15.renderMonth;
	        var renderDay = _props15.renderDay;
	        var renderCalendarInfo = _props15.renderCalendarInfo;
	        var hideKeyboardShortcutsPanel = _props15.hideKeyboardShortcutsPanel;
	        var customCloseIcon = _props15.customCloseIcon;
	        var phrases = _props15.phrases;
	        var daySize = _props15.daySize;
	        var isRTL = _props15.isRTL;
	        var _state7 = this.state;
	        var dayPickerContainerStyles = _state7.dayPickerContainerStyles;
	        var isDayPickerFocused = _state7.isDayPickerFocused;
	        var currentMonth = _state7.currentMonth;
	        var visibleDays = _state7.visibleDays;

	        var onOutsideClick = !withFullScreenPortal && withPortal ? this.onClearFocus : undefined;
	        var closeIcon = customCloseIcon || _react2['default'].createElement(_close2['default'], null);

	        return _react2['default'].createElement('div', { // eslint-disable-line jsx-a11y/no-static-element-interactions
	          ref: function () {
	            function ref(_ref2) {
	              _this7.dayPickerContainer = _ref2;
	            }

	            return ref;
	          }(),
	          className: this.getDayPickerContainerClasses(),
	          style: dayPickerContainerStyles,
	          onClick: onOutsideClick
	        }, _react2['default'].createElement(_DayPicker2['default'], {
	          orientation: orientation,
	          enableOutsideDays: enableOutsideDays,
	          modifiers: visibleDays,
	          numberOfMonths: numberOfMonths,
	          onDayClick: this.onDayClick,
	          onDayMouseEnter: this.onDayMouseEnter,
	          onDayMouseLeave: this.onDayMouseLeave,
	          onPrevMonthClick: this.onPrevMonthClick,
	          onNextMonthClick: this.onNextMonthClick,
	          monthFormat: monthFormat,
	          withPortal: withPortal || withFullScreenPortal,
	          hidden: !focused,
	          hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
	          initialVisibleMonth: function () {
	            function initialVisibleMonth() {
	              return currentMonth;
	            }

	            return initialVisibleMonth;
	          }(),
	          navPrev: navPrev,
	          navNext: navNext,
	          renderMonth: renderMonth,
	          renderDay: renderDay,
	          renderCalendarInfo: renderCalendarInfo,
	          isFocused: isDayPickerFocused,
	          getFirstFocusableDay: this.getFirstFocusableDay,
	          onBlur: this.onDayPickerBlur,
	          phrases: phrases,
	          daySize: daySize,
	          isRTL: isRTL
	        }), withFullScreenPortal && _react2['default'].createElement('button', {
	          'aria-label': phrases.closeDatePicker,
	          className: 'SingleDatePicker__close',
	          type: 'button',
	          onClick: this.onClearFocus
	        }, _react2['default'].createElement('div', { className: 'SingleDatePicker__close-icon' }, closeIcon)));
	      }

	      return renderDayPicker;
	    }()
	  }, {
	    key: 'render',
	    value: function () {
	      function render() {
	        var _props16 = this.props;
	        var id = _props16.id;
	        var placeholder = _props16.placeholder;
	        var disabled = _props16.disabled;
	        var focused = _props16.focused;
	        var required = _props16.required;
	        var readOnly = _props16.readOnly;
	        var showClearDate = _props16.showClearDate;
	        var showDefaultInputIcon = _props16.showDefaultInputIcon;
	        var customInputIcon = _props16.customInputIcon;
	        var date = _props16.date;
	        var phrases = _props16.phrases;
	        var withPortal = _props16.withPortal;
	        var withFullScreenPortal = _props16.withFullScreenPortal;
	        var screenReaderInputMessage = _props16.screenReaderInputMessage;
	        var isRTL = _props16.isRTL;
	        var isInputFocused = this.state.isInputFocused;

	        var displayValue = this.getDateString(date);
	        var inputValue = (0, _toISODateString2['default'])(date);

	        var onOutsideClick = !withPortal && !withFullScreenPortal ? this.onClearFocus : undefined;

	        return _react2['default'].createElement('div', { className: 'SingleDatePicker' }, _react2['default'].createElement(_OutsideClickHandler2['default'], { onOutsideClick: onOutsideClick }, _react2['default'].createElement(_SingleDatePickerInput2['default'], {
	          id: id,
	          placeholder: placeholder,
	          focused: focused,
	          isFocused: isInputFocused,
	          disabled: disabled,
	          required: required,
	          readOnly: readOnly,
	          showCaret: !withPortal && !withFullScreenPortal,
	          onClearDate: this.clearDate,
	          showClearDate: showClearDate,
	          showDefaultInputIcon: showDefaultInputIcon,
	          customInputIcon: customInputIcon,
	          displayValue: displayValue,
	          inputValue: inputValue,
	          onChange: this.onChange,
	          onFocus: this.onFocus,
	          onKeyDownShiftTab: this.onClearFocus,
	          onKeyDownTab: this.onClearFocus,
	          onKeyDownArrowDown: this.onDayPickerFocus,
	          screenReaderMessage: screenReaderInputMessage,
	          phrases: phrases,
	          isRTL: isRTL
	        }), this.maybeRenderDayPickerWithPortal()));
	      }

	      return render;
	    }()
	  }]);

	  return SingleDatePicker;
	}(_react2['default'].Component);

	exports['default'] = SingleDatePicker;

	SingleDatePicker.propTypes = propTypes;
	SingleDatePicker.defaultProps = defaultProps;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */,
/* 3 */,
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
/* 14 */
/***/ function(module, exports) {

	module.exports = require("../utils/isSameDay");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("../utils/toISODateString");

/***/ },
/* 16 */,
/* 17 */
/***/ function(module, exports) {

	module.exports = require("object.assign");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("consolidated-events");

/***/ },
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ function(module, exports) {

	module.exports = require("../utils/toISOMonthString");

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("../utils/isAfterDay");

/***/ },
/* 25 */,
/* 26 */
/***/ function(module, exports) {

	module.exports = require("../utils/isTouchDevice");

/***/ },
/* 27 */,
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
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ function(module, exports) {

	module.exports = require("../utils/toMomentObject");

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = require("../utils/toLocalizedDateString");

/***/ },
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ function(module, exports) {

	module.exports = require("../utils/isDayVisible");

/***/ },
/* 49 */,
/* 50 */,
/* 51 */
/***/ function(module, exports) {

	module.exports = require("object.values");

/***/ },
/* 52 */,
/* 53 */
/***/ function(module, exports) {

	module.exports = require("../utils/isBeforeDay");

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = require("../utils/getVisibleDays");

/***/ },
/* 55 */,
/* 56 */
/***/ function(module, exports) {

	module.exports = require("./DayPicker");

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = require("../shapes/SingleDatePickerShape");

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = require("./SingleDatePickerInput");

/***/ }
/******/ ]);