import React, { Component } from 'react';

export default class CardDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      active: this.props.active,
      todos: this.props.dayTodos,
      toggleNew: false,
      newDescription: '',
      newCategory: 'none',
      expand: false,
    }

  }
  createTodo() {
    let { todos } = this.state;
    let newTodoList = todos;
    let newTodo = {
      complete: false,
      description: this.state.newDescription,
      category: this.state.newCategory
    };
    newTodoList.push(newTodo);
    this.setState({ todos: newTodoList, toggleNew: false});
  }
  render() {
    return (
      <div className={this.state.title === this.state.active ? this.state.expand ? "day-card day-card--active day-card--expand" : "day-card day-card--active" : this.state.expand ? "day-card day-card--normal day-card--expand": "day-card day-card--normal"}>
        {(!this.state.toggleNew) &&
          <div className="day-card__options">
            <a
              className="day-card__options--magnify"          
              onClick={() => this.setState({ expand: !this.state.expand })}
            >
              <svg className={this.state.title === this.state.active ? "day-card__options--icon day-card__options--icon--dark" : "day-card__options--icon day-card__options--icon--white"}>
                <use href="../assets/symbol-defs.svg#icon-search"></use>
              </svg>
            </a>
            <a 
              className={this.state.title === this.state.active ? "day-card__options--new day-card__options--new--light" : "day-card__options--new day-card__options--new--white"}
              onClick={() => this.setState({ toggleNew: true })}
            >
              <svg className={this.state.title === this.state.active ? "day-card__options--icon day-card__options--icon--dark" : "day-card__options--icon day-card__options--icon--white"}>
                <use href="../assets/symbol-defs.svg#icon-plus"></use>
              </svg>
            </a>
          </div>
        }
        {(!this.state.toggleNew) &&
          <h3 
          className={this.state.title === this.state.active ? "heading-3 heading-3--dark u-margin-bottom-small" : "heading-3 heading-3--light u-margin-bottom-small"}
          >
            {this.state.title}
          </h3>
        }
        
        {(this.state.toggleNew) && 
          <div className="day-card__new">
            <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between', alignItems: 'center', width: '90%', height: '25%'}}>
              <span className="heading-3 heading-3--dark">New Todo</span>
              <button className="day-card__new--close-btn" onClick={() => this.setState({ toggleNew: false })}>X</button>
            </div>
            <textarea 
              className="day-card__new--text-input day-card__new--text-input--desc"
              placeholder="To do..."
              name="Todo"
              cols="40"
              rows="5"
              maxLength="150"
              onChange={(event) => this.setState({ newDescription: event.target.value })}
            ></textarea>
            <input
              type="text"
              className="day-card__new--text-input day-card__new--text-input--cat"
              placeholder="Category"
              onChange={(event) => this.setState({ newCategory: event.target.value })}
            />
            <button 
              className="day-card__new--create-btn"
              onClick={() => this.createTodo()}
            >
              Create
            </button>
          </div>
        }
        {(!this.state.toggleNew) &&
          <ul style={{listStyle: 'none', width: '100%', overflow: 'hidden', overflowY: 'scroll', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
            {this.state.todos.map((todo) => {
                return (
                  <li >
                    <div className="day-card__todo">
                      <label className="tick-box">
                        <input type="checkbox" onClick={() => console.log('pressed')} defaultChecked={todo.complete}/>
                        <span className="tick-box__checkmark"></span>
                      </label>               
                      <p className="day-card__description">
                      {todo.description}
                      </p>
                    </div>
                  </li>
                )
            })}
          </ul>
          }
      </div>
    )
  }
}