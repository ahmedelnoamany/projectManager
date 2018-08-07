import React, { Component } from 'react';


export default class CardDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 'Monday',
      todos: [
        {complete: false, description: 'Do some work today'},
        {complete: true, description: 'Make this card'},
        {complete: false, description: 'Eat some food'},
      ]
    }
  }
  render() {
    return (
      <div className="day-card day-card--active">
        <div className="day-card__options">
          <a 
            className="day-card__options--magnify"          
            onClick={() => console.log('Magnifier clicked')}
          >
            <svg className="day-card__options--icon day-card__options--icon--dark">
              <use href="../assets/symbol-defs.svg#icon-search"></use>
            </svg>
          </a>
          <a 
            className="day-card__options--new day-card__options--new--light"
            onClick={() => console.log('New todo clicked')}
          >
            <svg className="day-card__options--icon day-card__options--icon--dark">
              <use href="../assets/symbol-defs.svg#icon-plus"></use>
            </svg>
          </a>
        </div>
        <h3 className="heading-3 heading-3--dark">{this.state.day}</h3>
        {this.state.todos.map((todo) => {
          return (
            <div className="day-card__todo">
              <label className="tick-box">
                <input type="checkbox" onClick={() => console.log('pressed')}/>
                <span className="tick-box__checkmark"></span>
              </label>               
              <p className="day-card__description">
              {todo.description}
              </p>
            </div>
          )
        })}
      </div>
    )
  }
}