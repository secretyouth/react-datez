[![NPM](https://nodei.co/npm/react-datez.png)](https://nodei.co/npm/react-datez/) [![npm version](https://badge.fury.io/js/react-datez.svg)](https://badge.fury.io/js/react-datez)

![react-dates-banner](https://user-images.githubusercontent.com/2343152/27081129-5f675992-5082-11e7-8254-0d59e88756a8.png)
# react-datez
#### A customizable, flexible and delicious react date picker.

## Example
![react-gif](https://user-images.githubusercontent.com/2343152/27118852-8ebe99a0-5120-11e7-843c-52f58d7dec1f.gif)


## Features
* Mobile friendly
* Redux-form compatible
* Standalone picker
* Multi calendar support
* Disallow past dates
* Disallow dates outside of a range
* Weekend highlighting
* Popup position
* Year & month jumping
* Custom date formatting

### Roadmap
* Multi browser support
* Localization
* Time Picker
* Blockout days
* Location support
* Animations

## How to use
There is currently two ways to implement React-datez, as a redux-form component or a standlone date picker.

`npm i --save react-datez`

Add css to to your project (uses post-css)

`@import 'react-datez/dist/css/react-datez.css';`

Than import into your components

`import { ReactDatez, ReduxReactDatez } from 'react-datez'`

---

### Props
```
ReactDatez.propTypes = {
    input: PropTypes.object,
    handleChange: PropTypes.func,
    value: PropTypes.string,
    displayCalendars: PropTypes.number,
    highlightWeekends: PropTypes.bool,
    allowPast: PropTypes.bool,
    position: PropTypes.oneOf(['center', 'left', 'right']),
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    format: PropTypes.string,
    yearJump: PropTypes.bool,
    placeholder: PropTypes.string
}
```
#### input
Passed through by redux `<Field />` component. Meta is also automatically added to this component to display errors.

#### handleChange
Pass through parent onChange function. Omitted if using redux-forms - (See example stand-alone picker).

#### value
Parent input state. Omitted if using redux-forms - (See example stand-alone picker).

#### displayCalendars
Show multiple calendars (Max 2).
> Default: 1

#### highlightWeekends
Highlight weekends for visual representation
> Default: false

#### yearJump
Allow year/month button functionality
> Default: true

#### allowPast
Allow dates in the past to be selected.
> Default: false

#### allowFuture
Allow dates in the future to be selected.
> Default: true

#### startDate
Disallow dates before a given date

#### endDate
Disallow dates after a given date

#### format
Format for the date to be displayed and stored as. See moment.js for formatting.
> Default: DD/MM/YYYY

#### position
Positioning of the popup, 'left', 'center', 'right'
> Default: 'left'

#### placeholder
Add a placeholder in the input fields
> Default: ''


---

### Redux Forms
```javascript
<div className="form-group">
    <label htmlFor="exampleDate1">Date</label>
    <Field name="exampleDate1" component={ReduxReactDatez} displayCalendars={2} highlightWeekends />
</div>
```

### Stand-alone Picker
```javascript
constructor(props) {
    super(props)
    this.state = {
        dateInput: ''
    }
    this.handleChange = this.handleChange.bind(this)
}

handleChange(value) {
    this.setState({ dateInput: value })
}

render() {
    return (
        <div className="form-group">
            <label htmlFor="exampleDate2">Check-in Date</label>
            <ReactDatez name="dateInput" handleChange={this.handleChange} value={this.state.dateInput} />
        </div>
    )
}
```
