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

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BOTTOM_RIGHT = exports.TOP_RIGHT = exports.TOP_LEFT = undefined;
	exports.KeyboardShortcutRow = KeyboardShortcutRow;
	exports['default'] = DayPickerKeyboardShortcuts;

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

	var _close = __webpack_require__(34);

	var _close2 = _interopRequireDefault(_close);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var TOP_LEFT = exports.TOP_LEFT = 'top-left';
	var TOP_RIGHT = exports.TOP_RIGHT = 'top-right';
	var BOTTOM_RIGHT = exports.BOTTOM_RIGHT = 'bottom-right';

	var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
	  block: _propTypes2['default'].bool,
	  buttonLocation: _propTypes2['default'].oneOf([TOP_LEFT, TOP_RIGHT, BOTTOM_RIGHT]),
	  showKeyboardShortcutsPanel: _propTypes2['default'].bool,
	  openKeyboardShortcutsPanel: _propTypes2['default'].func,
	  closeKeyboardShortcutsPanel: _propTypes2['default'].func,
	  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.DayPickerKeyboardShortcutsPhrases))
	});

	var defaultProps = {
	  block: false,
	  buttonLocation: BOTTOM_RIGHT,
	  showKeyboardShortcutsPanel: false,
	  openKeyboardShortcutsPanel: function () {
	    function openKeyboardShortcutsPanel() {}

	    return openKeyboardShortcutsPanel;
	  }(),
	  closeKeyboardShortcutsPanel: function () {
	    function closeKeyboardShortcutsPanel() {}

	    return closeKeyboardShortcutsPanel;
	  }(),

	  phrases: _defaultPhrases.DayPickerKeyboardShortcutsPhrases
	};

	function KeyboardShortcutRow(_ref) {
	  var unicode = _ref.unicode;
	  var label = _ref.label;
	  var action = _ref.action;

	  return _react2['default'].createElement('li', { className: 'KeyboardShortcutRow' }, _react2['default'].createElement('div', {
	    className: 'KeyboardShortcutRow__key-container'
	  }, _react2['default'].createElement('span', {
	    className: 'KeyboardShortcutRow__key',
	    role: 'img',
	    'aria-label': label
	  }, unicode)), _react2['default'].createElement('div', { className: 'KeyboardShortcutRow__action' }, action));
	}

	KeyboardShortcutRow.propTypes = {
	  unicode: _propTypes2['default'].string.isRequired,
	  label: _propTypes2['default'].string.isRequired,
	  action: _propTypes2['default'].string.isRequired
	};

	function DayPickerKeyboardShortcuts(_ref2) {
	  var _this = this;

	  var block = _ref2.block;
	  var buttonLocation = _ref2.buttonLocation;
	  var showKeyboardShortcutsPanel = _ref2.showKeyboardShortcutsPanel;
	  var openKeyboardShortcutsPanel = _ref2.openKeyboardShortcutsPanel;
	  var closeKeyboardShortcutsPanel = _ref2.closeKeyboardShortcutsPanel;
	  var phrases = _ref2.phrases;

	  var keyboardShortcuts = [{
	    unicode: '↵',
	    label: phrases.enterKey,
	    action: phrases.selectFocusedDate
	  }, {
	    unicode: '←/→',
	    label: phrases.leftArrowRightArrow,
	    action: phrases.moveFocusByOneDay
	  }, {
	    unicode: '↑/↓',
	    label: phrases.upArrowDownArrow,
	    action: phrases.moveFocusByOneWeek
	  }, {
	    unicode: 'PgUp/PgDn',
	    label: phrases.pageUpPageDown,
	    action: phrases.moveFocusByOneMonth
	  }, {
	    unicode: 'Home/End',
	    label: phrases.homeEnd,
	    action: phrases.moveFocustoStartAndEndOfWeek
	  }, {
	    unicode: 'Esc',
	    label: phrases.escape,
	    action: phrases.returnFocusToInput
	  }, {
	    unicode: '?',
	    label: phrases.questionMark,
	    action: phrases.openThisPanel
	  }];

	  var toggleButtonText = showKeyboardShortcutsPanel ? phrases.hideKeyboardShortcutsPanel : phrases.showKeyboardShortcutsPanel;

	  return _react2['default'].createElement('div', null, _react2['default'].createElement('button', {
	    ref: function () {
	      function ref(_ref3) {
	        _this.showKeyboardShortcutsButton = _ref3;
	      }

	      return ref;
	    }(),
	    className: (0, _classnames2['default'])('DayPickerKeyboardShortcuts__show', {
	      'DayPickerKeyboardShortcuts__show--bottom-right': buttonLocation === BOTTOM_RIGHT,
	      'DayPickerKeyboardShortcuts__show--top-right': buttonLocation === TOP_RIGHT,
	      'DayPickerKeyboardShortcuts__show--top-left': buttonLocation === TOP_LEFT
	    }),
	    type: 'button',
	    'aria-label': toggleButtonText,
	    onClick: function () {
	      function onClick() {
	        // we want to return focus to this button after closing the keyboard shortcuts panel
	        openKeyboardShortcutsPanel(function () {
	          _this.showKeyboardShortcutsButton.focus();
	        });
	      }

	      return onClick;
	    }(),
	    onMouseUp: function () {
	      function onMouseUp(e) {
	        e.currentTarget.blur();
	      }

	      return onMouseUp;
	    }()
	  }, _react2['default'].createElement('span', { className: 'DayPickerKeyboardShortcuts__show_span' }, '?')), showKeyboardShortcutsPanel && _react2['default'].createElement('div', {
	    className: (0, _classnames2['default'])('DayPickerKeyboardShortcuts__panel', {
	      'DayPickerKeyboardShortcuts__panel--block': block
	    }),
	    role: 'dialog',
	    'aria-labelledby': 'DayPickerKeyboardShortcuts__title'
	  }, _react2['default'].createElement('div', {
	    id: 'DayPickerKeyboardShortcuts__title',
	    className: 'DayPickerKeyboardShortcuts__title'
	  }, phrases.keyboardShortcuts), _react2['default'].createElement('button', {
	    className: 'DayPickerKeyboardShortcuts__close',
	    type: 'button',
	    'aria-label': phrases.hideKeyboardShortcutsPanel,
	    onClick: closeKeyboardShortcutsPanel,
	    onKeyDown: function () {
	      function onKeyDown(e) {
	        // Because the close button is the only focusable element inside of the panel, this
	        // amount to a very basic focus trap. The user can exit the panel by "pressing" the
	        // close button or hitting escape
	        if (e.key === 'Tab') {
	          e.preventDefault();
	        }
	      }

	      return onKeyDown;
	    }()
	  }, _react2['default'].createElement(_close2['default'], null)), _react2['default'].createElement('ul', { className: 'DayPickerKeyboardShortcuts__list' }, keyboardShortcuts.map(function (_ref4) {
	    var unicode = _ref4.unicode;
	    var label = _ref4.label;
	    var action = _ref4.action;
	    return _react2['default'].createElement(KeyboardShortcutRow, { key: label, unicode: unicode, label: label, action: action });
	  }))));
	}

	DayPickerKeyboardShortcuts.propTypes = propTypes;
	DayPickerKeyboardShortcuts.defaultProps = defaultProps;

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

/***/ 8:
/***/ function(module, exports) {

	module.exports = require("../defaultPhrases");

/***/ },

/***/ 9:
/***/ function(module, exports) {

	module.exports = require("../utils/getPhrasePropTypes");

/***/ },

/***/ 34:
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

/***/ }

/******/ });