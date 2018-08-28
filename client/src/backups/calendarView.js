import React, { Component } from 'react';

export default class CalendarView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthName: 'August',
      year: 2018,
      today: 2,
      monthLength: 31,
      monthData: [
        {
          day: 1,
          dayName: 'Wednesday',
          tasks: [
            {name: 'Project 1', color: '#86F8B6'},
            {name: 'Project 2', color: '#F8F886'},
            {name: 'Project 3', color: '#ADF886'},
            {name: 'Project 4', color: '#86F8DE'},
          ]
        },
        {
          day: 2,
          dayName: 'Thursday',
          tasks: [
            {name: 'Project 1', color: '#86F8B6'},
            {name: 'Project 2', color: '#F8F886'},
            {name: 'Project 3', color: '#ADF886'},
          ]
        },
        {
          day: 3,
          dayName: 'Friday',
          tasks: [
            {name: 'Project 1', color: '#86F8B6'},
            {name: 'Project 3', color: '#F8F886'},
          ]
        },
        {
          day: 4,
          dayName: 'Saturday',
          tasks: [
            {name: 'Project 1', color: '#86F8B6'},
          ]
        },
        {
          day: 5,
          dayName: 'Sunday',
          tasks: [
            {name: 'Project 1', color: '#86F8B6'},
          ]
        },
        {
          day: 6,
          dayName: 'Monday',
          tasks: [
            {name: 'Project 1', color: '#86F8B6'},
          ]
        },
        {
          day: 7,
          dayName: 'Tuesday',
          tasks: [
            {name: 'Project 8', color: ''},
          ]
        },
      ]
    }
  } // 3 - 31 - 1
  generateMonthGrid() {
    let { monthLength, today, monthData } = this.state;
    let month = [];
    let startPoint = this.getStartPoint();
    for (let i = 1; i <= 42; i++) {

      month.push(
      <div 
        className={ 
          ((i < startPoint) || (i > monthLength + startPoint - 1) ) 
          ? 'calendar-view__month-day--inactive' : i === today + startPoint -1 
          ? 'calendar-view__month-day--active' : 'calendar-view__month-day--normal'
        }
      >
        <div
          className={
            this.isCurrentMonth(i, startPoint, monthLength) 
            ? (i - startPoint + 1) === today 
            ? "calendar-view__month-day--date calendar-view__month-day--date-today" : "calendar-view__month-day--date calendar-view__month-day--date-current" 
            : " calendar-view__month-day--date calendar-view__month-day--date-other"
          }
        >
          { 
            this.isCurrentMonth(i, startPoint, monthLength) 
            ? i - startPoint + 1 : this.isPreviousMonth(i, startPoint)
            ? 32 - startPoint + i : this.isNextMonth(i, startPoint, monthLength)
            ? i - monthLength - startPoint +1 : '' 
          }
        </div>
        <div className="calendar-view__task-container">
          {monthData[i - startPoint] ? monthData[i - startPoint].tasks.map(task => {
              return (
                <span 
                  className={
                    this.taskExistsYesterday(task.name ,(i - startPoint)).exists
                    ? "calendar-view__task calendar-view__task--connected" : "calendar-view__task"
                  }
                  style={{
                    backgroundColor: task.color
                  }}
                >
                  {task.name}
                </span>
            )
          }) : ''}
        </div>
      </div>
    );
    }
    return month;
  }
  taskExistsYesterday(currentTask, currentTaskPosition) {
    let { monthData } = this.state;
    let yesterday = monthData[currentTaskPosition - 1] ? monthData[currentTaskPosition - 1] : null;
    if (yesterday === null) {
      return {exists: false};
    }
    for (let i = 0; i < yesterday.tasks.length; i ++) {
      if (yesterday.tasks[i].name === currentTask) {
        return {exists: true , i};
      }
    }
    return {exists: false};
  }
  getStartPoint() {
    let { monthData } = this.state;
    //sun: 1, mon: 2, tue: 3, wed: 4, thur: 5, fri: 6, sat: 7
    let startDay = monthData[0].dayName.toLowerCase();
    switch(startDay) {
      case 'sunday':
        return 1;
      case 'monday':
        return 2;
      case 'tuesday':
        return 3;
      case 'wednesday':
        return 4;
      case 'thursday':
        return 5;
      case 'friday':
        return 6;
      case 'saturday':
        return 7;
    }
  }
  isCurrentMonth(currentVal, monthStart, monthLength) {
    if (currentVal >= monthStart && currentVal < monthLength + monthStart) {
      return true;
    }
    return false;
  }
  isPreviousMonth(currentVal, monthStart) {
    if (currentVal < monthStart) {
      return true;
    }
    return false;
  }
  isNextMonth(currentVal , monthStart, monthLength) {
    if (currentVal >= monthLength + monthStart) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="calendar-view">
        <h1 className="heading-1 calendar-view--heading">{`${this.state.monthName} ${this.state.year}`}</h1>

        <div className="calendar-view__month-container">
          {this.generateMonthGrid()}
        </div>
      </div>
    )
  }
}