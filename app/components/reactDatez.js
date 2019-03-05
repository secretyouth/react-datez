import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import classnames from 'classnames'

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
            visibleYear: moment(),
            disabledToday: false
        }

        this.initialisePicker = this.initialisePicker.bind(this)
        this.handleClickEvent = this.handleClickEvent.bind(this)
        this.initialiseCalendar = this.initialiseCalendar.bind(this)
        this.initialiseMonthCalendar = this.initialiseMonthCalendar.bind(this)
        this.initialiseYearCalendar = this.initialiseYearCalendar.bind(this)
        this.renderCalendar = this.renderCalendar.bind(this)
        this.selectedDate = this.selectedDate.bind(this)
        this.isPast = this.isPast.bind(this)
        this.isFuture = this.isFuture.bind(this)
        this.isBeforeStartDate = this.isBeforeStartDate.bind(this)
        this.isAfterEndDate = this.isAfterEndDate.bind(this)
        this.openPicker = this.openPicker.bind(this)
        this.closePicker = this.closePicker.bind(this)
        this.toggleYearJump = this.toggleYearJump.bind(this)
        this.jumpToToday = this.jumpToToday.bind(this)
        this.nextButton = this.nextButton.bind(this)
        this.prevButton = this.prevButton.bind(this)
        this.clickDay = this.clickDay.bind(this)
        this.clickMonth = this.clickMonth.bind(this)
        this.clickYear = this.clickYear.bind(this)
        this.disabledTodayJump = this.disabledTodayJump.bind(this)
    }

    componentWillMount() {
        if (this.props.locale !== 'en') moment.locale(this.props.locale)
    }

    componentDidMount() {
        this.initialisePicker()

        document.addEventListener('mousedown', this.handleClickEvent)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.defaultMonth !== this.props.defaultMonth) {
            const currentMonthYear = this.getCurrentMonthYear(nextProps)
            this.setState({
                currentMonthYear,
                weekStartsOn: moment(`1 ${currentMonthYear}`, 'D M YYYY').day()
            })
        }
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickEvent)
    }

    getCurrentMonthYear(props) {
        let currentMonthYear = moment()
        if ((props.input && props.input.value) && moment(props.input.value, props.dateFormat).isValid()) {
            currentMonthYear = moment(props.input.value, props.dateFormat)
        } else if (props.defaultMonth) {
            currentMonthYear = moment(props.defaultMonth)
        }

        return currentMonthYear.format('M YYYY')
    }

    initialisePicker() {
        const input = this.props.input || {}

        const currentMonthYear = this.getCurrentMonthYear(this.props)

        this.setState({
            selectedDate: (input.value && moment(input.value, this.props.dateFormat).isValid()) ? moment(input.value, this.props.dateFormat) : '',
            datePickerInputHeight: `${this.dateInput.clientHeight}px`,
            weekStartsOn: moment(`1 ${currentMonthYear}`, 'D M YYYY').day(),
            currentMonthYear
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

            if (i === 1) {
                break
            }
        }

        // Set which day to start on
        const days = moment.weekdaysMin()
        let dayOffset = 0

        while (days[0] !== this.props.firstDayOfWeek) {
            days.push(days.shift())
            dayOffset += 1
        }

        dayOffset = (7 - Math.abs(dayOffset === 0 ? 6 : dayOffset - 1)) % 7

        return calendar.map(i => (
            <div key={`calendar-${i}`}>
                <header className="rdatez-calendar-title" key={`month-header-${i}`}>{ moment(this.state.currentMonthYear, 'M YYYY').add(i, 'months').format('MMMM YYYY') }</header>
                <section className="rdatez-daysofweek">
                    { days.map((d, index) => <span key={index}>{d}</span>) }
                </section>
                { this.renderCalendar({ calendarOffset: i, dayOffset }) }
            </div>
        ))
    }

    selectedDate(date) {
        if (moment(this.state.selectedDate, this.props.dateFormat).diff(moment(date, this.props.dateFormat), 'days') === 0) {
            return true
        }

        return false
    }

    isPast(date) {
        if (moment().startOf('day').diff(moment(date, this.props.dateFormat), 'days') > 0) {
            return true
        }

        return false
    }

    isFuture(date) {
        if (moment().startOf('day').diff(moment(date, this.props.dateFormat), 'days') < 0) {
            return true
        }

        return false
    }

    isBeforeStartDate(date) {
        if (moment(this.props.endDate).diff(moment(date, this.props.dateFormat)) < 0) {
            return true
        }

        return false
    }

    isAfterEndDate(date) {
        if (moment(this.props.startDate).diff(moment(date, this.props.dateFormat)) > 0) {
            return true
        }

        return false
    }

    openPicker() {
        document.body.classList.add('date-open')

        this.setState({
            datePickerOpen: true
        })

        // Disabled todayJump
        this.disabledTodayJump()
    }

    closePicker() {
        document.body.classList.remove('date-open')

        this.setState({
            datePickerOpen: false
        })
    }

    disabledTodayJump() {
        // If today is outside of the start and endDate range disable the today jump.
        if ((this.props.startDate && this.isBeforeStartDate(moment())) || (this.props.endDate && this.isAfterEndDate(moment()))) {
            this.setState({
                disabledToday: true
            })
        }
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

        const date = (!this.props.allowFuture) ? moment().format(this.props.dateFormat) : moment().format(this.props.dateFormat)

        // catch the date range
        if ((this.props.startDate && this.isBeforeStartDate(date)) || (this.props.endDate && this.isAfterEndDate(date))) {
            return false
        }

        this.setState({
            currentMonthYear: moment().format('M YYYY'),
            selectedDate: date,
            yearJumpOpen: false,
            monthSelectOpen: false
        })

        if (this.props.input) {
            this.props.input.onChange(moment(date, this.props.dateFormat))
        }

        return true
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

        if (this.isFuture(date) && !this.props.allowFuture) {
            return false
        }

        if (this.isBeforeStartDate(date) && this.props.startDate) {
            return false
        }

        if (this.isAfterEndDate(date) && this.props.endDate) {
            return false
        }

        this.setState({
            selectedDate: date
        })

        if (this.props.input) {
            this.props.input.onChange(moment(date, this.props.dateFormat).format())
        } else {
            this.props.handleChange(moment(date, this.props.dateFormat).format())
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

    renderCalendar({ calendarOffset, dayOffset }) {
        const date = (calendarOffset) ? moment(this.state.currentMonthYear, 'M YYYY').add(calendarOffset, 'months') : moment(this.state.currentMonthYear, 'M YYYY')
        const daysInMonth = date.daysInMonth()
        const startsOn = date.day()
        const calendar = []

        for (let i = 1; i <= daysInMonth; i += 1) {
            const day = date.date(i)
            const dayDate = day.format(this.props.dateFormat)

            if (i === 1) {
                calendar.push(<div className={`rdatez-day-spacer weekday-${(day.day() + dayOffset) % 7}`} key={`${day.format('MY')}-spacer`} />)
            }

            const dayClasses = classnames(`rdatez-day weekday-${(day.day() + dayOffset) % 7} ${day.format('M-YYYY')}-${i}`, {
                'selected-day': this.selectedDate(day.format(this.props.dateFormat)),
                'past-day': this.isPast(day.format(this.props.dateFormat)),
                'before-start': this.isBeforeStartDate(day.format(this.props.dateFormat)),
                'after-end': this.isAfterEndDate(day.format(this.props.dateFormat)),
                today: moment().startOf('day').diff(day, 'days') === 0
            })

            calendar.push(<a href="" className={dayClasses} key={`${day.format('DMY')}-${i}`} onClick={e => this.clickDay(e, dayDate)} tabIndex="-1">{i}</a>)
        }

        return <section className={`rdatez-month-days starts-on-${(startsOn + dayOffset) % 7}`}>{calendar}</section>
    }

    render() {
        const input = this.props.input || {}

        const rdatezClass = classnames('rdatez', this.props.className, {
            'rdatez-centered': this.props.position === 'center',
            'rdatez-right': this.props.position === 'right'
        })

        const rdatezInputClass = classnames(this.props.inputClassName)

        const rdatezStyle = this.props.style
        const rdatezInputStyle = this.props.inputStyle

        const pickerClass = classnames('rdatez-picker', {
            'multi-cal': (this.props.displayCalendars > 1),
            'no-cal': (this.props.displayCalendars === 0),
            'highlight-weekends': this.props.highlightWeekends,
            'disallow-past': !this.props.allowPast,
            'disallow-future': !this.props.allowFuture,
            'disallow-before-start': this.props.startDate,
            'disallow-after-end': this.props.endDate
        })

        return (
            <div className={rdatezClass} style={rdatezStyle} ref={(element) => { this.rdatez = element }} >
                {!this.props.isRedux ?
                    <input
                        style={rdatezInputStyle}
                        className={rdatezInputClass}
                        onClick={this.openPicker}
                        placeholder={this.props.placeholder}
                        onFocus={this.openPicker}
                        readOnly
                        value={this.props.value && moment(this.props.value, 'YYYY-MM-DD').format(this.props.dateFormat)}
                        ref={(element) => {
                            this.dateInput = element
                        }}
                    /> :
                    <input
                        style={rdatezInputStyle}
                        className={rdatezInputClass}
                        onClick={this.openPicker}
                        placeholder={this.props.placeholder}
                        onFocus={this.openPicker}
                        readOnly
                        value={input.value && moment(input.value, 'YYYY-MM-DD').format(this.props.dateFormat)}
                        ref={(element) => {
                            this.dateInput = element
                        }}
                    /> }
                {!this.props.disableInputIcon ?
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" onClick={this.openPicker} className="cal-icon">
                        <g id="budicon-calendar">
                            <path d="M24,2H19V.5a.5.5,0,0,0-1,0V2H7V.5a.5.5,0,0,0-1,0V2H1A1,1,0,0,0,0,3V23a1,1,0,0,0,1,1H24a1,1,0,0,0,1-1V3A1,1,0,0,0,24,2Zm0,21H1V8H24ZM24,7H1V3H24Z" />
                        </g>
                    </svg> : null
                }
                { this.state.datePickerOpen && <div className={pickerClass} style={{ top: this.state.datePickerInputHeight }}>
                    <div>
                        <header className="rdatez-header">
                            <button className="rdatez-mobile-close" onClick={this.closePicker}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                    <path d="M16.8535,8.1465a.5.5,0,0,0-.707,0L12.5,11.793,8.8535,8.1465a.5.5,0,0,0-.707.707L11.793,12.5,8.1465,16.1465a.5.5,0,1,0,.707.707L12.5,13.207l3.6465,3.6465a.5.5,0,0,0,.707-.707L13.207,12.5l3.6465-3.6465A.5.5,0,0,0,16.8535,8.1465Z" />
                                    <path d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.5,12.5,0,0,0,12.5,0Zm0,24A11.5,11.5,0,1,1,24,12.5,11.5129,11.5129,0,0,1,12.5,24Z" />
                                </svg>
                            </button>
                            <button type="button" className="rdatez-btn rdatez-btn-prev" onClick={this.prevButton}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                    <path d="M14.5,23a.4984.4984,0,0,1-.3535-.1465l-9-9a.5.5,0,0,1,0-.707l9-9a.5.5,0,1,1,.707.707L6.207,13.5l8.6465,8.6465A.5.5,0,0,1,14.5,23Z" />
                                </svg>
                            </button>
                            <button type="button" className="rdatez-btn rdatez-btn-next" onClick={this.nextButton}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                    <path d="M9.5,23a.4984.4984,0,0,0,.3535-.1465l9-9a.5.5,0,0,0,0-.707l-9-9a.5.5,0,0,0-.707.707L17.793,13.5,9.1465,22.1465A.5.5,0,0,0,9.5,23Z" />
                                </svg>
                            </button>
                            { this.props.yearJump && <button type="button" className="rdatez-btn rdatez-btn-year" onClick={this.toggleYearJump}>
                                {this.props.yearButton ? this.props.yearButton : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                    <path d="M12.8535,6.8535a.5.5,0,0,0,0-.707l-6-6a.5.5,0,0,0-.707,0l-6,6a.5.5,0,0,0,.707.707L6,1.707V20.5a.5.5,0,0,0,1,0V1.707l5.1465,5.1465A.5.5,0,0,0,12.8535,6.8535Z" />
                                    <path d="M24.8535,18.1465a.5.5,0,0,0-.707,0L19,23.293V4.5a.5.5,0,0,0-1,0V23.293l-5.1465-5.1465a.5.5,0,0,0-.707.707l6,6a.5.5,0,0,0,.707,0l6-6A.5.5,0,0,0,24.8535,18.1465Z" />
                                </svg>}
                            </button> }
                            { !this.state.disabledToday && <button type="button" className="rdatez-btn rdatez-btn-today" onClick={e => this.jumpToToday(e)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                    <path d="M24,3H19V1.5a.5.5,0,0,0-1,0V3H7V1.5a.5.5,0,0,0-1,0V3H1A1,1,0,0,0,0,4V24a1,1,0,0,0,1,1H24a1,1,0,0,0,1-1V4A1,1,0,0,0,24,3Zm0,21H1V9H24ZM24,8H1V4H24Z" />
                                    <path d="M12.5,22A5.5,5.5,0,1,0,7,16.5,5.5,5.5,0,0,0,12.5,22Zm0-10A4.5,4.5,0,1,1,8,16.5,4.5,4.5,0,0,1,12.5,12Z" />
                                    <path d="M14.2,18.9a.5.5,0,1,0,.6-.8L13,16.75V14.5a.5.5,0,0,0-1,0V17a.5.5,0,0,0,.2.4Z" />
                                </svg>
                            </button> }
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
    disableInputIcon: false,
    dateFormat: 'DD/MM/YYYY',
    displayCalendars: 1,
    highlightWeekends: false,
    allowPast: false,
    allowFuture: true,
    yearJump: true,
    position: 'left',
    locale: 'en',
    firstDayOfWeek: 'Su'
}

ReactDatez.propTypes = {
    input: PropTypes.object,
    style: PropTypes.object,
    inputStyle: PropTypes.object,
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    disableInputIcon: PropTypes.bool,
    handleChange: PropTypes.func,
    value: PropTypes.string,
    displayCalendars: PropTypes.number,
    isRedux: PropTypes.bool,
    highlightWeekends: PropTypes.bool,
    allowPast: PropTypes.bool,
    allowFuture: PropTypes.bool,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    position: PropTypes.oneOf(['center', 'left', 'right']),
    dateFormat: PropTypes.string,
    yearJump: PropTypes.bool,
    placeholder: PropTypes.string,
    defaultMonth: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    locale: PropTypes.string,
    yearButton: PropTypes.node,
    firstDayOfWeek: PropTypes.oneOf(['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']),
}

export default ReactDatez
