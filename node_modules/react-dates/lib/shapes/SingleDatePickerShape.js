Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMomentProptypes = require('react-moment-proptypes');

var _reactMomentProptypes2 = _interopRequireDefault(_reactMomentProptypes);

var _airbnbPropTypes = require('airbnb-prop-types');

var _defaultPhrases = require('../defaultPhrases');

var _getPhrasePropTypes = require('../utils/getPhrasePropTypes');

var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

var _OrientationShape = require('../shapes/OrientationShape');

var _OrientationShape2 = _interopRequireDefault(_OrientationShape);

var _AnchorDirectionShape = require('../shapes/AnchorDirectionShape');

var _AnchorDirectionShape2 = _interopRequireDefault(_AnchorDirectionShape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  // required props for a functional interactive SingleDatePicker
  date: _reactMomentProptypes2['default'].momentObj,
  onDateChange: _propTypes2['default'].func.isRequired,

  focused: _propTypes2['default'].bool,
  onFocusChange: _propTypes2['default'].func.isRequired,

  // input related props
  id: _propTypes2['default'].string.isRequired,
  placeholder: _propTypes2['default'].string,
  disabled: _propTypes2['default'].bool,
  required: _propTypes2['default'].bool,
  readOnly: _propTypes2['default'].bool,
  screenReaderInputMessage: _propTypes2['default'].string,
  showClearDate: _propTypes2['default'].bool,
  customCloseIcon: _propTypes2['default'].node,
  showDefaultInputIcon: _propTypes2['default'].bool,
  customInputIcon: _propTypes2['default'].node,

  // calendar presentation and interaction related props
  renderMonth: _propTypes2['default'].func,
  orientation: _OrientationShape2['default'],
  anchorDirection: _AnchorDirectionShape2['default'],
  horizontalMargin: _propTypes2['default'].number,
  withPortal: _propTypes2['default'].bool,
  withFullScreenPortal: _propTypes2['default'].bool,
  initialVisibleMonth: _propTypes2['default'].func,
  numberOfMonths: _propTypes2['default'].number,
  keepOpenOnDateSelect: _propTypes2['default'].bool,
  reopenPickerOnClearDate: _propTypes2['default'].bool,
  renderCalendarInfo: _propTypes2['default'].func,
  hideKeyboardShortcutsPanel: _propTypes2['default'].bool,
  daySize: _airbnbPropTypes.nonNegativeInteger,
  isRTL: _propTypes2['default'].bool,

  // navigation related props
  navPrev: _propTypes2['default'].node,
  navNext: _propTypes2['default'].node,

  onPrevMonthClick: _propTypes2['default'].func,
  onNextMonthClick: _propTypes2['default'].func,
  onClose: _propTypes2['default'].func,

  // day presentation and interaction related props
  renderDay: _propTypes2['default'].func,
  enableOutsideDays: _propTypes2['default'].bool,
  isDayBlocked: _propTypes2['default'].func,
  isOutsideRange: _propTypes2['default'].func,
  isDayHighlighted: _propTypes2['default'].func,

  // internationalization props
  displayFormat: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].func]),
  monthFormat: _propTypes2['default'].string,
  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.SingleDatePickerPhrases))
};