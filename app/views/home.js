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
            language: 'en'
        }
        this.nextStep = this.nextStep.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    nextStep(form) {
        console.log(form)
    }

    handleChange(value) {
        console.log('Non redux input change', value)
        this.setState({ dateInput: value })
    }

    render() {
        return (
            <div className="container">
                <img src="/assets/banner.png" alt="React Datez" />

                <hr />

                <form onSubmit={this.props.handleSubmit(this.nextStep)}>
                    <div className="form-group m-b-3">
                        <label htmlFor="language" className="m-b-1">Language</label>
                        <select name="language" onChange={(e) => this.setState({language: e.target.value})}>
                            <option value="en">en</option>
                            <option value="de">de</option>
                            <option value="ru">ru</option>
                            <option value="tr">tr</option>
                        </select>
                    </div>

                    <div className="form-group m-b-3">
                        <label htmlFor="exampleDate1" className="m-b-1">Standard Date Picker (Localized) </label>
                        <Field name="exampleDate1" component={ReduxReactDatez} />
                    </div>

                    <div className="form-group m-b-3">
                        <label htmlFor="exampleDate2" className="m-b-1">Multi-calendar Picker (Non Redux)</label>
                        <ReactDatez name="dateInput" locale={this.state.language} handleChange={this.handleChange} value={this.state.dateInput} displayCalendars={2} placeholder="Multi-calendar" />
                    </div>

                    <div className="form-group m-b-3">
                        <label htmlFor="exampleDate3" className="m-b-1">Highlight Weekends</label>
                        <Field name="exampleDate3" component={ReduxReactDatez} highlightWeekends />
                    </div>

                    <div className="form-group m-b-3">
                        <label htmlFor="exampleDate4" className="m-b-1">Allow Past Dates</label>
                        <Field name="exampleDate4" component={ReduxReactDatez} allowPast displayCalendars={2} position="center" />
                    </div>

                    <div className="form-group m-b-3">
                        <label htmlFor="exampleDate5" className="m-b-1">Disallow Future Dates</label>
                        <Field name="exampleDate5" component={ReduxReactDatez} allowPast allowFuture={false} displayCalendars={2} position="center" />
                    </div>

                    <div className="form-group m-b-3">
                        <label htmlFor="exampleDate6" className="m-b-1">Disallow Dates Outside of Range</label>
                        <Field name="exampleDate6" component={ReduxReactDatez} displayCalendars={2} startDate={moment().subtract(100, 'days').format()} endDate={moment().add(12, 'days').format()} position="center" />
                    </div>

                    <div className="form-group m-b-3">
                        <label htmlFor="exampleDate7" className="m-b-1">Disallow Year Jump</label>
                        <Field name="exampleDate7" component={ReduxReactDatez} yearJump={false} />
                    </div>

                    <hr />

                    <div className="form-group m-b-3">
                        <label htmlFor="dateOfBirth" className="m-b-1">Date of Birth</label>
                        <Field name="dateOfBirth" component={ReduxReactDatez} allowPast allowFuture={false} displayCalendars={2} position="center" />
                    </div>

                    <div className="form-group m-b-3">
                        <label htmlFor="exampleDate8" className="m-b-1">Format Date</label>
                        <Field name="exampleDate8" component={ReduxReactDatez} dateFormat="YYYY-MM-DD" highlightWeekends />
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
