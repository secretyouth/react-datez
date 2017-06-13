[![NPM](https://nodei.co/npm/react-datez.png)](https://nodei.co/npm/react-datez/) [![npm version](https://badge.fury.io/js/react-datez.svg)](https://badge.fury.io/js/react-datez)

![react-dates-banner](https://user-images.githubusercontent.com/2343152/27081129-5f675992-5082-11e7-8254-0d59e88756a8.png)
# react-datez
#### A customizable, flexible and delicious react date picker.

## Example
![react-datez](https://user-images.githubusercontent.com/2343152/27080803-d9d5e056-5080-11e7-9a2c-731f4e2c4d55.gif)

## Features
* Mobile friendly
* Redux-form compatible
* Standalone picker
* Multi calendar support
* Disallow past dates
* Weekend highlighting
* Year & month jumping

### Feature roadmap
* Date range selection
* Blockout days
* Location support
* Animations

## How to use
There is currently two ways to implement React-datez, as a redux-form component or a standlone date picker.

`npm i --save react-datez`

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
    format: PropTypes.string
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

#### allowPast
Allow dates in the past to be selected.
> Default: true

#### format
Format for the date to be displayed and stored as. See moment.js for formatting.
> Default: DD/MM/YYYY

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
