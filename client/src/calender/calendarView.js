import React, { Component } from 'react';
import moment from 'moment';

export default class CalendarView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      momentContext: moment(),
      today: moment(),
      showMonthPopup: false,
      showYearPopup: false,
      currentMode: 2,
    };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  handleClickOutside(event) {
    if(this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ showMonthPopup: false });
    }
  }

  weekdays = moment.weekdays(); //Sunday -> Saturday
  weekdaysShort = moment.weekdaysShort(); //Sun -> Sat
  months = moment.months();

  year = () => {
    return this.state.momentContext.format("Y");
  }

  month = () => {
    return this.state.momentContext.format("MMMM");
  }

  daysInMonth = () => {
    return this.state.momentContext.daysInMonth();
  }

  currentDate = () => {
    return this.state.momentContext.get("date");
  }

  currentDay = () => {
    return this.state.momentContext.format("D");
  }

  firstDayOfMonth = () => {
    let dateContext = this.state.momentContext;
    let firstDay = moment(dateContext).startOf('month').format('d');
    return firstDay;
  }

  renderWeekdays = () => {
    let weekdays = this.weekdaysShort.map((day, index) => {
      return (
        <span key={index}>{day}</span>
      )
    })
    return weekdays;
  }

  calculateEmptyDays = () => {
    let emptyElements = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      emptyElements.push(<div className="calendar-view__month-day calendar-view__month-day--inactive">
        &nbsp;
      </div>);
    }
    return emptyElements;
  }

  renderDays = () => {
    let daysInMonth = [];
    for (let i = 0; i < this.daysInMonth(); i++) {
      let today = i === parseInt(this.currentDay()) ? true : false;
      let className = today? "calendar-view__month-day calendar-view__month-day--active" : "calendar-view__month-day calendar-view__month-day--normal";
      let labelClass = today? "calendar-view__month-day--date calendar-view__month-day--date-today" : "calendar-view__month-day--date calendar-view__month-day--date-current";
      
      daysInMonth.push(
        <div key={i} className={className}>
          <span 
          className={labelClass}
          style={{backgroundColor: i === 0 ? 'white' : 'transparent'}}
          >{i === 0 ? this.month().substring(0, 3) + ' ' + (i + 1) : i + 1}</span>
        </div>
      );
    }
    
    var monthArray = [...this.calculateEmptyDays(), ...daysInMonth];
    let rows = [];
    let cells = [];
    
    monthArray.forEach((row, i) => {
      if ((i % 7) !== 0) {
        cells.push(row);
      } else {
        let insertRow = cells.slice();
        rows.push(insertRow);
        cells = [];
        cells.push(row);
      }
      if ( i === monthArray.length - 1) {
        let insertRow = cells.slice();
        rows.push(insertRow);
      }
    });

    let month = rows.map((day, i) => day);
    return month;
  }
  setMonth = (month) => {
    let monthIndex = this.months.indexOf(month);
    let dateContext = Object.assign({}, this.state.momentContext);
    dateContext = moment(dateContext).set("month", monthIndex);
    this.setState({
        momentContext: dateContext
    });
}

  renderNavButtons() {
    return (
      <div className="calendar-navigation--container">
        <a 
          className={this.state.currentMode === 0 ? "calendar-navigation--option-active" : "calendar-navigation--option"}
          onClick={() => this.setState({ currentMode: 0 })}
        >
          Day
        </a>
        <a 
          className={this.state.currentMode === 1 ? "calendar-navigation--option-active" : "calendar-navigation--option"}
          onClick={() => this.setState({ currentMode: 1 })}
        >
          Week
        </a>
        <a 
          className={this.state.currentMode === 2 ? "calendar-navigation--option-active" : "calendar-navigation--option"}
          onClick={() => this.setState({ currentMode: 2 })}
        >
          Month
        </a>
        <a 
          className={this.state.currentMode === 3 ? "calendar-navigation--option-active" : "calendar-navigation--option"}
          onClick={() => this.setState({ currentMode: 3 })}
        >
          Year
        </a>
      </div>
    )
  }
  render() {
    let monthList = moment.months();
    return (
      <div className="calendar-view">
        <div className="calendar-view--header">
          <a className="heading-1 calendar-view--heading"
            onClick={() => this.setState({ showMonthPopup: !this.state.showMonthPopup })}
          >
            {this.month() + ' ' + this.year()}
            {this.state.showMonthPopup &&
              <div className="calendar-view__month-popup" ref={this.setWrapperRef}>
                {monthList.map((month) => {
                  return <a onClick={() => this.setMonth(month)}>{month}</a>
                })}
              </div>
            }
          </a>
          
          {this.renderNavButtons()}
        </div>
        <div className="calendar-view__day-label-container">
          {this.renderWeekdays()}
        </div>
        <div className="calendar-view__month-container">
          {this.renderDays()}
        </div>
      </div>
    )
  }
}