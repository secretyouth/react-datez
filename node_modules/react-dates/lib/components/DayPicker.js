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
	exports.defaultProps = undefined;

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	exports.calculateDimension = calculateDimension;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactAddonsShallowCompare = __webpack_require__(3);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _reactDom = __webpack_require__(27);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _airbnbPropTypes = __webpack_require__(5);

	var _moment = __webpack_require__(6);

	var _moment2 = _interopRequireDefault(_moment);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _lodash = __webpack_require__(25);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _defaultPhrases = __webpack_require__(8);

	var _getPhrasePropTypes = __webpack_require__(9);

	var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

	var _OutsideClickHandler = __webpack_require__(29);

	var _OutsideClickHandler2 = _interopRequireDefault(_OutsideClickHandler);

	var _CalendarMonthGrid = __webpack_require__(44);

	var _CalendarMonthGrid2 = _interopRequireDefault(_CalendarMonthGrid);

	var _DayPickerNavigation = __webpack_require__(45);

	var _DayPickerNavigation2 = _interopRequireDefault(_DayPickerNavigation);

	var _DayPickerKeyboardShortcuts = __webpack_require__(46);

	var _DayPickerKeyboardShortcuts2 = _interopRequireDefault(_DayPickerKeyboardShortcuts);

	var _getTransformStyles = __webpack_require__(21);

	var _getTransformStyles2 = _interopRequireDefault(_getTransformStyles);

	var _getCalendarMonthWidth = __webpack_require__(22);

	var _getCalendarMonthWidth2 = _interopRequireDefault(_getCalendarMonthWidth);

	var _isTouchDevice = __webpack_require__(26);

	var _isTouchDevice2 = _interopRequireDefault(_isTouchDevice);

	var _getActiveElement = __webpack_require__(47);

	var _getActiveElement2 = _interopRequireDefault(_getActiveElement);

	var _isDayVisible = __webpack_require__(48);

	var _isDayVisible2 = _interopRequireDefault(_isDayVisible);

	var _ScrollableOrientationShape = __webpack_require__(16);

	var _ScrollableOrientationShape2 = _interopRequireDefault(_ScrollableOrientationShape);

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

	var MONTH_PADDING = 23;
	var DAY_PICKER_PADDING = 9;
	var PREV_TRANSITION = 'prev';
	var NEXT_TRANSITION = 'next';

	var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
	  // calendar presentation props
	  enableOutsideDays: _propTypes2['default'].bool,
	  numberOfMonths: _propTypes2['default'].number,
	  orientation: _ScrollableOrientationShape2['default'],
	  withPortal: _propTypes2['default'].bool,
	  onOutsideClick: _propTypes2['default'].func,
	  hidden: _propTypes2['default'].bool,
	  initialVisibleMonth: _propTypes2['default'].func,
	  renderCalendarInfo: _propTypes2['default'].func,
	  hideKeyboardShortcutsPanel: _propTypes2['default'].bool,
	  daySize: _airbnbPropTypes.nonNegativeInteger,
	  isRTL: _propTypes2['default'].bool,

	  // navigation props
	  navPrev: _propTypes2['default'].node,
	  navNext: _propTypes2['default'].node,
	  onPrevMonthClick: _propTypes2['default'].func,
	  onNextMonthClick: _propTypes2['default'].func,
	  onMultiplyScrollableMonths: _propTypes2['default'].func, // VERTICAL_SCROLLABLE daypickers only

	  // month props
	  renderMonth: _propTypes2['default'].func,

	  // day props
	  modifiers: _propTypes2['default'].object,
	  renderDay: _propTypes2['default'].func,
	  onDayClick: _propTypes2['default'].func,
	  onDayMouseEnter: _propTypes2['default'].func,
	  onDayMouseLeave: _propTypes2['default'].func,

	  // accessibility props
	  isFocused: _propTypes2['default'].bool,
	  getFirstFocusableDay: _propTypes2['default'].func,
	  onBlur: _propTypes2['default'].func,
	  showKeyboardShortcuts: _propTypes2['default'].bool,

	  // internationalization
	  monthFormat: _propTypes2['default'].string,
	  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.DayPickerPhrases))
	});

	var defaultProps = exports.defaultProps = {
	  // calendar presentation props
	  enableOutsideDays: false,
	  numberOfMonths: 2,
	  orientation: _constants.HORIZONTAL_ORIENTATION,
	  withPortal: false,
	  onOutsideClick: function () {
	    function onOutsideClick() {}

	    return onOutsideClick;
	  }(),

	  hidden: false,
	  initialVisibleMonth: function () {
	    function initialVisibleMonth() {
	      return (0, _moment2['default'])();
	    }

	    return initialVisibleMonth;
	  }(),
	  renderCalendarInfo: null,
	  hideKeyboardShortcutsPanel: false,
	  daySize: _constants.DAY_SIZE,
	  isRTL: false,

	  // navigation props
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
	  onMultiplyScrollableMonths: function () {
	    function onMultiplyScrollableMonths() {}

	    return onMultiplyScrollableMonths;
	  }(),

	  // month props
	  renderMonth: null,

	  // day props
	  modifiers: {},
	  renderDay: null,
	  onDayClick: function () {
	    function onDayClick() {}

	    return onDayClick;
	  }(),
	  onDayMouseEnter: function () {
	    function onDayMouseEnter() {}

	    return onDayMouseEnter;
	  }(),
	  onDayMouseLeave: function () {
	    function onDayMouseLeave() {}

	    return onDayMouseLeave;
	  }(),

	  // accessibility props
	  isFocused: false,
	  getFirstFocusableDay: null,
	  onBlur: function () {
	    function onBlur() {}

	    return onBlur;
	  }(),

	  showKeyboardShortcuts: false,

	  // internationalization
	  monthFormat: 'MMMM YYYY',
	  phrases: _defaultPhrases.DayPickerPhrases
	};

	function applyTransformStyles(el, transform) {
	  var opacity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

	  var transformStyles = (0, _getTransformStyles2['default'])(transform);
	  transformStyles.opacity = opacity;

	  Object.keys(transformStyles).forEach(function (styleKey) {
	    // eslint-disable-next-line no-param-reassign
	    el.style[styleKey] = transformStyles[styleKey];
	  });
	}

	function calculateDimension(el, axis) {
	  var borderBox = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	  var withMargin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	  if (!el) {
	    return 0;
	  }

	  var axisStart = axis === 'width' ? 'Left' : 'Top';
	  var axisEnd = axis === 'width' ? 'Right' : 'Bottom';

	  // Only read styles if we need to
	  var style = !borderBox || withMargin ? window.getComputedStyle(el) : null;

	  // Offset includes border and padding
	  var offsetWidth = el.offsetWidth;
	  var offsetHeight = el.offsetHeight;

	  var size = axis === 'width' ? offsetWidth : offsetHeight;

	  // Get the inner size
	  if (!borderBox) {
	    size -= parseFloat(style['padding' + axisStart]) + parseFloat(style['padding' + axisEnd]) + parseFloat(style['border' + axisStart + 'Width']) + parseFloat(style['border' + axisEnd + 'Width']);
	  }

	  // Apply margin
	  if (withMargin) {
	    size += parseFloat(style['margin' + axisStart]) + parseFloat(style['margin' + axisEnd]);
	  }

	  return size;
	}

	function getMonthHeight(el) {
	  var caption = el.querySelector('.js-CalendarMonth__caption');
	  var grid = el.querySelector('.js-CalendarMonth__grid');

	  // Need to separate out table children for FF
	  // Add an additional +1 for the border
	  return calculateDimension(caption, 'height', true, true) + calculateDimension(grid, 'height') + 1;
	}

	var DayPicker = function (_React$Component) {
	  _inherits(DayPicker, _React$Component);

	  function DayPicker(props) {
	    _classCallCheck(this, DayPicker);

	    var _this = _possibleConstructorReturn(this, (DayPicker.__proto__ || Object.getPrototypeOf(DayPicker)).call(this, props));

	    var currentMonth = props.hidden ? (0, _moment2['default'])() : props.initialVisibleMonth();

	    var focusedDate = currentMonth.clone().startOf('month');
	    if (props.getFirstFocusableDay) {
	      focusedDate = props.getFirstFocusableDay(currentMonth);
	    }

	    var translationValue = props.isRTL && _this.isHorizontal() ? -(0, _getCalendarMonthWidth2['default'])(props.daySize) : 0;

	    _this.hasSetInitialVisibleMonth = !props.hidden;
	    _this.state = {
	      currentMonth: currentMonth,
	      monthTransition: null,
	      translationValue: translationValue,
	      scrollableMonthMultiple: 1,
	      calendarMonthWidth: (0, _getCalendarMonthWidth2['default'])(props.daySize),
	      focusedDate: !props.hidden || props.isFocused ? focusedDate : null,
	      nextFocusedDate: null,
	      showKeyboardShortcuts: props.showKeyboardShortcuts,
	      onKeyboardShortcutsPanelClose: function () {
	        function onKeyboardShortcutsPanelClose() {}

	        return onKeyboardShortcutsPanelClose;
	      }(),

	      isTouchDevice: (0, _isTouchDevice2['default'])(),
	      withMouseInteractions: true
	    };

	    _this.onKeyDown = _this.onKeyDown.bind(_this);
	    _this.onPrevMonthClick = _this.onPrevMonthClick.bind(_this);
	    _this.onNextMonthClick = _this.onNextMonthClick.bind(_this);
	    _this.setCalendarMonthGridRef = _this.setCalendarMonthGridRef.bind(_this);
	    _this.multiplyScrollableMonths = _this.multiplyScrollableMonths.bind(_this);
	    _this.updateStateAfterMonthTransition = _this.updateStateAfterMonthTransition.bind(_this);

	    _this.openKeyboardShortcutsPanel = _this.openKeyboardShortcutsPanel.bind(_this);
	    _this.closeKeyboardShortcutsPanel = _this.closeKeyboardShortcutsPanel.bind(_this);
	    return _this;
	  }

	  _createClass(DayPicker, [{
	    key: 'componentDidMount',
	    value: function () {
	      function componentDidMount() {
	        this.setState({ isTouchDevice: (0, _isTouchDevice2['default'])() });

	        if (this.isHorizontal()) {
	          this.adjustDayPickerHeight();
	          this.initializeDayPickerWidth();
	        }
	      }

	      return componentDidMount;
	    }()
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function () {
	      function componentWillReceiveProps(nextProps) {
	        var hidden = nextProps.hidden;
	        var isFocused = nextProps.isFocused;
	        var showKeyboardShortcuts = nextProps.showKeyboardShortcuts;
	        var onBlur = nextProps.onBlur;
	        var currentMonth = this.state.currentMonth;

	        if (!hidden) {
	          if (!this.hasSetInitialVisibleMonth) {
	            this.hasSetInitialVisibleMonth = true;
	            this.setState({
	              currentMonth: nextProps.initialVisibleMonth()
	            });
	          }

	          if (!this.dayPickerWidth && this.isHorizontal()) {
	            this.initializeDayPickerWidth();
	            this.adjustDayPickerHeight();
	          }
	        }

	        if (nextProps.daySize !== this.props.daySize) {
	          this.setState({
	            calendarMonthWidth: (0, _getCalendarMonthWidth2['default'])(nextProps.daySize)
	          });
	        }

	        if (isFocused !== this.props.isFocused) {
	          if (isFocused) {
	            var focusedDate = this.getFocusedDay(currentMonth);

	            var onKeyboardShortcutsPanelClose = this.state.onKeyboardShortcutsPanelClose;
	            if (nextProps.showKeyboardShortcuts) {
	              // the ? shortcut came from the input and we should return input there once it is close
	              onKeyboardShortcutsPanelClose = onBlur;
	            }

	            this.setState({
	              showKeyboardShortcuts: showKeyboardShortcuts,
	              onKeyboardShortcutsPanelClose: onKeyboardShortcutsPanelClose,
	              focusedDate: focusedDate,
	              withMouseInteractions: false
	            });
	          } else {
	            this.setState({ focusedDate: null });
	          }
	        }
	      }

	      return componentWillReceiveProps;
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
	      function componentDidUpdate(prevProps, prevState) {
	        var _state = this.state;
	        var monthTransition = _state.monthTransition;
	        var currentMonth = _state.currentMonth;
	        var focusedDate = _state.focusedDate;

	        if (monthTransition || !currentMonth.isSame(prevState.currentMonth)) {
	          if (this.isHorizontal()) {
	            this.adjustDayPickerHeight();
	          }
	        }

	        if (!prevProps.isFocused && this.props.isFocused && !focusedDate || !prevProps.showKeyboardShortcuts && this.props.showKeyboardShortcuts) {
	          this.container.focus();
	        }
	      }

	      return componentDidUpdate;
	    }()
	  }, {
	    key: 'onKeyDown',
	    value: function () {
	      function onKeyDown(e) {
	        e.stopPropagation();

	        this.setState({ withMouseInteractions: false });

	        var onBlur = this.props.onBlur;
	        var _state2 = this.state;
	        var focusedDate = _state2.focusedDate;
	        var showKeyboardShortcuts = _state2.showKeyboardShortcuts;

	        if (!focusedDate) return;

	        var newFocusedDate = focusedDate.clone();

	        var didTransitionMonth = false;

	        // focus might be anywhere when the keyboard shortcuts panel is opened so we want to
	        // return it to wherever it was before when the panel was opened
	        var activeElement = (0, _getActiveElement2['default'])();
	        var onKeyboardShortcutsPanelClose = function () {
	          function onKeyboardShortcutsPanelClose() {
	            if (activeElement) activeElement.focus();
	          }

	          return onKeyboardShortcutsPanelClose;
	        }();

	        switch (e.key) {
	          case 'ArrowUp':
	            e.preventDefault();
	            newFocusedDate.subtract(1, 'week');
	            didTransitionMonth = this.maybeTransitionPrevMonth(newFocusedDate);
	            break;
	          case 'ArrowLeft':
	            e.preventDefault();
	            newFocusedDate.subtract(1, 'day');
	            didTransitionMonth = this.maybeTransitionPrevMonth(newFocusedDate);
	            break;
	          case 'Home':
	            e.preventDefault();
	            newFocusedDate.startOf('week');
	            didTransitionMonth = this.maybeTransitionPrevMonth(newFocusedDate);
	            break;
	          case 'PageUp':
	            e.preventDefault();
	            newFocusedDate.subtract(1, 'month');
	            didTransitionMonth = this.maybeTransitionPrevMonth(newFocusedDate);
	            break;

	          case 'ArrowDown':
	            e.preventDefault();
	            newFocusedDate.add(1, 'week');
	            didTransitionMonth = this.maybeTransitionNextMonth(newFocusedDate);
	            break;
	          case 'ArrowRight':
	            e.preventDefault();
	            newFocusedDate.add(1, 'day');
	            didTransitionMonth = this.maybeTransitionNextMonth(newFocusedDate);
	            break;
	          case 'End':
	            e.preventDefault();
	            newFocusedDate.endOf('week');
	            didTransitionMonth = this.maybeTransitionNextMonth(newFocusedDate);
	            break;
	          case 'PageDown':
	            e.preventDefault();
	            newFocusedDate.add(1, 'month');
	            didTransitionMonth = this.maybeTransitionNextMonth(newFocusedDate);
	            break;

	          case '?':
	            this.openKeyboardShortcutsPanel(onKeyboardShortcutsPanelClose);
	            break;

	          case 'Escape':
	            if (showKeyboardShortcuts) {
	              this.closeKeyboardShortcutsPanel();
	            } else {
	              onBlur();
	            }
	            break;

	          default:
	            break;
	        }

	        // If there was a month transition, do not update the focused date until the transition has
	        // completed. Otherwise, attempting to focus on a DOM node may interrupt the CSS animation. If
	        // didTransitionMonth is true, the focusedDate gets updated in #updateStateAfterMonthTransition
	        if (!didTransitionMonth) {
	          this.setState({
	            focusedDate: newFocusedDate
	          });
	        }
	      }

	      return onKeyDown;
	    }()
	  }, {
	    key: 'onPrevMonthClick',
	    value: function () {
	      function onPrevMonthClick(nextFocusedDate, e) {
	        var isRTL = this.props.isRTL;

	        if (e) e.preventDefault();

	        var translationValue = this.isVertical() ? this.getMonthHeightByIndex(0) : this.dayPickerWidth;

	        if (isRTL && this.isHorizontal()) {
	          translationValue = -2 * this.dayPickerWidth;
	        }

	        // The first CalendarMonth is always positioned absolute at top: 0 or left: 0
	        // so we need to transform it to the appropriate location before the animation.
	        // This behavior is because we would otherwise need a double-render in order to
	        // adjust the container position once we had the height the first calendar
	        // (ie first draw all the calendar, then in a second render, use the first calendar's
	        // height to position the container). Variable calendar heights, amirite? <3 Maja
	        this.translateFirstDayPickerForAnimation(translationValue);

	        this.setState({
	          monthTransition: PREV_TRANSITION,
	          translationValue: translationValue,
	          focusedDate: null,
	          nextFocusedDate: nextFocusedDate
	        });
	      }

	      return onPrevMonthClick;
	    }()
	  }, {
	    key: 'onNextMonthClick',
	    value: function () {
	      function onNextMonthClick(nextFocusedDate, e) {
	        var isRTL = this.props.isRTL;

	        if (e) e.preventDefault();

	        var translationValue = this.isVertical() ? -this.getMonthHeightByIndex(1) : -this.dayPickerWidth;

	        if (isRTL && this.isHorizontal()) {
	          translationValue = 0;
	        }

	        this.setState({
	          monthTransition: NEXT_TRANSITION,
	          translationValue: translationValue,
	          focusedDate: null,
	          nextFocusedDate: nextFocusedDate
	        });
	      }

	      return onNextMonthClick;
	    }()
	  }, {
	    key: 'getFocusedDay',
	    value: function () {
	      function getFocusedDay(newMonth) {
	        var _props = this.props;
	        var getFirstFocusableDay = _props.getFirstFocusableDay;
	        var numberOfMonths = _props.numberOfMonths;

	        var focusedDate = void 0;
	        if (getFirstFocusableDay) {
	          focusedDate = getFirstFocusableDay(newMonth);
	        }

	        if (newMonth && (!focusedDate || !(0, _isDayVisible2['default'])(focusedDate, newMonth, numberOfMonths))) {
	          focusedDate = newMonth.clone().startOf('month');
	        }

	        return focusedDate;
	      }

	      return getFocusedDay;
	    }()
	  }, {
	    key: 'getMonthHeightByIndex',
	    value: function () {
	      function getMonthHeightByIndex(i) {
	        return getMonthHeight(this.transitionContainer.querySelectorAll('.CalendarMonth')[i]);
	      }

	      return getMonthHeightByIndex;
	    }()
	  }, {
	    key: 'setCalendarMonthGridRef',
	    value: function () {
	      function setCalendarMonthGridRef(ref) {
	        this.calendarMonthGrid = ref;
	      }

	      return setCalendarMonthGridRef;
	    }()
	  }, {
	    key: 'maybeTransitionNextMonth',
	    value: function () {
	      function maybeTransitionNextMonth(newFocusedDate) {
	        var numberOfMonths = this.props.numberOfMonths;
	        var _state3 = this.state;
	        var currentMonth = _state3.currentMonth;
	        var focusedDate = _state3.focusedDate;

	        var newFocusedDateMonth = newFocusedDate.month();
	        var focusedDateMonth = focusedDate.month();
	        var isNewFocusedDateVisible = (0, _isDayVisible2['default'])(newFocusedDate, currentMonth, numberOfMonths);
	        if (newFocusedDateMonth !== focusedDateMonth && !isNewFocusedDateVisible) {
	          this.onNextMonthClick(newFocusedDate);
	          return true;
	        }

	        return false;
	      }

	      return maybeTransitionNextMonth;
	    }()
	  }, {
	    key: 'maybeTransitionPrevMonth',
	    value: function () {
	      function maybeTransitionPrevMonth(newFocusedDate) {
	        var numberOfMonths = this.props.numberOfMonths;
	        var _state4 = this.state;
	        var currentMonth = _state4.currentMonth;
	        var focusedDate = _state4.focusedDate;

	        var newFocusedDateMonth = newFocusedDate.month();
	        var focusedDateMonth = focusedDate.month();
	        var isNewFocusedDateVisible = (0, _isDayVisible2['default'])(newFocusedDate, currentMonth, numberOfMonths);
	        if (newFocusedDateMonth !== focusedDateMonth && !isNewFocusedDateVisible) {
	          this.onPrevMonthClick(newFocusedDate);
	          return true;
	        }

	        return false;
	      }

	      return maybeTransitionPrevMonth;
	    }()
	  }, {
	    key: 'multiplyScrollableMonths',
	    value: function () {
	      function multiplyScrollableMonths(e) {
	        var onMultiplyScrollableMonths = this.props.onMultiplyScrollableMonths;

	        if (e) e.preventDefault();

	        if (onMultiplyScrollableMonths) onMultiplyScrollableMonths(e);

	        this.setState({
	          scrollableMonthMultiple: this.state.scrollableMonthMultiple + 1
	        });
	      }

	      return multiplyScrollableMonths;
	    }()
	  }, {
	    key: 'isHorizontal',
	    value: function () {
	      function isHorizontal() {
	        return this.props.orientation === _constants.HORIZONTAL_ORIENTATION;
	      }

	      return isHorizontal;
	    }()
	  }, {
	    key: 'isVertical',
	    value: function () {
	      function isVertical() {
	        return this.props.orientation === _constants.VERTICAL_ORIENTATION || this.props.orientation === _constants.VERTICAL_SCROLLABLE;
	      }

	      return isVertical;
	    }()
	  }, {
	    key: 'initializeDayPickerWidth',
	    value: function () {
	      function initializeDayPickerWidth() {
	        if (this.calendarMonthGrid) {
	          // eslint-disable-next-line react/no-find-dom-node
	          var calendarMonthGridDOMNode = _reactDom2['default'].findDOMNode(this.calendarMonthGrid);
	          if (calendarMonthGridDOMNode) {
	            this.dayPickerWidth = calculateDimension(calendarMonthGridDOMNode.querySelector('.CalendarMonth'), 'width', true);
	          }
	        }
	      }

	      return initializeDayPickerWidth;
	    }()
	  }, {
	    key: 'updateStateAfterMonthTransition',
	    value: function () {
	      function updateStateAfterMonthTransition() {
	        var _props2 = this.props;
	        var onPrevMonthClick = _props2.onPrevMonthClick;
	        var onNextMonthClick = _props2.onNextMonthClick;
	        var _state5 = this.state;
	        var currentMonth = _state5.currentMonth;
	        var monthTransition = _state5.monthTransition;
	        var focusedDate = _state5.focusedDate;
	        var nextFocusedDate = _state5.nextFocusedDate;
	        var withMouseInteractions = _state5.withMouseInteractions;

	        if (!monthTransition) return;

	        var newMonth = currentMonth.clone();
	        if (monthTransition === PREV_TRANSITION) {
	          if (onPrevMonthClick) onPrevMonthClick();
	          newMonth.subtract(1, 'month');
	        } else if (monthTransition === NEXT_TRANSITION) {
	          if (onNextMonthClick) onNextMonthClick();
	          newMonth.add(1, 'month');
	        }

	        var newFocusedDate = null;
	        if (nextFocusedDate) {
	          newFocusedDate = nextFocusedDate;
	        } else if (!focusedDate && !withMouseInteractions) {
	          newFocusedDate = this.getFocusedDay(newMonth);
	        }

	        if (this.calendarMonthGrid) {
	          // eslint-disable-next-line react/no-find-dom-node
	          var calendarMonthGridDOMNode = _reactDom2['default'].findDOMNode(this.calendarMonthGrid);
	          if (calendarMonthGridDOMNode) {
	            // clear the previous transforms
	            applyTransformStyles(calendarMonthGridDOMNode.querySelector('.CalendarMonth'), 'none');
	          }
	        }

	        this.setState({
	          currentMonth: newMonth,
	          monthTransition: null,
	          translationValue: this.props.isRTL && this.isHorizontal() ? -this.dayPickerWidth : 0,
	          nextFocusedDate: null,
	          focusedDate: newFocusedDate
	        }, function () {
	          // we don't want to focus on the relevant calendar day after a month transition
	          // if the user is navigating around using a mouse
	          if (withMouseInteractions) {
	            var activeElement = (0, _getActiveElement2['default'])();
	            if (activeElement && activeElement !== document.body) {
	              activeElement.blur();
	            }
	          }
	        });
	      }

	      return updateStateAfterMonthTransition;
	    }()
	  }, {
	    key: 'adjustDayPickerHeight',
	    value: function () {
	      function adjustDayPickerHeight() {
	        var heights = [];

	        Array.prototype.forEach.call(this.transitionContainer.querySelectorAll('.CalendarMonth'), function (el) {
	          if (el.getAttribute('data-visible') === 'true') {
	            heights.push(getMonthHeight(el));
	          }
	        });

	        var newMonthHeight = Math.max.apply(Math, heights) + MONTH_PADDING;

	        if (newMonthHeight !== calculateDimension(this.transitionContainer, 'height')) {
	          this.monthHeight = newMonthHeight;
	          this.transitionContainer.style.height = String(newMonthHeight) + 'px';
	        }
	      }

	      return adjustDayPickerHeight;
	    }()
	  }, {
	    key: 'translateFirstDayPickerForAnimation',
	    value: function () {
	      function translateFirstDayPickerForAnimation(translationValue) {
	        var isRTL = this.props.isRTL;

	        var convertedTranslationValue = -translationValue;
	        if (isRTL && this.isHorizontal()) {
	          var positiveTranslationValue = Math.abs(translationValue + this.dayPickerWidth);
	          convertedTranslationValue = positiveTranslationValue;
	        }
	        var transformType = this.isVertical() ? 'translateY' : 'translateX';
	        var transformValue = transformType + '(' + String(convertedTranslationValue) + 'px)';

	        applyTransformStyles(this.transitionContainer.querySelector('.CalendarMonth'), transformValue, 1);
	      }

	      return translateFirstDayPickerForAnimation;
	    }()
	  }, {
	    key: 'openKeyboardShortcutsPanel',
	    value: function () {
	      function openKeyboardShortcutsPanel(onCloseCallBack) {
	        this.setState({
	          showKeyboardShortcuts: true,
	          onKeyboardShortcutsPanelClose: onCloseCallBack
	        });
	      }

	      return openKeyboardShortcutsPanel;
	    }()
	  }, {
	    key: 'closeKeyboardShortcutsPanel',
	    value: function () {
	      function closeKeyboardShortcutsPanel() {
	        var onKeyboardShortcutsPanelClose = this.state.onKeyboardShortcutsPanelClose;

	        if (onKeyboardShortcutsPanelClose) {
	          onKeyboardShortcutsPanelClose();
	        }

	        this.setState({
	          onKeyboardShortcutsPanelClose: null,
	          showKeyboardShortcuts: false
	        });
	      }

	      return closeKeyboardShortcutsPanel;
	    }()
	  }, {
	    key: 'renderNavigation',
	    value: function () {
	      function renderNavigation() {
	        var _this2 = this;

	        var _props3 = this.props;
	        var navPrev = _props3.navPrev;
	        var navNext = _props3.navNext;
	        var orientation = _props3.orientation;
	        var phrases = _props3.phrases;
	        var isRTL = _props3.isRTL;

	        var onNextMonthClick = void 0;
	        if (orientation === _constants.VERTICAL_SCROLLABLE) {
	          onNextMonthClick = this.multiplyScrollableMonths;
	        } else {
	          onNextMonthClick = function () {
	            function onNextMonthClick(e) {
	              _this2.onNextMonthClick(null, e);
	            }

	            return onNextMonthClick;
	          }();
	        }

	        return _react2['default'].createElement(_DayPickerNavigation2['default'], {
	          onPrevMonthClick: function () {
	            function onPrevMonthClick(e) {
	              _this2.onPrevMonthClick(null, e);
	            }

	            return onPrevMonthClick;
	          }(),
	          onNextMonthClick: onNextMonthClick,
	          navPrev: navPrev,
	          navNext: navNext,
	          orientation: orientation,
	          phrases: phrases,
	          isRTL: isRTL
	        });
	      }

	      return renderNavigation;
	    }()
	  }, {
	    key: 'renderWeekHeader',
	    value: function () {
	      function renderWeekHeader(index) {
	        var _props4 = this.props;
	        var daySize = _props4.daySize;
	        var orientation = _props4.orientation;
	        var calendarMonthWidth = this.state.calendarMonthWidth;

	        var verticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;
	        var horizontalStyle = {
	          left: index * calendarMonthWidth
	        };
	        var verticalStyle = {
	          marginLeft: -calendarMonthWidth / 2
	        };

	        var style = {}; // no styles applied to the vertical-scrollable orientation
	        if (this.isHorizontal()) {
	          style = horizontalStyle;
	        } else if (this.isVertical() && !verticalScrollable) {
	          style = verticalStyle;
	        }

	        var header = [];
	        for (var i = 0; i < 7; i += 1) {
	          header.push(_react2['default'].createElement('li', { key: i, style: { width: daySize } }, _react2['default'].createElement('small', null, (0, _moment2['default'])().weekday(i).format('dd'))));
	        }

	        return _react2['default'].createElement('div', {
	          className: 'DayPicker__week-header',
	          key: 'week-' + String(index),
	          style: style
	        }, _react2['default'].createElement('ul', null, header));
	      }

	      return renderWeekHeader;
	    }()
	  }, {
	    key: 'render',
	    value: function () {
	      function render() {
	        var _this3 = this;

	        var _state6 = this.state;
	        var calendarMonthWidth = _state6.calendarMonthWidth;
	        var currentMonth = _state6.currentMonth;
	        var monthTransition = _state6.monthTransition;
	        var translationValue = _state6.translationValue;
	        var scrollableMonthMultiple = _state6.scrollableMonthMultiple;
	        var focusedDate = _state6.focusedDate;
	        var showKeyboardShortcuts = _state6.showKeyboardShortcuts;
	        var isTouch = _state6.isTouchDevice;
	        var _props5 = this.props;
	        var enableOutsideDays = _props5.enableOutsideDays;
	        var numberOfMonths = _props5.numberOfMonths;
	        var orientation = _props5.orientation;
	        var modifiers = _props5.modifiers;
	        var withPortal = _props5.withPortal;
	        var onDayClick = _props5.onDayClick;
	        var onDayMouseEnter = _props5.onDayMouseEnter;
	        var onDayMouseLeave = _props5.onDayMouseLeave;
	        var renderMonth = _props5.renderMonth;
	        var renderDay = _props5.renderDay;
	        var renderCalendarInfo = _props5.renderCalendarInfo;
	        var hideKeyboardShortcutsPanel = _props5.hideKeyboardShortcutsPanel;
	        var onOutsideClick = _props5.onOutsideClick;
	        var monthFormat = _props5.monthFormat;
	        var daySize = _props5.daySize;
	        var isFocused = _props5.isFocused;
	        var phrases = _props5.phrases;

	        var numOfWeekHeaders = this.isVertical() ? 1 : numberOfMonths;
	        var weekHeaders = [];
	        for (var i = 0; i < numOfWeekHeaders; i += 1) {
	          weekHeaders.push(this.renderWeekHeader(i));
	        }

	        var firstVisibleMonthIndex = 1;
	        if (monthTransition === PREV_TRANSITION) {
	          firstVisibleMonthIndex -= 1;
	        } else if (monthTransition === NEXT_TRANSITION) {
	          firstVisibleMonthIndex += 1;
	        }

	        var verticalScrollable = this.props.orientation === _constants.VERTICAL_SCROLLABLE;
	        if (verticalScrollable) firstVisibleMonthIndex = 0;

	        var dayPickerClassNames = (0, _classnames2['default'])('DayPicker', {
	          'DayPicker--horizontal': this.isHorizontal(),
	          'DayPicker--vertical': this.isVertical(),
	          'DayPicker--vertical-scrollable': verticalScrollable,
	          'DayPicker--portal': withPortal
	        });

	        var transitionContainerClasses = (0, _classnames2['default'])('transition-container', {
	          'transition-container--horizontal': this.isHorizontal(),
	          'transition-container--vertical': this.isVertical()
	        });

	        var horizontalWidth = calendarMonthWidth * numberOfMonths + 2 * DAY_PICKER_PADDING;

	        // this is a kind of made-up value that generally looks good. we'll
	        // probably want to let the user set this explicitly.
	        var verticalHeight = 1.75 * calendarMonthWidth;

	        var dayPickerStyle = {
	          width: this.isHorizontal() && horizontalWidth,

	          // These values are to center the datepicker (approximately) on the page
	          marginLeft: this.isHorizontal() && withPortal && -horizontalWidth / 2,
	          marginTop: this.isHorizontal() && withPortal && -calendarMonthWidth / 2
	        };

	        var transitionContainerStyle = {
	          width: this.isHorizontal() && horizontalWidth,
	          height: this.isVertical() && !verticalScrollable && !withPortal && verticalHeight
	        };

	        var isCalendarMonthGridAnimating = monthTransition !== null;
	        var transformType = this.isVertical() ? 'translateY' : 'translateX';
	        var transformValue = transformType + '(' + String(translationValue) + 'px)';

	        var shouldFocusDate = !isCalendarMonthGridAnimating && isFocused;

	        var keyboardShortcutButtonLocation = _DayPickerKeyboardShortcuts.BOTTOM_RIGHT;
	        if (this.isVertical()) {
	          keyboardShortcutButtonLocation = withPortal ? _DayPickerKeyboardShortcuts.TOP_LEFT : _DayPickerKeyboardShortcuts.TOP_RIGHT;
	        }

	        return _react2['default'].createElement('div', {
	          className: dayPickerClassNames,
	          style: dayPickerStyle
	        }, _react2['default'].createElement(_OutsideClickHandler2['default'], { onOutsideClick: onOutsideClick }, _react2['default'].createElement('div', {
	          className: 'DayPicker__week-headers',
	          'aria-hidden': 'true',
	          role: 'presentation'
	        }, weekHeaders), _react2['default'].createElement('div', { // eslint-disable-line jsx-a11y/no-noninteractive-element-interactions
	          className: 'DayPicker__focus-region',
	          ref: function () {
	            function ref(_ref2) {
	              _this3.container = _ref2;
	            }

	            return ref;
	          }(),
	          onClick: function () {
	            function onClick(e) {
	              e.stopPropagation();
	            }

	            return onClick;
	          }(),
	          onKeyDown: (0, _lodash2['default'])(this.onKeyDown, 300),
	          onMouseUp: function () {
	            function onMouseUp() {
	              _this3.setState({ withMouseInteractions: true });
	            }

	            return onMouseUp;
	          }(),
	          role: 'region',
	          tabIndex: -1
	        }, !verticalScrollable && this.renderNavigation(), _react2['default'].createElement('div', {
	          className: transitionContainerClasses,
	          ref: function () {
	            function ref(_ref) {
	              _this3.transitionContainer = _ref;
	            }

	            return ref;
	          }(),
	          style: transitionContainerStyle
	        }, _react2['default'].createElement(_CalendarMonthGrid2['default'], {
	          ref: this.setCalendarMonthGridRef,
	          transformValue: transformValue,
	          enableOutsideDays: enableOutsideDays,
	          firstVisibleMonthIndex: firstVisibleMonthIndex,
	          initialMonth: currentMonth,
	          isAnimating: isCalendarMonthGridAnimating,
	          modifiers: modifiers,
	          orientation: orientation,
	          numberOfMonths: numberOfMonths * scrollableMonthMultiple,
	          onDayClick: onDayClick,
	          onDayMouseEnter: onDayMouseEnter,
	          onDayMouseLeave: onDayMouseLeave,
	          renderMonth: renderMonth,
	          renderDay: renderDay,
	          onMonthTransitionEnd: this.updateStateAfterMonthTransition,
	          monthFormat: monthFormat,
	          daySize: daySize,
	          isFocused: shouldFocusDate,
	          focusedDate: focusedDate,
	          phrases: phrases
	        }), verticalScrollable && this.renderNavigation()), !isTouch && !hideKeyboardShortcutsPanel && _react2['default'].createElement(_DayPickerKeyboardShortcuts2['default'], {
	          block: this.isVertical() && !withPortal,
	          buttonLocation: keyboardShortcutButtonLocation,
	          showKeyboardShortcutsPanel: showKeyboardShortcuts,
	          openKeyboardShortcutsPanel: this.openKeyboardShortcutsPanel,
	          closeKeyboardShortcutsPanel: this.closeKeyboardShortcutsPanel,
	          phrases: phrases
	        })), renderCalendarInfo && renderCalendarInfo()));
	      }

	      return render;
	    }()
	  }]);

	  return DayPicker;
	}(_react2['default'].Component);

	exports['default'] = DayPicker;

	DayPicker.propTypes = propTypes;
	DayPicker.defaultProps = defaultProps;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("prop-types");

/***/ },
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
/* 16 */
/***/ function(module, exports) {

	module.exports = require("../shapes/ScrollableOrientationShape");

/***/ },
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ function(module, exports) {

	module.exports = require("../utils/getTransformStyles");

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("../utils/getCalendarMonthWidth");

/***/ },
/* 23 */,
/* 24 */,
/* 25 */
/***/ function(module, exports) {

	module.exports = require("lodash.throttle");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("../utils/isTouchDevice");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 28 */,
/* 29 */
/***/ function(module, exports) {

	module.exports = require("./OutsideClickHandler");

/***/ },
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ function(module, exports) {

	module.exports = require("./CalendarMonthGrid");

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = require("./DayPickerNavigation");

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = require("./DayPickerKeyboardShortcuts");

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = require("../utils/getActiveElement");

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = require("../utils/isDayVisible");

/***/ }
/******/ ]);