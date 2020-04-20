import React, { Component, PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form'
import moment from 'moment'

import ReactDatez from '../components/reactDatez'
import ReduxReactDatez from '../components/reduxReactDatez'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dateInput: '',
            dateInputDisableIcon: '',
            dateInputExtraClass: '',
            dateInputExtraStyleInput: ''
        }

        this.nextStep = this.nextStep.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeDisableIcon = this.handleChangeDisableIcon.bind(this)
        this.handleChangeExtraClass = this.handleChangeExtraClass.bind(this)
        this.handleChangeExtraStyleInput = this.handleChangeExtraStyleInput.bind(this)
    }

    nextStep(form) {
        console.log(form)
    }

    handleChange(value) {
        console.log('Non redux input change', value)
        this.setState({ dateInput: value })
    }

    handleChangeDisableIcon(value) {
        console.log('Input change on disable icon', value)
        this.setState({ dateInputDisableIcon: value })
    }

    handleChangeExtraClass(value) {
        console.log('Non redux input change for Additional class', value)
        this.setState({ dateInputExtraClass: value })
    }

    handleChangeExtraStyleInput(value) {
        console.log('Input changed for input element style', value)
        this.setState({ dateInputExtraStyleInput: value })
    }

    render() {
        const { handleSubmit } = this.props
        const {
            dateInput, dateInputDisableIcon, dateInputExtraStyleInput, dateInputExtraClass
        } = this.state

        return (
            <div className="container">
                <img src="/assets/banner.png" alt="React Datez" />

                <hr />

                <form onSubmit={handleSubmit(this.nextStep)} className="container-sm">
                    <div className="form-group m-b-3">
                        <label htmlFor="exampleDate1" className="m-b-1">Standard Date Picker</label>
                        <Field name="exampleDate1" id="exampleDate1" component={ReduxReactDatez} />
                    </div>

                    <div className="form-group m-b-3">
                        <label htmlFor="exampleDate2" className="m-b-1">Multi-calendar Picker (Non Redux)</label>
                        <ReactDatez name="dateInput" id="exampleDate2" handleChange={this.handleChange} value={dateInput} displayCalendars={2} placeholder="Multi-calendar" />
                    </div>

                    <div className="form-group m-b-3">
                        <label htmlFor="exampleDateExtraClass" className="m-b-1">
                            Extra Class (Non Redux).
                            <small>Inspect the element on console to see the added class</small>
                        </label>
                        <ReactDatez id="exampleDateExtraClass" className="my-extra-base-class hello" inputClassName="my-extra-input-class" name="dateInputExtraClass" handleChange={this.handleChangeExtraClass} value={dateInputExtraClass} />
                    </div>

                    <div className="form-group m-b-3">
                        <label htmlFor="exampleDisabledField" className="m-b-1">Disable Input Icon</label>
                        <ReactDatez id="exampleDisabledField" disableInputIcon handleChange={this.handleChangeDisableIcon} value={dateInputDisableIcon} />
                    </div>

                    <div className="form-group m-b-3">
                        <label htmlFor="exampleDateExtraClass" className="m-b-1">Disable Input Icon</label>
                        <ReactDatez id="exampleDateExtraClass" disableInputIcon handleChange={this.handleChangeDisableIcon} value={dateInputDisableIcon} disable />
                    </div>

                    <div className="form-group m-b-3">
                        <label htmlFor="exampleDateExtraClass" className="m-b-1">
                            Custom Style for input
                            <small>Select date to see magic</small>
                        </label>
                        <ReactDatez id="exampleDateExtraClass" inputStyle={{ color: 'blue' }} handleChange={this.handleChangeExtraStyleInput} value={dateInputExtraStyleInput} />
                    </div>

                    <div className="form-group m-b-3">
                        <label htmlFor="exampleDate3" className="m-b-1">Highlight Weekends</label>
                        <Field name="exampleDate3" id="exampleDate3" component={ReduxReactDatez} highlightWeekends />
                    </div>

                    <div className="form-group m-b-3">
                        <label htmlFor="exampleDate4" className="m-b-1">Allow Past Dates</label>
                        <Field name="exampleDate4" id="exampleDate4" component={ReduxReactDatez} allowPast displayCalendars={2} position="center" />
                    </div>

                    <div className="form-group m-b-3">
                        <label htmlFor="exampleDate5" className="m-b-1">Disallow Future Dates</label>
                        <Field name="exampleDate5" id="exampleDate5" component={ReduxReactDatez} allowPast allowFuture={false} displayCalendars={2} position="center" />
                    </div>

                    <div className="form-group m-b-3">
                        <label htmlFor="exampleDate6" className="m-b-1">Disallow Dates Outside of Range</label>
                        <Field name="exampleDate6" id="exampleDate6" component={ReduxReactDatez} displayCalendars={2} startDate={moment().subtract(100, 'days').format()} endDate={moment().add(12, 'days').format()} position="center" />
                    </div>

                    <div className="form-group m-b-3">
                        <label htmlFor="exampleDate7" className="m-b-1">Disallow Year Jump</label>
                        <Field name="exampleDate7" id="exampleDate7" component={ReduxReactDatez} yearJump={false} />
                    </div>

                    <hr />

                    <div className="form-group m-b-3">
                        <label htmlFor="dateOfBirth" className="m-b-1">Date of Birth</label>
                        <Field name="dateOfBirth" id="dateOfBirth" component={ReduxReactDatez} allowPast allowFuture={false} position="center" />
                    </div>

                    <div className="form-group m-b-3">
                        <label htmlFor="exampleDate8" className="m-b-1">Format Date</label>
                        <Field name="exampleDate8" id="exampleDate8" component={ReduxReactDatez} dateFormat="YYYY-MM-DD" highlightWeekends />
                    </div>

                    <hr />

                    <h2>i18n</h2>

                    <div className="form-group m-b-3">
                        <label htmlFor="exampleDate9" className="m-b-1">Locale and Format</label>
                        <Field name="exampleDate9" id="exampleDate9" component={ReduxReactDatez} dateFormat="YYYY년 M월 D일" currentMonthYearFormat="YYYY년 M월" highlightWeekends allowPast />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {}

    if (!values.dateOfBirth) {
        errors.dateOfBirth = 'Date of birth is incorrect.'
    }

    if (values.dateOfBirth && moment().diff(moment(values.dateOfBirth), 'years') <= 18) {
        errors.dateOfBirth = 'You need to be over 18 years old.'
    }

    return errors
}


Home.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}

const ExampleForm = reduxForm({
    form: 'ExampleForm',
    validate
})(Home)

export default ExampleForm
