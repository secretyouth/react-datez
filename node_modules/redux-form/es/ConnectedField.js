var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import createFieldProps from './createFieldProps';
import onChangeValue from './events/onChangeValue';
import { dataKey } from './util/eventConsts';
import plain from './structure/plain';

var propsToNotUpdateFor = ['_reduxForm'];

var isObject = function isObject(entity) {
  return entity && (typeof entity === 'undefined' ? 'undefined' : _typeof(entity)) === 'object';
};

var isFunction = function isFunction(entity) {
  return entity && typeof entity === 'function';
};

var eventPreventDefault = function eventPreventDefault(event) {
  if (isObject(event) && isFunction(event.preventDefault)) {
    event.preventDefault();
  }
};

var eventDataTransferGetData = function eventDataTransferGetData(event, key) {
  if (isObject(event) && isObject(event.dataTransfer) && isFunction(event.dataTransfer.getData)) {
    return event.dataTransfer.getData(key);
  }
};

var eventDataTransferSetData = function eventDataTransferSetData(event, key, value) {
  if (isObject(event) && isObject(event.dataTransfer) && isFunction(event.dataTransfer.setData)) {
    event.dataTransfer.setData(key, value);
  }
};

var createConnectedField = function createConnectedField(_ref) {
  var deepEqual = _ref.deepEqual,
      getIn = _ref.getIn,
      toJS = _ref.toJS;

  var getSyncError = function getSyncError(syncErrors, name) {
    var error = plain.getIn(syncErrors, name
    // Because the error for this field might not be at a level in the error structure where
    // it can be set directly, it might need to be unwrapped from the _error property
    );return error && error._error ? error._error : error;
  };

  var getSyncWarning = function getSyncWarning(syncWarnings, name) {
    var warning = getIn(syncWarnings, name
    // Because the warning for this field might not be at a level in the warning structure where
    // it can be set directly, it might need to be unwrapped from the _warning property
    );return warning && warning._warning ? warning._warning : warning;
  };

  var ConnectedField = function (_Component) {
    _inherits(ConnectedField, _Component);

    function ConnectedField(props) {
      _classCallCheck(this, ConnectedField);

      var _this = _possibleConstructorReturn(this, (ConnectedField.__proto__ || Object.getPrototypeOf(ConnectedField)).call(this, props));

      _this.handleChange = _this.handleChange.bind(_this);
      _this.handleFocus = _this.handleFocus.bind(_this);
      _this.handleBlur = _this.handleBlur.bind(_this);
      _this.handleDragStart = _this.handleDragStart.bind(_this);
      _this.handleDrop = _this.handleDrop.bind(_this);
      return _this;
    }

    _createClass(ConnectedField, [{
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        var _this2 = this;

        var nextPropsKeys = Object.keys(nextProps);
        var thisPropsKeys = Object.keys(this.props);
        return nextPropsKeys.length !== thisPropsKeys.length || nextPropsKeys.some(function (prop) {
          return !~propsToNotUpdateFor.indexOf(prop) && !deepEqual(_this2.props[prop], nextProps[prop]);
        });
      }
    }, {
      key: 'isPristine',
      value: function isPristine() {
        return this.props.pristine;
      }
    }, {
      key: 'getValue',
      value: function getValue() {
        return this.props.value;
      }
    }, {
      key: 'getRenderedComponent',
      value: function getRenderedComponent() {
        return this.refs.renderedComponent;
      }
    }, {
      key: 'handleChange',
      value: function handleChange(event) {
        var _props = this.props,
            name = _props.name,
            dispatch = _props.dispatch,
            parse = _props.parse,
            normalize = _props.normalize,
            onChange = _props.onChange,
            _reduxForm = _props._reduxForm,
            previousValue = _props.value;

        var newValue = onChangeValue(event, { name: name, parse: parse, normalize: normalize });

        var defaultPrevented = false;
        if (onChange) {
          onChange(_extends({}, event, {
            preventDefault: function preventDefault() {
              defaultPrevented = true;
              return eventPreventDefault(event);
            }
          }), newValue, previousValue);
        }
        if (!defaultPrevented) {
          // dispatch change action
          dispatch(_reduxForm.change(name, newValue));
        }
      }
    }, {
      key: 'handleFocus',
      value: function handleFocus(event) {
        var _props2 = this.props,
            name = _props2.name,
            dispatch = _props2.dispatch,
            onFocus = _props2.onFocus,
            _reduxForm = _props2._reduxForm;


        var defaultPrevented = false;
        if (onFocus) {
          onFocus(_extends({}, event, {
            preventDefault: function preventDefault() {
              defaultPrevented = true;
              return eventPreventDefault(event);
            }
          }));
        }

        if (!defaultPrevented) {
          dispatch(_reduxForm.focus(name));
        }
      }
    }, {
      key: 'handleBlur',
      value: function handleBlur(event) {
        var _props3 = this.props,
            name = _props3.name,
            dispatch = _props3.dispatch,
            parse = _props3.parse,
            normalize = _props3.normalize,
            onBlur = _props3.onBlur,
            _reduxForm = _props3._reduxForm,
            _value = _props3._value,
            previousValue = _props3.value;

        var newValue = onChangeValue(event, { name: name, parse: parse, normalize: normalize }

        // for checkbox and radio, if the value property of checkbox or radio equals
        // the value passed by blur event, then fire blur action with previousValue.
        );if (newValue === _value && _value !== undefined) {
          newValue = previousValue;
        }

        var defaultPrevented = false;
        if (onBlur) {
          onBlur(_extends({}, event, {
            preventDefault: function preventDefault() {
              defaultPrevented = true;
              return eventPreventDefault(event);
            }
          }), newValue, previousValue);
        }

        if (!defaultPrevented) {
          // dispatch blur action
          dispatch(_reduxForm.blur(name, newValue)

          // call post-blur callback
          );if (_reduxForm.asyncValidate) {
            _reduxForm.asyncValidate(name, newValue);
          }
        }
      }
    }, {
      key: 'handleDragStart',
      value: function handleDragStart(event) {
        var _props4 = this.props,
            onDragStart = _props4.onDragStart,
            value = _props4.value;

        eventDataTransferSetData(event, dataKey, value == null ? '' : value);

        if (onDragStart) {
          onDragStart(event);
        }
      }
    }, {
      key: 'handleDrop',
      value: function handleDrop(event) {
        var _props5 = this.props,
            name = _props5.name,
            dispatch = _props5.dispatch,
            onDrop = _props5.onDrop,
            _reduxForm = _props5._reduxForm,
            previousValue = _props5.value;

        var newValue = eventDataTransferGetData(event, dataKey);

        var defaultPrevented = false;
        if (onDrop) {
          onDrop(_extends({}, event, {
            preventDefault: function preventDefault() {
              defaultPrevented = true;
              return eventPreventDefault(event);
            }
          }), newValue, previousValue);
        }

        if (!defaultPrevented) {
          // dispatch change action
          dispatch(_reduxForm.change(name, newValue));
          eventPreventDefault(event);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props6 = this.props,
            component = _props6.component,
            withRef = _props6.withRef,
            name = _props6.name,
            _reduxForm = _props6._reduxForm,
            normalize = _props6.normalize,
            onBlur = _props6.onBlur,
            onChange = _props6.onChange,
            onFocus = _props6.onFocus,
            onDragStart = _props6.onDragStart,
            onDrop = _props6.onDrop,
            rest = _objectWithoutProperties(_props6, ['component', 'withRef', 'name', '_reduxForm', 'normalize', 'onBlur', 'onChange', 'onFocus', 'onDragStart', 'onDrop']);

        var _createFieldProps = createFieldProps({ getIn: getIn, toJS: toJS }, name, _extends({}, rest, {
          form: _reduxForm.form,
          onBlur: this.handleBlur,
          onChange: this.handleChange,
          onDrop: this.handleDrop,
          onDragStart: this.handleDragStart,
          onFocus: this.handleFocus
        })),
            custom = _createFieldProps.custom,
            props = _objectWithoutProperties(_createFieldProps, ['custom']);

        if (withRef) {
          custom.ref = 'renderedComponent';
        }
        if (typeof component === 'string') {
          var input = props.input,
              meta = props.meta; // eslint-disable-line no-unused-vars
          // flatten input into other props

          return createElement(component, _extends({}, input, custom));
        } else {
          return createElement(component, _extends({}, props, custom));
        }
      }
    }]);

    return ConnectedField;
  }(Component);

  ConnectedField.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
    props: PropTypes.object
  };

  var connector = connect(function (state, ownProps) {
    var name = ownProps.name,
        _ownProps$_reduxForm = ownProps._reduxForm,
        initialValues = _ownProps$_reduxForm.initialValues,
        getFormState = _ownProps$_reduxForm.getFormState;

    var formState = getFormState(state);
    var initialState = getIn(formState, 'initial.' + name);
    var initial = initialState !== undefined ? initialState : initialValues && getIn(initialValues, name);
    var value = getIn(formState, 'values.' + name);
    var submitting = getIn(formState, 'submitting');
    var syncError = getSyncError(getIn(formState, 'syncErrors'), name);
    var syncWarning = getSyncWarning(getIn(formState, 'syncWarnings'), name);
    var pristine = deepEqual(value, initial);
    return {
      asyncError: getIn(formState, 'asyncErrors.' + name),
      asyncValidating: getIn(formState, 'asyncValidating') === name,
      dirty: !pristine,
      pristine: pristine,
      state: getIn(formState, 'fields.' + name),
      submitError: getIn(formState, 'submitErrors.' + name),
      submitFailed: getIn(formState, 'submitFailed'),
      submitting: submitting,
      syncError: syncError,
      syncWarning: syncWarning,
      initial: initial,
      value: value,
      _value: ownProps.value // save value passed in (for checkboxes)
    };
  }, undefined, undefined, { withRef: true });
  return connector(ConnectedField);
};

export default createConnectedField;