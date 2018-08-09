import React, { Component } from 'react';

import CardDay from '../components/cardDay';

export default class WeekView extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      active: 'Friday',
      days: [
        {name: 'Monday', todos: [
          {complete: false, description: 'Do some work today', category: 'none'},
          {complete: true, description: 'Make this card', category: 'none'},
          {complete: false, description: 'Eat some food', category: 'none'},
        ]},
        {name: 'Tuesday', todos: [
          {complete: true, description: 'Do some work today', category: 'none'},
          {complete: true, description: 'Make this card', category: 'none'},
          {complete: false, description: 'Eat some food', category: 'none'},
        ]},
        {name: 'Wednesday', todos: [
          {complete: false, description: 'Do some work today', category: 'none'},
          {complete: false, description: 'Make this card', category: 'none'},
          {complete: false, description: 'Eat some food', category: 'none'},
        ]},
        {name: 'Thursday', todos: [
          {complete: false, description: 'Do some work today', category: 'none'},
          {complete: false, description: 'Make this card', category: 'none'},
          {complete: true, description: 'Eat some food', category: 'none'},
        ]},
        {name: 'Friday', todos: [
          {complete: true, description: 'Do some work today', category: 'none'},
          {complete: true, description: 'Make this card', category: 'none'},
          {complete: true, description: 'Eat some food', category: 'none'},
        ]}
      ]
    }
  }
  render() {
    return (
      <div
        className="week-view"
      >
        <div className="week-view__heading-container">
          <h1 className="heading-1">This Week</h1>
        </div>
        <div
          className="week-view__todos-container"
        >
          {this.state.days.map(day => {
            return (
              <CardDay active={this.state.active} title={day.name} dayTodos={day.todos}/>
            )
          })}
        </div>
      </div>
      
    )
  }
}