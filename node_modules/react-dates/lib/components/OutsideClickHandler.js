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

	var _consolidatedEvents = __webpack_require__(18);

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

	// import { forbidExtraProps } from 'airbnb-prop-types'; // TODO: add to propTypes; semver-major


	var propTypes = {
	  children: _propTypes2['default'].node,
	  onOutsideClick: _propTypes2['default'].func
	};

	var defaultProps = {
	  children: _react2['default'].createElement('span', null),
	  onOutsideClick: function () {
	    function onOutsideClick() {}

	    return onOutsideClick;
	  }()
	};

	var OutsideClickHandler = function (_React$Component) {
	  _inherits(OutsideClickHandler, _React$Component);

	  function OutsideClickHandler(props) {
	    _classCallCheck(this, OutsideClickHandler);

	    var _this = _possibleConstructorReturn(this, (OutsideClickHandler.__proto__ || Object.getPrototypeOf(OutsideClickHandler)).call(this, props));

	    _this.onOutsideClick = _this.onOutsideClick.bind(_this);
	    return _this;
	  }

	  _createClass(OutsideClickHandler, [{
	    key: 'componentDidMount',
	    value: function () {
	      function componentDidMount() {
	        // `capture` flag is set to true so that a `stopPropagation` in the children
	        // will not prevent all outside click handlers from firing - maja
	        this.clickHandle = (0, _consolidatedEvents.addEventListener)(document, 'click', this.onOutsideClick, { capture: true });
	      }

	      return componentDidMount;
	    }()
	  }, {
	    key: 'componentWillUnmount',
	    value: function () {
	      function componentWillUnmount() {
	        if (this.clickHandle) (0, _consolidatedEvents.removeEventListener)(this.clickHandle);
	      }

	      return componentWillUnmount;
	    }()
	  }, {
	    key: 'onOutsideClick',
	    value: function () {
	      function onOutsideClick(e) {
	        var isDescendantOfRoot = this.childNode.contains(e.target);
	        if (!isDescendantOfRoot) {
	          this.props.onOutsideClick(e);
	        }
	      }

	      return onOutsideClick;
	    }()
	  }, {
	    key: 'render',
	    value: function () {
	      function render() {
	        var _this2 = this;

	        return _react2['default'].createElement('div', { ref: function () {
	            function ref(_ref) {
	              _this2.childNode = _ref;
	            }

	            return ref;
	          }() }, this.props.children);
	      }

	      return render;
	    }()
	  }]);

	  return OutsideClickHandler;
	}(_react2['default'].Component);

	exports['default'] = OutsideClickHandler;

	OutsideClickHandler.propTypes = propTypes;
	OutsideClickHandler.defaultProps = defaultProps;

/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = require("prop-types");

/***/ },

/***/ 18:
/***/ function(module, exports) {

	module.exports = require("consolidated-events");

/***/ }

/******/ });