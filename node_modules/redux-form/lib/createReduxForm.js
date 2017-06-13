'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _merge4 = require('lodash/merge');

var _merge5 = _interopRequireDefault(_merge4);

var _mapValues2 = require('lodash/mapValues');

var _mapValues3 = _interopRequireDefault(_mapValues2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _isPromise = require('is-promise');

var _isPromise2 = _interopRequireDefault(_isPromise);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _actions = require('./actions');

var importedActions = _interopRequireWildcard(_actions);

var _asyncValidation = require('./asyncValidation');

var _asyncValidation2 = _interopRequireDefault(_asyncValidation);

var _defaultShouldAsyncValidate = require('./defaultShouldAsyncValidate');

var _defaultShouldAsyncValidate2 = _interopRequireDefault(_defaultShouldAsyncValidate);

var _defaultShouldValidate = require('./defaultShouldValidate');

var _defaultShouldValidate2 = _interopRequireDefault(_defaultShouldValidate);

var _silenceEvent = require('./events/silenceEvent');

var _silenceEvent2 = _interopRequireDefault(_silenceEvent);

var _silenceEvents = require('./events/silenceEvents');

var _silenceEvents2 = _interopRequireDefault(_silenceEvents);

var _generateValidator2 = require('./generateValidator');

var _generateValidator3 = _interopRequireDefault(_generateValidator2);

var _handleSubmit = require('./handleSubmit');

var _handleSubmit2 = _interopRequireDefault(_handleSubmit);

var _isValid = require('./selectors/isValid');

var _isValid2 = _interopRequireDefault(_isValid);

var _plain = require('./structure/plain');

var _plain2 = _interopRequireDefault(_plain);

var _getDisplayName = require('./util/getDisplayName');

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var isClassComponent = function isClassComponent(Component) {
  return Boolean(Component && Component.prototype && _typeof(Component.prototype.isReactComponent) === 'object'

  // extract field-specific actions
  );
};
var arrayInsert = importedActions.arrayInsert,
    arrayMove = importedActions.arrayMove,
    arrayPop = importedActions.arrayPop,
    arrayPush = importedActions.arrayPush,
    arrayRemove = importedActions.arrayRemove,
    arrayRemoveAll = importedActions.arrayRemoveAll,
    arrayShift = importedActions.arrayShift,
    arraySplice = importedActions.arraySplice,
    arraySwap = importedActions.arraySwap,
    arrayUnshift = importedActions.arrayUnshift,
    blur = importedActions.blur,
    change = importedActions.change,
    focus = importedActions.focus,
    formActions = _objectWithoutProperties(importedActions, ['arrayInsert', 'arrayMove', 'arrayPop', 'arrayPush', 'arrayRemove', 'arrayRemoveAll', 'arrayShift', 'arraySplice', 'arraySwap', 'arrayUnshift', 'blur', 'change', 'focus']);

var arrayActions = {
  arrayInsert: arrayInsert,
  arrayMove: arrayMove,
  arrayPop: arrayPop,
  arrayPush: arrayPush,
  arrayRemove: arrayRemove,
  arrayRemoveAll: arrayRemoveAll,
  arrayShift: arrayShift,
  arraySplice: arraySplice,
  arraySwap: arraySwap,
  arrayUnshift: arrayUnshift
};

var propsToNotUpdateFor = [].concat(_toConsumableArray(Object.keys(importedActions)), ['array', 'asyncErrors', 'initialValues', 'syncErrors', 'syncWarnings', 'values', 'registeredFields']);

var checkSubmit = function checkSubmit(submit) {
  if (!submit || typeof submit !== 'function') {
    throw new Error('You must either pass handleSubmit() an onSubmit function or pass onSubmit as a prop');
  }
  return submit;
};

/**
 * The decorator that is the main API to redux-form
 */
var createReduxForm = function createReduxForm(structure) {
  var deepEqual = structure.deepEqual,
      empty = structure.empty,
      getIn = structure.getIn,
      setIn = structure.setIn,
      keys = structure.keys,
      fromJS = structure.fromJS;

  var isValid = (0, _isValid2.default)(structure);
  return function (initialConfig) {
    var config = _extends({
      touchOnBlur: true,
      touchOnChange: false,
      persistentSubmitErrors: false,
      destroyOnUnmount: true,
      shouldAsyncValidate: _defaultShouldAsyncValidate2.default,
      shouldValidate: _defaultShouldValidate2.default,
      enableReinitialize: false,
      keepDirtyOnReinitialize: false,
      getFormState: function getFormState(state) {
        return getIn(state, 'form');
      },
      pure: true,
      forceUnregisterOnUnmount: false
    }, initialConfig);

    return function (WrappedComponent) {
      var Form = function (_Component) {
        _inherits(Form, _Component);

        function Form(props) {
          _classCallCheck(this, Form);

          var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

          _this.submit = _this.submit.bind(_this);
          _this.reset = _this.reset.bind(_this);
          _this.asyncValidate = _this.asyncValidate.bind(_this);
          _this.getValues = _this.getValues.bind(_this);
          _this.register = _this.register.bind(_this);
          _this.unregister = _this.unregister.bind(_this);
          _this.submitCompleted = _this.submitCompleted.bind(_this);
          _this.submitFailed = _this.submitFailed.bind(_this);
          _this.fieldValidators = {};
          _this.lastFieldValidatorKeys = [];
          _this.fieldWarners = {};
          _this.lastFieldWarnerKeys = [];
          return _this;
        }

        _createClass(Form, [{
          key: 'getChildContext',
          value: function getChildContext() {
            var _this2 = this;

            return {
              _reduxForm: _extends({}, this.props, {
                getFormState: function getFormState(state) {
                  return getIn(_this2.props.getFormState(state), _this2.props.form);
                },
                asyncValidate: this.asyncValidate,
                getValues: this.getValues,
                sectionPrefix: undefined,
                register: this.register,
                unregister: this.unregister,
                registerInnerOnSubmit: function registerInnerOnSubmit(innerOnSubmit) {
                  return _this2.innerOnSubmit = innerOnSubmit;
                }
              })
            };
          }
        }, {
          key: 'initIfNeeded',
          value: function initIfNeeded(nextProps) {
            var enableReinitialize = this.props.enableReinitialize;

            if (nextProps) {
              if ((enableReinitialize || !nextProps.initialized) && !deepEqual(this.props.initialValues, nextProps.initialValues)) {
                var keepDirty = nextProps.initialized && this.props.keepDirtyOnReinitialize;
                this.props.initialize(nextProps.initialValues, keepDirty, {
                  lastInitialValues: this.props.initialValues
                });
              }
            } else if (this.props.initialValues && (!this.props.initialized || enableReinitialize)) {
              this.props.initialize(this.props.initialValues, this.props.keepDirtyOnReinitialize);
            }
          }
        }, {
          key: 'updateSyncErrorsIfNeeded',
          value: function updateSyncErrorsIfNeeded(nextSyncErrors, nextError, lastSyncErrors) {
            var _props = this.props,
                error = _props.error,
                updateSyncErrors = _props.updateSyncErrors;

            var noErrors = (!lastSyncErrors || !Object.keys(lastSyncErrors).length) && !error;
            var nextNoErrors = (!nextSyncErrors || !Object.keys(nextSyncErrors).length) && !nextError;
            if (!(noErrors && nextNoErrors) && (!_plain2.default.deepEqual(lastSyncErrors, nextSyncErrors) || !_plain2.default.deepEqual(error, nextError))) {
              updateSyncErrors(nextSyncErrors, nextError);
            }
          }
        }, {
          key: 'clearSubmitPromiseIfNeeded',
          value: function clearSubmitPromiseIfNeeded(nextProps) {
            var submitting = this.props.submitting;

            if (this.submitPromise && submitting && !nextProps.submitting) {
              delete this.submitPromise;
            }
          }
        }, {
          key: 'submitIfNeeded',
          value: function submitIfNeeded(nextProps) {
            var _props2 = this.props,
                clearSubmit = _props2.clearSubmit,
                triggerSubmit = _props2.triggerSubmit;

            if (!triggerSubmit && nextProps.triggerSubmit) {
              clearSubmit();
              this.submit();
            }
          }
        }, {
          key: 'validateIfNeeded',
          value: function validateIfNeeded(nextProps) {
            var _props3 = this.props,
                shouldValidate = _props3.shouldValidate,
                validate = _props3.validate,
                values = _props3.values;

            var fieldLevelValidate = this.generateValidator();
            if (validate || fieldLevelValidate) {
              var initialRender = nextProps === undefined;
              var fieldValidatorKeys = Object.keys(this.getValidators());
              var shouldValidateResult = shouldValidate({
                values: values,
                nextProps: nextProps,
                props: this.props,
                initialRender: initialRender,
                lastFieldValidatorKeys: this.lastFieldValidatorKeys,
                fieldValidatorKeys: fieldValidatorKeys,
                structure: structure
              });

              if (shouldValidateResult) {
                var propsToValidate = initialRender ? this.props : nextProps;

                var _merge2 = (0, _merge5.default)(validate ? validate(propsToValidate.values, propsToValidate) || {} : {}, fieldLevelValidate ? fieldLevelValidate(propsToValidate.values, propsToValidate) || {} : {}),
                    _error = _merge2._error,
                    nextSyncErrors = _objectWithoutProperties(_merge2, ['_error']);

                this.lastFieldValidatorKeys = fieldValidatorKeys;
                this.updateSyncErrorsIfNeeded(nextSyncErrors, _error, propsToValidate.syncErrors);
              }
            }
          }
        }, {
          key: 'updateSyncWarningsIfNeeded',
          value: function updateSyncWarningsIfNeeded(nextSyncWarnings, nextWarning, lastSyncWarnings) {
            var _props4 = this.props,
                warning = _props4.warning,
                syncWarnings = _props4.syncWarnings,
                updateSyncWarnings = _props4.updateSyncWarnings;

            var noWarnings = (!syncWarnings || !Object.keys(syncWarnings).length) && !warning;
            var nextNoWarnings = (!nextSyncWarnings || !Object.keys(nextSyncWarnings).length) && !nextWarning;
            if (!(noWarnings && nextNoWarnings) && (!_plain2.default.deepEqual(lastSyncWarnings, nextSyncWarnings) || !_plain2.default.deepEqual(warning, nextWarning))) {
              updateSyncWarnings(nextSyncWarnings, nextWarning);
            }
          }
        }, {
          key: 'warnIfNeeded',
          value: function warnIfNeeded(nextProps) {
            var _props5 = this.props,
                shouldValidate = _props5.shouldValidate,
                warn = _props5.warn,
                values = _props5.values;

            var fieldLevelWarn = this.generateWarner();
            if (warn || fieldLevelWarn) {
              var initialRender = nextProps === undefined;
              var fieldWarnerKeys = Object.keys(this.getWarners());
              var shouldWarnResult = shouldValidate({
                values: values,
                nextProps: nextProps,
                props: this.props,
                initialRender: initialRender,
                lastFieldValidatorKeys: this.lastFieldWarnerKeys,
                fieldValidatorKeys: fieldWarnerKeys,
                structure: structure
              });

              if (shouldWarnResult) {
                var propsToWarn = initialRender ? this.props : nextProps;

                var _merge3 = (0, _merge5.default)(warn ? warn(propsToWarn.values, propsToWarn) : {}, fieldLevelWarn ? fieldLevelWarn(propsToWarn.values, propsToWarn) : {}),
                    _warning = _merge3._warning,
                    nextSyncWarnings = _objectWithoutProperties(_merge3, ['_warning']);

                this.lastFieldWarnerKeys = fieldWarnerKeys;
                this.updateSyncWarningsIfNeeded(nextSyncWarnings, _warning, propsToWarn.syncWarnings);
              }
            }
          }
        }, {
          key: 'componentWillMount',
          value: function componentWillMount() {
            this.initIfNeeded();
            this.validateIfNeeded();
            this.warnIfNeeded();
          }
        }, {
          key: 'componentWillReceiveProps',
          value: function componentWillReceiveProps(nextProps) {
            this.initIfNeeded(nextProps);
            this.validateIfNeeded(nextProps);
            this.warnIfNeeded(nextProps);
            this.clearSubmitPromiseIfNeeded(nextProps);
            this.submitIfNeeded(nextProps);
            if (nextProps.onChange) {
              if (!deepEqual(nextProps.values, this.props.values)) {
                nextProps.onChange(nextProps.values, nextProps.dispatch, nextProps);
              }
            }
          }
        }, {
          key: 'shouldComponentUpdate',
          value: function shouldComponentUpdate(nextProps) {
            var _this3 = this;

            if (!this.props.pure) return true;
            var _initialConfig$immuta = initialConfig.immutableProps,
                immutableProps = _initialConfig$immuta === undefined ? [] : _initialConfig$immuta;

            return Object.keys(nextProps).some(function (prop) {
              // useful to debug rerenders
              // if (!plain.deepEqual(this.props[ prop ], nextProps[ prop ])) {
              //   console.info(prop, 'changed', this.props[ prop ], '==>', nextProps[ prop ])
              // }
              if (~immutableProps.indexOf(prop)) {
                return _this3.props[prop] !== nextProps[prop];
              }
              return !~propsToNotUpdateFor.indexOf(prop) && !deepEqual(_this3.props[prop], nextProps[prop]);
            });
          }
        }, {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            var _props6 = this.props,
                destroyOnUnmount = _props6.destroyOnUnmount,
                destroy = _props6.destroy;

            if (destroyOnUnmount) {
              this.destroyed = true;
              destroy();
            }
          }
        }, {
          key: 'getValues',
          value: function getValues() {
            return this.props.values;
          }
        }, {
          key: 'isValid',
          value: function isValid() {
            return this.props.valid;
          }
        }, {
          key: 'isPristine',
          value: function isPristine() {
            return this.props.pristine;
          }
        }, {
          key: 'register',
          value: function register(name, type, getValidator, getWarner) {
            this.props.registerField(name, type);
            if (getValidator) {
              this.fieldValidators[name] = getValidator;
            }
            if (getWarner) {
              this.fieldWarners[name] = getWarner;
            }
          }
        }, {
          key: 'unregister',
          value: function unregister(name) {
            if (!this.destroyed) {
              if (this.props.destroyOnUnmount || this.props.forceUnregisterOnUnmount) {
                this.props.unregisterField(name);
                delete this.fieldValidators[name];
                delete this.fieldWarners[name];
              } else {
                this.props.unregisterField(name, false);
              }
            }
          }
        }, {
          key: 'getFieldList',
          value: function getFieldList(options) {
            var registeredFields = this.props.registeredFields;
            var list = [];
            if (!registeredFields) {
              return list;
            }
            var keySeq = keys(registeredFields);
            if (options && options.excludeFieldArray) {
              keySeq = keySeq.filter(function (name) {
                return getIn(registeredFields, '[\'' + name + '\'].type') !== 'FieldArray';
              });
            }
            return fromJS(keySeq.reduce(function (acc, key) {
              acc.push(key);
              return acc;
            }, list));
          }
        }, {
          key: 'getValidators',
          value: function getValidators() {
            var _this4 = this;

            var validators = {};
            Object.keys(this.fieldValidators).forEach(function (name) {
              var validator = _this4.fieldValidators[name]();
              if (validator) {
                validators[name] = validator;
              }
            });
            return validators;
          }
        }, {
          key: 'generateValidator',
          value: function generateValidator() {
            var validators = this.getValidators();
            return Object.keys(validators).length ? (0, _generateValidator3.default)(validators, structure) : undefined;
          }
        }, {
          key: 'getWarners',
          value: function getWarners() {
            var _this5 = this;

            var warners = {};
            Object.keys(this.fieldWarners).forEach(function (name) {
              var warner = _this5.fieldWarners[name]();
              if (warner) {
                warners[name] = warner;
              }
            });
            return warners;
          }
        }, {
          key: 'generateWarner',
          value: function generateWarner() {
            var warners = this.getWarners();
            return Object.keys(warners).length ? (0, _generateValidator3.default)(warners, structure) : undefined;
          }
        }, {
          key: 'asyncValidate',
          value: function asyncValidate(name, value) {
            var _this6 = this;

            var _props7 = this.props,
                asyncBlurFields = _props7.asyncBlurFields,
                asyncErrors = _props7.asyncErrors,
                asyncValidate = _props7.asyncValidate,
                dispatch = _props7.dispatch,
                initialized = _props7.initialized,
                pristine = _props7.pristine,
                shouldAsyncValidate = _props7.shouldAsyncValidate,
                startAsyncValidation = _props7.startAsyncValidation,
                stopAsyncValidation = _props7.stopAsyncValidation,
                syncErrors = _props7.syncErrors,
                values = _props7.values;

            var submitting = !name;
            if (asyncValidate) {
              var valuesToValidate = submitting ? values : setIn(values, name, value);
              var syncValidationPasses = submitting || !getIn(syncErrors, name);
              var isBlurredField = !submitting && (!asyncBlurFields || ~asyncBlurFields.indexOf(name.replace(/\[[0-9]+\]/g, '[]')));
              if ((isBlurredField || submitting) && shouldAsyncValidate({
                asyncErrors: asyncErrors,
                initialized: initialized,
                trigger: submitting ? 'submit' : 'blur',
                blurredField: name,
                pristine: pristine,
                syncValidationPasses: syncValidationPasses
              })) {
                return (0, _asyncValidation2.default)(function () {
                  return asyncValidate(valuesToValidate, dispatch, _this6.props, name);
                }, startAsyncValidation, stopAsyncValidation, name);
              }
            }
          }
        }, {
          key: 'submitCompleted',
          value: function submitCompleted(result) {
            delete this.submitPromise;
            return result;
          }
        }, {
          key: 'submitFailed',
          value: function submitFailed(error) {
            delete this.submitPromise;
            throw error;
          }
        }, {
          key: 'listenToSubmit',
          value: function listenToSubmit(promise) {
            if (!(0, _isPromise2.default)(promise)) {
              return promise;
            }
            this.submitPromise = promise;
            return promise.then(this.submitCompleted, this.submitFailed);
          }
        }, {
          key: 'submit',
          value: function submit(submitOrEvent) {
            var _this7 = this;

            var _props8 = this.props,
                onSubmit = _props8.onSubmit,
                blur = _props8.blur,
                change = _props8.change,
                dispatch = _props8.dispatch;


            if (!submitOrEvent || (0, _silenceEvent2.default)(submitOrEvent)) {
              // submitOrEvent is an event: fire submit if not already submitting
              if (!this.submitPromise) {
                // avoid recursive stack trace if use Form with onSubmit as handleSubmit
                if (this.innerOnSubmit && this.innerOnSubmit !== this.submit) {
                  // will call "submitOrEvent is the submit function" block below
                  return this.innerOnSubmit();
                } else {
                  return this.listenToSubmit((0, _handleSubmit2.default)(checkSubmit(onSubmit), _extends({}, this.props, (0, _redux.bindActionCreators)({ blur: blur, change: change }, dispatch)), this.props.validExceptSubmit, this.asyncValidate, this.getFieldList({ excludeFieldArray: true })));
                }
              }
            } else {
              // submitOrEvent is the submit function: return deferred submit thunk
              return (0, _silenceEvents2.default)(function () {
                return !_this7.submitPromise && _this7.listenToSubmit((0, _handleSubmit2.default)(checkSubmit(submitOrEvent), _extends({}, _this7.props, (0, _redux.bindActionCreators)({ blur: blur, change: change }, dispatch)), _this7.props.validExceptSubmit, _this7.asyncValidate, _this7.getFieldList({ excludeFieldArray: true })));
              });
            }
          }
        }, {
          key: 'reset',
          value: function reset() {
            this.props.reset();
          }
        }, {
          key: 'render',
          value: function render() {
            // remove some redux-form config-only props
            /* eslint-disable no-unused-vars */
            var _props9 = this.props,
                anyTouched = _props9.anyTouched,
                arrayInsert = _props9.arrayInsert,
                arrayMove = _props9.arrayMove,
                arrayPop = _props9.arrayPop,
                arrayPush = _props9.arrayPush,
                arrayRemove = _props9.arrayRemove,
                arrayRemoveAll = _props9.arrayRemoveAll,
                arrayShift = _props9.arrayShift,
                arraySplice = _props9.arraySplice,
                arraySwap = _props9.arraySwap,
                arrayUnshift = _props9.arrayUnshift,
                asyncErrors = _props9.asyncErrors,
                asyncValidate = _props9.asyncValidate,
                asyncValidating = _props9.asyncValidating,
                blur = _props9.blur,
                change = _props9.change,
                destroy = _props9.destroy,
                destroyOnUnmount = _props9.destroyOnUnmount,
                forceUnregisterOnUnmount = _props9.forceUnregisterOnUnmount,
                dirty = _props9.dirty,
                dispatch = _props9.dispatch,
                enableReinitialize = _props9.enableReinitialize,
                error = _props9.error,
                focus = _props9.focus,
                form = _props9.form,
                getFormState = _props9.getFormState,
                initialize = _props9.initialize,
                initialized = _props9.initialized,
                initialValues = _props9.initialValues,
                invalid = _props9.invalid,
                keepDirtyOnReinitialize = _props9.keepDirtyOnReinitialize,
                pristine = _props9.pristine,
                propNamespace = _props9.propNamespace,
                registeredFields = _props9.registeredFields,
                registerField = _props9.registerField,
                reset = _props9.reset,
                setSubmitFailed = _props9.setSubmitFailed,
                setSubmitSucceeded = _props9.setSubmitSucceeded,
                shouldAsyncValidate = _props9.shouldAsyncValidate,
                shouldValidate = _props9.shouldValidate,
                startAsyncValidation = _props9.startAsyncValidation,
                startSubmit = _props9.startSubmit,
                stopAsyncValidation = _props9.stopAsyncValidation,
                stopSubmit = _props9.stopSubmit,
                submitting = _props9.submitting,
                submitFailed = _props9.submitFailed,
                submitSucceeded = _props9.submitSucceeded,
                touch = _props9.touch,
                touchOnBlur = _props9.touchOnBlur,
                touchOnChange = _props9.touchOnChange,
                persistentSubmitErrors = _props9.persistentSubmitErrors,
                syncErrors = _props9.syncErrors,
                syncWarnings = _props9.syncWarnings,
                unregisterField = _props9.unregisterField,
                untouch = _props9.untouch,
                updateSyncErrors = _props9.updateSyncErrors,
                updateSyncWarnings = _props9.updateSyncWarnings,
                valid = _props9.valid,
                validExceptSubmit = _props9.validExceptSubmit,
                values = _props9.values,
                warning = _props9.warning,
                rest = _objectWithoutProperties(_props9, ['anyTouched', 'arrayInsert', 'arrayMove', 'arrayPop', 'arrayPush', 'arrayRemove', 'arrayRemoveAll', 'arrayShift', 'arraySplice', 'arraySwap', 'arrayUnshift', 'asyncErrors', 'asyncValidate', 'asyncValidating', 'blur', 'change', 'destroy', 'destroyOnUnmount', 'forceUnregisterOnUnmount', 'dirty', 'dispatch', 'enableReinitialize', 'error', 'focus', 'form', 'getFormState', 'initialize', 'initialized', 'initialValues', 'invalid', 'keepDirtyOnReinitialize', 'pristine', 'propNamespace', 'registeredFields', 'registerField', 'reset', 'setSubmitFailed', 'setSubmitSucceeded', 'shouldAsyncValidate', 'shouldValidate', 'startAsyncValidation', 'startSubmit', 'stopAsyncValidation', 'stopSubmit', 'submitting', 'submitFailed', 'submitSucceeded', 'touch', 'touchOnBlur', 'touchOnChange', 'persistentSubmitErrors', 'syncErrors', 'syncWarnings', 'unregisterField', 'untouch', 'updateSyncErrors', 'updateSyncWarnings', 'valid', 'validExceptSubmit', 'values', 'warning']);
            /* eslint-enable no-unused-vars */


            var reduxFormProps = _extends({
              anyTouched: anyTouched,
              asyncValidate: this.asyncValidate,
              asyncValidating: asyncValidating
            }, (0, _redux.bindActionCreators)({ blur: blur, change: change }, dispatch), {
              destroy: destroy,
              dirty: dirty,
              dispatch: dispatch,
              error: error,
              form: form,
              handleSubmit: this.submit,
              initialize: initialize,
              initialized: initialized,
              initialValues: initialValues,
              invalid: invalid,
              pristine: pristine,
              reset: reset,
              submitting: submitting,
              submitFailed: submitFailed,
              submitSucceeded: submitSucceeded,
              touch: touch,
              untouch: untouch,
              valid: valid,
              warning: warning
            });
            var propsToPass = _extends({}, propNamespace ? _defineProperty({}, propNamespace, reduxFormProps) : reduxFormProps, rest);
            if (isClassComponent(WrappedComponent)) {
              propsToPass.ref = 'wrapped';
            }
            return (0, _react.createElement)(WrappedComponent, propsToPass);
          }
        }]);

        return Form;
      }(_react.Component);

      Form.displayName = 'Form(' + (0, _getDisplayName2.default)(WrappedComponent) + ')';
      Form.WrappedComponent = WrappedComponent;
      Form.childContextTypes = {
        _reduxForm: _propTypes2.default.object.isRequired
      };
      Form.propTypes = {
        destroyOnUnmount: _propTypes2.default.bool,
        forceUnregisterOnUnmount: _propTypes2.default.bool,
        form: _propTypes2.default.string.isRequired,
        initialValues: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
        getFormState: _propTypes2.default.func,
        onSubmitFail: _propTypes2.default.func,
        onSubmitSuccess: _propTypes2.default.func,
        propNameSpace: _propTypes2.default.string,
        validate: _propTypes2.default.func,
        warn: _propTypes2.default.func,
        touchOnBlur: _propTypes2.default.bool,
        touchOnChange: _propTypes2.default.bool,
        triggerSubmit: _propTypes2.default.bool,
        persistentSubmitErrors: _propTypes2.default.bool,
        registeredFields: _propTypes2.default.any
      };

      var connector = (0, _reactRedux.connect)(function (state, props) {
        var form = props.form,
            getFormState = props.getFormState,
            initialValues = props.initialValues,
            enableReinitialize = props.enableReinitialize,
            keepDirtyOnReinitialize = props.keepDirtyOnReinitialize;

        var formState = getIn(getFormState(state) || empty, form) || empty;
        var stateInitial = getIn(formState, 'initial');
        var initialized = !!stateInitial;

        var shouldUpdateInitialValues = enableReinitialize && initialized && !deepEqual(initialValues, stateInitial);
        var shouldResetValues = shouldUpdateInitialValues && !keepDirtyOnReinitialize;

        var initial = initialValues || stateInitial || empty;

        if (shouldUpdateInitialValues) {
          initial = stateInitial || empty;
        }

        var values = getIn(formState, 'values') || initial;

        if (shouldResetValues) {
          values = initial;
        }

        var pristine = shouldResetValues || deepEqual(initial, values);
        var asyncErrors = getIn(formState, 'asyncErrors');
        var syncErrors = getIn(formState, 'syncErrors') || {};
        var syncWarnings = getIn(formState, 'syncWarnings') || {};
        var registeredFields = getIn(formState, 'registeredFields');
        var valid = isValid(form, getFormState, false)(state);
        var validExceptSubmit = isValid(form, getFormState, true)(state);
        var anyTouched = !!getIn(formState, 'anyTouched');
        var submitting = !!getIn(formState, 'submitting');
        var submitFailed = !!getIn(formState, 'submitFailed');
        var submitSucceeded = !!getIn(formState, 'submitSucceeded');
        var error = getIn(formState, 'error');
        var warning = getIn(formState, 'warning');
        var triggerSubmit = getIn(formState, 'triggerSubmit');
        return {
          anyTouched: anyTouched,
          asyncErrors: asyncErrors,
          asyncValidating: getIn(formState, 'asyncValidating') || false,
          dirty: !pristine,
          error: error,
          initialized: initialized,
          invalid: !valid,
          pristine: pristine,
          registeredFields: registeredFields,
          submitting: submitting,
          submitFailed: submitFailed,
          submitSucceeded: submitSucceeded,
          syncErrors: syncErrors,
          syncWarnings: syncWarnings,
          triggerSubmit: triggerSubmit,
          values: values,
          valid: valid,
          validExceptSubmit: validExceptSubmit,
          warning: warning
        };
      }, function (dispatch, initialProps) {
        var bindForm = function bindForm(actionCreator) {
          return actionCreator.bind(null, initialProps.form

          // Bind the first parameter on `props.form`
          );
        };var boundFormACs = (0, _mapValues3.default)(formActions, bindForm);
        var boundArrayACs = (0, _mapValues3.default)(arrayActions, bindForm);
        var boundBlur = function boundBlur(field, value) {
          return blur(initialProps.form, field, value, !!initialProps.touchOnBlur);
        };
        var boundChange = function boundChange(field, value) {
          return change(initialProps.form, field, value, !!initialProps.touchOnChange, !!initialProps.persistentSubmitErrors);
        };
        var boundFocus = bindForm(focus

        // Wrap action creators with `dispatch`
        );var connectedFormACs = (0, _redux.bindActionCreators)(boundFormACs, dispatch);
        var connectedArrayACs = {
          insert: (0, _redux.bindActionCreators)(boundArrayACs.arrayInsert, dispatch),
          move: (0, _redux.bindActionCreators)(boundArrayACs.arrayMove, dispatch),
          pop: (0, _redux.bindActionCreators)(boundArrayACs.arrayPop, dispatch),
          push: (0, _redux.bindActionCreators)(boundArrayACs.arrayPush, dispatch),
          remove: (0, _redux.bindActionCreators)(boundArrayACs.arrayRemove, dispatch),
          removeAll: (0, _redux.bindActionCreators)(boundArrayACs.arrayRemoveAll, dispatch),
          shift: (0, _redux.bindActionCreators)(boundArrayACs.arrayShift, dispatch),
          splice: (0, _redux.bindActionCreators)(boundArrayACs.arraySplice, dispatch),
          swap: (0, _redux.bindActionCreators)(boundArrayACs.arraySwap, dispatch),
          unshift: (0, _redux.bindActionCreators)(boundArrayACs.arrayUnshift, dispatch)
        };

        var computedActions = _extends({}, connectedFormACs, boundArrayACs, {
          blur: boundBlur,
          change: boundChange,
          array: connectedArrayACs,
          focus: boundFocus,
          dispatch: dispatch
        });

        return function () {
          return computedActions;
        };
      }, undefined, { withRef: true });
      var ConnectedForm = (0, _hoistNonReactStatics2.default)(connector(Form), WrappedComponent);
      ConnectedForm.defaultProps = config;

      // build outer component to expose instance api
      return function (_Component2) {
        _inherits(ReduxForm, _Component2);

        function ReduxForm() {
          _classCallCheck(this, ReduxForm);

          return _possibleConstructorReturn(this, (ReduxForm.__proto__ || Object.getPrototypeOf(ReduxForm)).apply(this, arguments));
        }

        _createClass(ReduxForm, [{
          key: 'submit',
          value: function submit() {
            return this.refs.wrapped.getWrappedInstance().submit();
          }
        }, {
          key: 'reset',
          value: function reset() {
            return this.refs.wrapped.getWrappedInstance().reset();
          }
        }, {
          key: 'render',
          value: function render() {
            var _props10 = this.props,
                initialValues = _props10.initialValues,
                rest = _objectWithoutProperties(_props10, ['initialValues']);

            return (0, _react.createElement)(ConnectedForm, _extends({}, rest, {
              ref: 'wrapped',
              // convert initialValues if need to
              initialValues: fromJS(initialValues)
            }));
          }
        }, {
          key: 'valid',
          get: function get() {
            return this.refs.wrapped.getWrappedInstance().isValid();
          }
        }, {
          key: 'invalid',
          get: function get() {
            return !this.valid;
          }
        }, {
          key: 'pristine',
          get: function get() {
            return this.refs.wrapped.getWrappedInstance().isPristine();
          }
        }, {
          key: 'dirty',
          get: function get() {
            return !this.pristine;
          }
        }, {
          key: 'values',
          get: function get() {
            return this.refs.wrapped.getWrappedInstance().getValues();
          }
        }, {
          key: 'fieldList',
          get: function get() {
            // mainly provided for testing
            return this.refs.wrapped.getWrappedInstance().getFieldList();
          }
        }, {
          key: 'wrappedInstance',
          get: function get() {
            // for testing
            return this.refs.wrapped.getWrappedInstance().refs.wrapped;
          }
        }]);

        return ReduxForm;
      }(_react.Component);
    };
  };
};

exports.default = createReduxForm;