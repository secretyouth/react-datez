/* eslint-disable react/no-unused-state */
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
        this.clearSelected = this.clearSelected.bind(this)
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
        const { locale } = this.props
        if (locale !== 'en') moment.locale(locale)
    }

    componentDidMount() {
        this.initialisePicker()

        document.addEventListener('mousedown', this.handleClickEvent)
    }

    componentWillReceiveProps(nextProps) {
        const { defaultMonth } = this.props
        if (nextProps.defaultMonth !== defaultMonth) {
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
        const { input, dateFormat } = this.props
        const _input = input || {}

        const currentMonthYear = this.getCurrentMonthYear(this.props)

        this.setState({
            selectedDate: (_input.value && moment(_input.value, dateFormat).isValid()) ? moment(_input.value, dateFormat) : '',
            datePickerInputHeight: `${this.dateInput.clientHeight}px`,
            weekStartsOn: moment(`1 ${currentMonthYear}`, 'D M YYYY').day(),
            currentMonthYear
        })
    }

    clearSelected() {
        const {
            input, handleChange
        } = this.props

        if (input) {
            input.onChange('')
        } else {
            handleChange('')
        }

        this.closePicker()
    }

    handleClickEvent(event) {
        const { datePickerOpen } = this.state
        if (this.rdatez && !this.rdatez.contains(event.target) && datePickerOpen) {
            this.closePicker()
        }
    }

    initialiseMonthCalendar() {
        const months = []
        const { currentMonthYear } = this.state

        for (let i = 1; i < 13; i += 1) {
            months.push(<button type="button" className="rdatez-month" key={`${currentMonthYear}-months-${i}`} onClick={(e) => this.clickMonth(e, i)}>{moment(i, 'M').format('MMM')}</button>)
        }

        return months
    }

    initialiseYearCalendar() {
        const years = []
        const { visibleYear } = this.state

        for (let i = visibleYear.format('YYYY'); i > (visibleYear.format('YYYY') - 12); i -= 1) {
            years.push(<button type="button" className="rdatez-year" key={`years-${i}`} onClick={(e) => this.clickYear(e, i)}>{i}</button>)
        }
        return years
    }

    initialiseCalendar() {
        const {
            firstDayOfWeek,
            currentMonthYearFormat
        } = this.props
        const calendar = []
        const { displayCalendars } = this.props
        const { currentMonthYear } = this.state
        for (let i = 0; i < displayCalendars; i += 1) {
            calendar.push(i)

            if (i === 1) {
                break
            }
        }

        // Set which day to start on
        const days = moment.weekdaysMin()
        let dayOffset = 0

        if (days.includes(firstDayOfWeek)) {
            dayOffset = days.indexOf(firstDayOfWeek)
            dayOffset = (7 - Math.abs(dayOffset === 0 ? 6 : dayOffset - 1)) % 7

            while (days[0] !== firstDayOfWeek) {
                days.push(days.shift())
            }
        }

        return calendar.map((i) => (
            <div key={`calendar-${i}`}>
                <header className="rdatez-calendar-title" key={`month-header-${i}`}>{moment(currentMonthYear, 'M YYYY').add(i, 'months').format(currentMonthYearFormat)}</header>
                <section className="rdatez-daysofweek">
                    {days.map((d, index) => <span key={index}>{d}</span>)}
                </section>
                {this.renderCalendar({ calendarOffset: i, dayOffset })}
            </div>
        ))
    }

    selectedDate(date) {
        const { selectedDate } = this.state
        const { dateFormat } = this.props

        if (moment(selectedDate, dateFormat).diff(moment(date, dateFormat), 'days') === 0) {
            return true
        }

        return false
    }

    isPast(date) {
        const { dateFormat } = this.props

        if (moment().startOf('day').diff(moment(date, dateFormat), 'days') > 0) {
            return true
        }

        return false
    }

    isFuture(date) {
        const { dateFormat } = this.props

        if (moment().startOf('day').diff(moment(date, dateFormat), 'days') < 0) {
            return true
        }

        return false
    }

    isBeforeStartDate(date) {
        const { dateFormat, endDate } = this.props

        if (moment(endDate).diff(moment(date, dateFormat)) < 0) {
            return true
        }

        return false
    }

    isAfterEndDate(date) {
        const { dateFormat, startDate } = this.props

        if (moment(startDate).diff(moment(date, dateFormat)) > 0) {
            return true
        }

        return false
    }

    openPicker() {
        const {
            disable
        } = this.props
        if (!disable) {
            document.body.classList.add('date-open')

            this.setState({
                datePickerOpen: true
            })

            // Disabled todayJump
            this.disabledTodayJump()
        }
    }

    closePicker() {
        document.body.classList.remove('date-open')

        this.setState({
            datePickerOpen: false
        })
    }

    disabledTodayJump() {
        const { startDate, endDate } = this.props

        // If today is outside of the start and endDate range disable the today jump.
        if ((startDate && this.isBeforeStartDate(moment())) || (endDate && this.isAfterEndDate(moment()))) {
            this.setState({
                disabledToday: true
            })
        }
    }

    toggleYearJump() {
        const { monthSelectOpen, yearJumpOpen } = this.state

        if (!monthSelectOpen) {
            this.setState({
                yearJumpOpen: !yearJumpOpen,
            })
        }
    }

    jumpToToday(e) {
        e.preventDefault()

        const {
            allowFuture, dateFormat, startDate, endDate, input
        } = this.props

        const date = (!allowFuture) ? moment().format(dateFormat) : moment().format(dateFormat)

        // catch the date range
        if ((startDate && this.isBeforeStartDate(date)) || (endDate && this.isAfterEndDate(date))) {
            return false
        }

        this.setState({
            currentMonthYear: moment().format('M YYYY'),
            selectedDate: date,
            yearJumpOpen: false,
            monthSelectOpen: false
        })

        if (input) {
            input.onChange(moment(date, dateFormat))
        }

        return true
    }

    nextButton() {
        const { yearJumpOpen, visibleYear, currentMonthYear } = this.state
        if (yearJumpOpen) {
            this.setState({
                visibleYear: visibleYear.add(12, 'years')
            })
            this.initialiseYearCalendar()
        } else {
            this.setState({
                currentMonthYear: moment(currentMonthYear, 'M YYYY').add(1, 'months').format('M YYYY'),
                weekStartsOn: moment(`1 ${currentMonthYear}`, 'D M YYYY').add(1, 'months').day()
            })
        }
    }

    prevButton() {
        const { yearJumpOpen, visibleYear, currentMonthYear } = this.state

        if (yearJumpOpen) {
            this.setState({
                visibleYear: visibleYear.subtract(12, 'years')
            })
            this.initialiseYearCalendar()
        } else {
            this.setState({
                currentMonthYear: moment(currentMonthYear, 'M YYYY').subtract(1, 'months').format('M YYYY'),
                weekStartsOn: moment(`1 ${currentMonthYear}`, 'D M YYYY').subtract(1, 'months').day()
            })
        }
    }

    clickDay(e, date) {
        e.preventDefault()

        const {
            allowPast, allowFuture, startDate, endDate, input, dateFormat, handleChange
        } = this.props

        if (this.isPast(date) && !allowPast) {
            return false
        }

        if (this.isFuture(date) && !allowFuture) {
            return false
        }

        if (this.isBeforeStartDate(date) && startDate) {
            return false
        }

        if (this.isAfterEndDate(date) && endDate) {
            return false
        }

        this.setState({
            selectedDate: date
        })

        if (input) {
            input.onChange(moment(date, dateFormat).format())
        } else {
            handleChange(moment(date, dateFormat).format())
        }

        return this.closePicker()
    }

    clickMonth(e, month) {
        e.preventDefault()
        const { currentMonthYear } = this.state

        this.setState({
            currentMonthYear: moment(currentMonthYear, 'M YYYY').format(`${month} YYYY`),
            weekStartsOn: moment(`1 ${currentMonthYear}`, 'D M YYYY').set('month', month - 1).day(),
            monthSelectOpen: false
        })
    }

    clickYear(e, year) {
        e.preventDefault()
        const { currentMonthYear } = this.state

        this.setState({
            currentMonthYear: moment(currentMonthYear, 'M YYYY').format(`M ${year}`),
            weekStartsOn: moment(`1 ${currentMonthYear}`, 'D M YYYY').set('year', year).day(),
            monthSelectOpen: true
        })

        this.toggleYearJump()
    }

    renderCalendar({ calendarOffset, dayOffset }) {
        const {
            dateFormat
        } = this.props

        const {
            currentMonthYear,
        } = this.state

        const date = (calendarOffset) ? moment(currentMonthYear, 'M YYYY').add(calendarOffset, 'months') : moment(currentMonthYear, 'M YYYY')
        const daysInMonth = date.daysInMonth()
        const startsOn = date.day()
        const calendar = []

        for (let i = 1; i <= daysInMonth; i += 1) {
            const day = date.date(i)
            const dayDate = day.format(dateFormat)

            if (i === 1) {
                calendar.push(<div className={`rdatez-day-spacer weekday-${(day.day() + dayOffset) % 7}`} key={`${day.format('MY')}-spacer`} />)
            }

            const dayClasses = classnames(`rdatez-day weekday-${(day.day() + dayOffset) % 7} ${day.format('M-YYYY')}-${i}`, {
                'selected-day': this.selectedDate(day.format(dateFormat)),
                'past-day': this.isPast(day.format(dateFormat)),
                'before-start': this.isBeforeStartDate(day.format(dateFormat)),
                'after-end': this.isAfterEndDate(day.format(dateFormat)),
                today: moment().startOf('day').diff(day, 'days') === 0
            })

            calendar.push(<button type="button" className={dayClasses} key={`${day.format('DMY')}-${i}`} onClick={(e) => this.clickDay(e, dayDate)} tabIndex="-1">{i}</button>)
        }

        return <section className={`rdatez-month-days starts-on-${(startsOn + dayOffset) % 7}`}>{calendar}</section>
    }

    render() {
        const {
            input, className, position, disable, inputClassName, wrapperStyle, inputStyle, displayCalendars, highlightWeekends, allowPast,
            allowFuture, startDate, endDate, isRedux, placeholder, value, dateFormat, disableInputIcon, yearJump, yearButton
        } = this.props

        const {
            datePickerOpen, datePickerInputHeight, disabledToday, yearJumpOpen, monthSelectOpen
        } = this.state

        const rdatezClass = classnames('rdatez', className, {
            'rdatez-centered': position === 'center',
            'rdatez-right': position === 'right',
            'rdatez-disabled': disable
        })

        const rdatezInputClass = classnames(inputClassName)
        const rdatezInputStyle = inputStyle

        const pickerClass = classnames('rdatez-picker', {
            'multi-cal': (displayCalendars > 1),
            'no-cal': (displayCalendars === 0),
            'highlight-weekends': highlightWeekends,
            'disallow-past': !allowPast,
            'disallow-future': !allowFuture,
            'disallow-before-start': startDate,
            'disallow-after-end': endDate
        })

        return (
            <div style={wrapperStyle} className={rdatezClass} ref={(element) => { this.rdatez = element }}>
                {!isRedux
                    ? (
                        <input
                            style={rdatezInputStyle}
                            className={rdatezInputClass}
                            onClick={this.openPicker}
                            placeholder={placeholder}
                            onFocus={this.openPicker}
                            disabled={disable}
                            readOnly
                            value={value && moment(value, 'YYYY-MM-DD').format(dateFormat)}
                            ref={(element) => {
                                this.dateInput = element
                            }}
                        />
                    )
                    : (
                        <input
                            style={rdatezInputStyle}
                            className={rdatezInputClass}
                            onClick={this.openPicker}
                            placeholder={placeholder}
                            onFocus={this.openPicker}
                            disabled={disable}
                            readOnly
                            value={input.value && moment(input.value, 'YYYY-MM-DD').format(dateFormat)}
                            ref={(element) => {
                                this.dateInput = element
                            }}
                        />
                    )}
                {(!datePickerOpen && !disableInputIcon) && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" onClick={this.openPicker} className="cal-icon">
                        <g id="budicon-calendar">
                            <path d="M24,2H19V.5a.5.5,0,0,0-1,0V2H7V.5a.5.5,0,0,0-1,0V2H1A1,1,0,0,0,0,3V23a1,1,0,0,0,1,1H24a1,1,0,0,0,1-1V3A1,1,0,0,0,24,2Zm0,21H1V8H24ZM24,7H1V3H24Z" />
                        </g>
                    </svg>
                )}
                {datePickerOpen && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" onClick={this.clearSelected} className="cal-icon">
                        <g id="budicon-cross-ui">
                            <path d="M18.8535,17.1465a.5.5,0,0,1-.707.707L12.5,12.207,6.8535,17.8535a.5.5,0,0,1-.707-.707L11.793,11.5,6.1465,5.8535a.5.5,0,1,1,.707-.707L12.5,10.793l5.6465-5.6465a.5.5,0,1,1,.707.707L13.207,11.5Z" />
                        </g>
                    </svg>
                )}
                {datePickerOpen && (
                    <div className={pickerClass} style={{ top: datePickerInputHeight }}>
                        <div>
                            <header className="rdatez-header">
                                <button type="button" className=" rdatez-mobile-close" onClick={this.clearSelected}>
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
                                {yearJump && (
                                    <button type="button" className="rdatez-btn rdatez-btn-year" onClick={this.toggleYearJump}>
                                        {yearButton || (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                                <path d="M12.8535,6.8535a.5.5,0,0,0,0-.707l-6-6a.5.5,0,0,0-.707,0l-6,6a.5.5,0,0,0,.707.707L6,1.707V20.5a.5.5,0,0,0,1,0V1.707l5.1465,5.1465A.5.5,0,0,0,12.8535,6.8535Z" />
                                                <path d="M24.8535,18.1465a.5.5,0,0,0-.707,0L19,23.293V4.5a.5.5,0,0,0-1,0V23.293l-5.1465-5.1465a.5.5,0,0,0-.707.707l6,6a.5.5,0,0,0,.707,0l6-6A.5.5,0,0,0,24.8535,18.1465Z" />
                                            </svg>
                                        )}
                                    </button>
                                )}
                                {!disabledToday && (
                                    <button type="button" className="rdatez-btn rdatez-btn-today" onClick={(e) => this.jumpToToday(e)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                            <path d="M24,3H19V1.5a.5.5,0,0,0-1,0V3H7V1.5a.5.5,0,0,0-1,0V3H1A1,1,0,0,0,0,4V24a1,1,0,0,0,1,1H24a1,1,0,0,0,1-1V4A1,1,0,0,0,24,3Zm0,21H1V9H24ZM24,8H1V4H24Z" />
                                            <path d="M12.5,22A5.5,5.5,0,1,0,7,16.5,5.5,5.5,0,0,0,12.5,22Zm0-10A4.5,4.5,0,1,1,8,16.5,4.5,4.5,0,0,1,12.5,12Z" />
                                            <path d="M14.2,18.9a.5.5,0,1,0,.6-.8L13,16.75V14.5a.5.5,0,0,0-1,0V17a.5.5,0,0,0,.2.4Z" />
                                        </svg>
                                    </button>
                                )}
                            </header>
                            <div className="rdatez-calendar">
                                {this.initialiseCalendar()}
                            </div>
                            {yearJumpOpen && (
                                <section className="rdatez-calendar-year">
                                    {this.initialiseYearCalendar()}
                                </section>
                            )}
                            {monthSelectOpen && (
                                <section className="rdatez-calendar-month">
                                    {this.initialiseMonthCalendar()}
                                </section>
                            )}
                        </div>
                    </div>
                )}
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
    firstDayOfWeek: 'Mo',
    currentMonthYearFormat: 'MMMM YYYY',
}

ReactDatez.propTypes = {
    input: PropTypes.object,
    wrapperStyle: PropTypes.object,
    disable: PropTypes.bool,
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
    currentMonthYearFormat: PropTypes.string,
}

export default ReactDatez
