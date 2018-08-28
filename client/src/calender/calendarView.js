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
    };
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

  render() {
    return (
      <div className="calendar-view">
        <h1 className="heading-1 calendar-view--heading">{this.month() + ' ' + this.year()}</h1>
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