import React, { Component, PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form'
// import { connect } from 'react-redux'

import ReactDatez from '../components/reactDatez'
import ReduxReactDatez from '../components/reduxReactDatez'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dateInput: 'dicks'
        }
        this.nextStep = this.nextStep.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    nextStep(form) {
        console.log(form)
    }

    handleChange(value) {
        console.log('handleChange', value)
        this.setState({ dateInput: value })
    }

    render() {
        return (
            <div className="container">
                <h1>React Datez Example</h1>
                <form onSubmit={this.props.handleSubmit(this.nextStep)}>
                    <h2 className="m-b-1">Single Date Picker</h2>
                    <div className="form-group m-b-3">
                        <label htmlFor="exampleDate1" className="m-b-1">Date</label>
                        <Field name="exampleDate1" component={ReduxReactDatez} />
                    </div>

                    <h2 className="m-b-1">Multi Calendar Picker</h2>
                    <div className="form-group m-b-3">
                        <label htmlFor="exampleDate2" className="m-b-1">Check-in Date</label>
                        <ReactDatez name="dateInput" handleChange={this.handleChange} value={this.state.dateInput} />
                    </div>

                    <h2 className="m-b-1">Disallow Previous Dates</h2>
                    <div className="form-group m-b-3">
                        <label htmlFor="exampleDate3" className="m-b-1">Check-in Date</label>
                        <Field name="exampleDate3" component={ReactDatez} allowPast={false} displayCalendars={2} />
                    </div>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {}

    if (!values.starDate) {
        errors.starDate = 'Please add your property address'
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
