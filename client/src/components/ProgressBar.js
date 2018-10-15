import React, { Component } from 'react';

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    }
  }
  componentDidMount() {
    this.props.progress ? this.setState({ progress: this.props.progress }) : 0;
  }
  setProgressLevel(progress) {

  }
  render() {
    return ( 
      <div
        style={{
          outline: '2px solid #C5D5EA',
          width: '30rem',
          backgroundColor: '#EAF0F8'
        }}
      >
        <span
          style={{
            display: 'block',
            left: 0,
            width:`${(30 / 100) * this.state.progress}rem`,
            backgroundColor: '#A8C9F5'
          }}
        >&nbsp;</span>
      </div>

    )
  }
}