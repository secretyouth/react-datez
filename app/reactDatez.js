import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import classnames from 'classnames'

require('./styles/components/datepickers.css')

class ReactDatez extends Component {
    constructor(props) {
        super(props)

        this.state = {
            datePickerOpen: false,
            monthSelectOpen: false,
            yearJumpOpen: false,
            datePickerInputHeight: null,
            weekStartsOn: null,
            currentMonthYear: null,
            selectedDate: moment().startOf('day'),
            visibleYear: moment()
        }

        this.initialisePicker = this.initialisePicker.bind(this)
        this.handleClickEvent = this.handleClickEvent.bind(this)
        this.initialiseCalendar = this.initialiseCalendar.bind(this)
        this.initialiseMonthCalendar = this.initialiseMonthCalendar.bind(this)
        this.initialiseYearCalendar = this.initialiseYearCalendar.bind(this)
        this.renderCalendar = this.renderCalendar.bind(this)
        this.renderMonthTitle = this.renderMonthTitle.bind(this)
        this.selectedDate = this.selectedDate.bind(this)
        this.isPast = this.isPast.bind(this)
        this.openPicker = this.openPicker.bind(this)
        this.closePicker = this.closePicker.bind(this)
        this.toggleYearJump = this.toggleYearJump.bind(this)
        this.jumpToToday = this.jumpToToday.bind(this)
        this.nextButton = this.nextButton.bind(this)
        this.prevButton = this.prevButton.bind(this)
        this.clickDay = this.clickDay.bind(this)
        this.clickMonth = this.clickMonth.bind(this)
        this.clickYear = this.clickYear.bind(this)
    }

    componentDidMount() {
        this.initialisePicker()

        document.addEventListener('mousedown', this.handleClickEvent)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickEvent)
    }

    initialisePicker() {
        this.setState({
            selectedDate: (this.props.input.value) ? moment(this.props.input.value, this.props.format) : null,
            datePickerInputHeight: `${this.dateInput.clientHeight}px`,
            weekStartsOn: moment(`1 ${this.state.currentMonthYear}`, 'D M YYYY').day(),
            currentMonthYear: (this.props.input.value) ? moment(this.props.input.value, this.props.format).format('M YYYY') : moment().format('M YYYY')
        })
    }

    handleClickEvent(event) {
        if (this.rdatez && !this.rdatez.contains(event.target) && this.state.datePickerOpen) {
            this.closePicker()
        }
    }

    initialiseMonthCalendar() {
        const months = []

        for (let i = 1; i < 13; i += 1) {
            months.push(<a href="" className="rdatez-month" key={`${this.state.currentMonthYear}-months-${i}`} onClick={e => this.clickMonth(e, i)}>{moment(i, 'M').format('MMM')}</a>)
        }

        return months
    }

    initialiseYearCalendar() {
        const years = []

        for (let i = this.state.visibleYear.format('YYYY'); i > (this.state.visibleYear.format('YYYY') - 12); i -= 1) {
            years.push(<a href="" className="rdatez-year" key={`years-${i}`} onClick={e => this.clickYear(e, i)}>{i}</a>)
        }
        return years
    }

    initialiseCalendar() {
        const calendar = []
        for (let i = 0; i < this.props.displayCalendars; i += 1) {
            calendar.push(i)
        }

        return calendar.map(i => (
            <div key={`calendar-${i}`}>
                <section className="rdatez-daysofweek">
                    <span>M</span>
                    <span>T</span>
                    <span>W</span>
                    <span>T</span>
                    <span>F</span>
                    <span>S</span>
                    <span>S</span>
                </section>
                { this.renderCalendar(i) }
            </div>
        ))
    }

    selectedDate(date) {
        if (moment(this.state.selectedDate, this.props.format).diff(moment(date, this.props.format), 'days') === 0) {
            return true
        }

        return false
    }

    isPast(date) {
        if (moment().diff(moment(date, this.props.format), 'days') > 0) {
            return true
        }

        return false
    }

    openPicker() {
        this.setState({
            datePickerOpen: true
        })
    }

    closePicker() {
        this.setState({
            datePickerOpen: false
        })
    }

    toggleYearJump() {
        if (!this.state.monthSelectOpen) {
            this.setState({
                yearJumpOpen: !this.state.yearJumpOpen,
            })
        }
    }

    jumpToToday(e) {
        e.preventDefault()

        this.setState({
            currentMonthYear: moment().format('M YYYY'),
            selectedDate: moment().format(this.props.format)
        })

        if (this.props.input) {
            this.props.input.onChange(moment().format(this.props.format))
        }
    }

    nextButton() {
        if (this.state.yearJumpOpen) {
            this.setState({
                visibleYear: this.state.visibleYear.add(12, 'years')
            })
            this.initialiseYearCalendar()
        } else {
            this.setState({
                currentMonthYear: moment(this.state.currentMonthYear, 'M YYYY').add(1, 'months').format('M YYYY'),
                weekStartsOn: moment(`1 ${this.state.currentMonthYear}`, 'D M YYYY').add(1, 'months').day()
            })
        }
    }

    prevButton() {
        if (this.state.yearJumpOpen) {
            this.setState({
                visibleYear: this.state.visibleYear.subtract(12, 'years')
            })
            this.initialiseYearCalendar()
        } else {
            this.setState({
                currentMonthYear: moment(this.state.currentMonthYear, 'M YYYY').subtract(1, 'months').format('M YYYY'),
                weekStartsOn: moment(`1 ${this.state.currentMonthYear}`, 'D M YYYY').subtract(1, 'months').day()
            })
        }
    }

    clickDay(e, date) {
        e.preventDefault()

        if (this.isPast(date) && !this.props.allowPast) {
            return false
        }

        this.setState({
            selectedDate: date
        })

        if (this.props.input) {
            this.props.input.onChange(date)
        }

        return this.closePicker()
    }

    clickMonth(e, month) {
        e.preventDefault()

        this.setState({
            currentMonthYear: moment(this.state.currentMonthYear, 'M YYYY').format(`${month} YYYY`),
            weekStartsOn: moment(`1 ${this.state.currentMonthYear}`, 'D M YYYY').set('month', month - 1).day(),
            monthSelectOpen: false
        })
    }

    clickYear(e, year) {
        e.preventDefault()

        this.setState({
            currentMonthYear: moment(this.state.currentMonthYear, 'M YYYY').format(`M ${year}`),
            weekStartsOn: moment(`1 ${this.state.currentMonthYear}`, 'D M YYYY').set('year', year).day(),
            monthSelectOpen: true
        })

        this.toggleYearJump()
    }

    renderCalendar(offset) {
        const date = (offset) ? moment(this.state.currentMonthYear, 'M YYYY').add(offset, 'months') : moment(this.state.currentMonthYear, 'M YYYY')
        const daysInMonth = date.daysInMonth()
        const startsOn = date.day()
        const calendar = []

        for (let i = 1; i <= daysInMonth; i += 1) {
            const day = date.date(i)
            const dayDate = day.format(this.props.format)
            if (i === 1) {
                calendar.push(<div className={`rdatez-day-spacer weekday-${day.day()}`} key={`${day.format('MY')}-spacer`} />)
            }

            const dayClasses = classnames(`rdatez-day weekday-${day.day()} ${day.format('M-YYYY')}-${i}`, {
                'selected-day': this.selectedDate(day.format(this.props.format)),
                'past-day': this.isPast(day.format(this.props.format))
            })

            calendar.push(<a href="" className={dayClasses} key={`${day.format('DMY')}-${i}`} onClick={e => this.clickDay(e, dayDate)}>{i}</a>)
        }

        return <section className={`rdatez-month-days starts-on-${startsOn}`}>{calendar}</section>
    }

    renderMonthTitle() {
        const calendar = []
        for (let i = 0; i < this.props.displayCalendars; i += 1) {
            calendar.push(i)
        }

        return calendar.map(i => (
            <div key={`month-header-${i}`}>{ moment(this.state.currentMonthYear, 'M YYYY').add(i, 'months').format('MMMM YYYY') }</div>
        ))
    }

    render() {
        const input = this.props.input || null
        const { touched, error } = this.props.meta || {}

        const showError = classnames('rdatez', {
            error: touched && error
        })

        const pickerClass = classnames('rdatez-picker', {
            'multi-cal': (this.props.displayCalendars > 1),
            'highlight-weekends': this.props.highlightWeekends,
            'disallow-past': !this.props.allowPast
        })

        return (
            <div className={showError} ref={(element) => { this.rdatez = element }} >
                <input ref={(element) => { this.dateInput = element }} {...input} onFocus={this.openPicker} />

                {touched && error && <div className="help-text error">{error}</div>}

                { this.state.datePickerOpen && <div className={pickerClass} style={{ top: this.state.datePickerInputHeight }}>
                    <button className="rdatez-mobile-close" onClick={this.closePicker}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                            <path d="M16.8535,8.1465a.5.5,0,0,0-.707,0L12.5,11.793,8.8535,8.1465a.5.5,0,0,0-.707.707L11.793,12.5,8.1465,16.1465a.5.5,0,1,0,.707.707L12.5,13.207l3.6465,3.6465a.5.5,0,0,0,.707-.707L13.207,12.5l3.6465-3.6465A.5.5,0,0,0,16.8535,8.1465Z" />
                            <path d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.5,12.5,0,0,0,12.5,0Zm0,24A11.5,11.5,0,1,1,24,12.5,11.5129,11.5129,0,0,1,12.5,24Z" />
                        </svg>
                    </button>
                    <div>
                        <header className="rdatez-header">
                            <button type="button" className="rdatez-btn rdatez-btn-prev" onClick={this.prevButton}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                    <path d="M14.5,23a.4984.4984,0,0,1-.3535-.1465l-9-9a.5.5,0,0,1,0-.707l9-9a.5.5,0,1,1,.707.707L6.207,13.5l8.6465,8.6465A.5.5,0,0,1,14.5,23Z" />
                                </svg>
                            </button>
                            { this.renderMonthTitle() }
                            <button type="button" className="rdatez-btn rdatez-btn-year" onClick={this.toggleYearJump}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                    <path d="M12.8535,6.8535a.5.5,0,0,0,0-.707l-6-6a.5.5,0,0,0-.707,0l-6,6a.5.5,0,0,0,.707.707L6,1.707V20.5a.5.5,0,0,0,1,0V1.707l5.1465,5.1465A.5.5,0,0,0,12.8535,6.8535Z" />
                                    <path d="M24.8535,18.1465a.5.5,0,0,0-.707,0L19,23.293V4.5a.5.5,0,0,0-1,0V23.293l-5.1465-5.1465a.5.5,0,0,0-.707.707l6,6a.5.5,0,0,0,.707,0l6-6A.5.5,0,0,0,24.8535,18.1465Z" />
                                </svg>
                            </button>
                            <button type="button" className="rdatez-btn rdatez-btn-today" onClick={e => this.jumpToToday(e)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                    <path d="M24,3H19V1.5a.5.5,0,0,0-1,0V3H7V1.5a.5.5,0,0,0-1,0V3H1A1,1,0,0,0,0,4V24a1,1,0,0,0,1,1H24a1,1,0,0,0,1-1V4A1,1,0,0,0,24,3Zm0,21H1V9H24ZM24,8H1V4H24Z" />
                                    <path d="M12.5,22A5.5,5.5,0,1,0,7,16.5,5.5,5.5,0,0,0,12.5,22Zm0-10A4.5,4.5,0,1,1,8,16.5,4.5,4.5,0,0,1,12.5,12Z" />
                                    <path d="M14.2,18.9a.5.5,0,1,0,.6-.8L13,16.75V14.5a.5.5,0,0,0-1,0V17a.5.5,0,0,0,.2.4Z" />
                                </svg>
                            </button>
                            <button type="button" className="rdatez-btn rdatez-btn-next" onClick={this.nextButton}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                    <path d="M9.5,23a.4984.4984,0,0,0,.3535-.1465l9-9a.5.5,0,0,0,0-.707l-9-9a.5.5,0,0,0-.707.707L17.793,13.5,9.1465,22.1465A.5.5,0,0,0,9.5,23Z" />
                                </svg>
                            </button>
                        </header>
                        <div className="rdatez-calendar">
                            { this.initialiseCalendar() }
                        </div>
                        {this.state.yearJumpOpen && <section className="rdatez-calendar-year">
                            { this.initialiseYearCalendar() }
                        </section> }
                        {this.state.monthSelectOpen && <section className="rdatez-calendar-month">
                            { this.initialiseMonthCalendar() }
                        </section> }
                    </div>
                </div> }
            </div>
        )
    }
}

ReactDatez.defaultProps = {
    format: 'DD/MM/YYYY',
    displayCalendars: 1,
    highlightWeekends: false,
    allowPast: true
}

ReactDatez.propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object,
    displayCalendars: PropTypes.number,
    highlightWeekends: PropTypes.bool,
    allowPast: PropTypes.bool,
    format: PropTypes.string
}

export default ReactDatez
