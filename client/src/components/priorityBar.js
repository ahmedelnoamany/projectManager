import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6


export default class PriorityBar extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      priority: this.props.priority,
      disable: this.props.disable,
      title: this.props.title
    }
    
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.priority !== nextProps.priority || this.state.disable !== nextProps.disable || this.state.title !== nextProps.title) {
      this.setState({ priority: nextProps.priority, disable: nextProps.disable, title: nextProps.title });
    }
  }
  render() {
    return (
      <div className="priority-bar">
        <button
          className={this.state.priority < 1 ? "priority-bar__low" : "priority-bar__low priority-bar__low--active" }
          onClick={() => this.setState({ priority: 1 })}
          disabled={this.props.disable}
        >
          {(!this.state.disable) && '\u2022'}
        </button>
        <button 
          className={this.state.priority < 2 ? "priority-bar__medium" : "priority-bar__medium priority-bar__medium--active" }
          onClick={() => this.setState({ priority: 2 })}
          disabled={this.props.disable}
        >
          {(!this.state.disable) && '\u2022'}
        </button>
        <button 
          className={this.state.priority < 3 ? "priority-bar__high" : "priority-bar__high priority-bar__high--active" }
          onClick={() => this.setState({ priority: 3 })}
          disabled={this.props.disable}
        >
          {(!this.state.disable) && '\u2022'}
        </button>
        {(!this.state.disable) &&
          <div 
            className={
              this.state.priority === 1 ? "priority-bar__marker priority-bar__marker--low" 
              : this.state.priority === 2 ? "priority-bar__marker priority-bar__marker--medium" 
              : this.state.priority === 3 ? "priority-bar__marker priority-bar__marker--high"  
              : "priority-bar__marker"
            }
          >
          </div>
        }
        

        
      </div>
    )
  }
}