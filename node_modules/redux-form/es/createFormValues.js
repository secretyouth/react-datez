var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import prefixName from './util/prefixName';

var createValues = function createValues(_ref) {
  var getIn = _ref.getIn;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var valuesMap = void 0;

    if (typeof args[0] === 'string') {
      valuesMap = args.map(function (k) {
        return { prop: k, path: k };
      });
    } else {
      var config = args[0];
      valuesMap = Object.keys(config).map(function (k) {
        return {
          prop: k,
          path: config[k]
        };
      });
    }
    if (!valuesMap.length) {
      throw new Error('formValues(): You must specify values to get as formValues(name1, name2, ...) or formValues({propName1: propPath1, ...})');
    }

    // create a class that reads current form name and creates a selector
    // return
    return function (Component) {
      var FormValues = function (_React$Component) {
        _inherits(FormValues, _React$Component);

        function FormValues(props, context) {
          _classCallCheck(this, FormValues);

          var _this = _possibleConstructorReturn(this, (FormValues.__proto__ || Object.getPrototypeOf(FormValues)).call(this, props, context));

          if (!context._reduxForm) {
            throw new Error('formValues() must be used inside a React tree decorated with reduxForm()');
          }
          var getValues = context._reduxForm.getValues;

          var formValuesSelector = function formValuesSelector(_) {
            // Yes, we're only using connect() for listening to updates
            var props = {};
            var values = getValues();
            valuesMap.forEach(function (_ref2) {
              var prop = _ref2.prop,
                  path = _ref2.path;
              return props[prop] = getIn(values, prefixName(context, path));
            });
            return props;
          };
          _this.Component = connect(formValuesSelector, function () {
            return {};
          } // ignore dispatch
          )(Component);
          return _this;
        }

        _createClass(FormValues, [{
          key: 'render',
          value: function render() {
            return React.createElement(this.Component, this.props);
          }
        }]);

        return FormValues;
      }(React.Component);

      FormValues.contextTypes = {
        _reduxForm: PropTypes.object
      };
      return FormValues;
    };
  };
};

export default createValues;