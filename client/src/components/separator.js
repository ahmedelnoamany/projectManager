import React, { Component } from 'react';

export default class Separator extends Component {
  render() {
    return (
      <div className="seperator">
        <div className="seperator__heading-container">
          <div className="seperator__heading-cut-line"></div>
          <h1 className="seperator__heading-text">{this.props.title.toUpperCase()}</h1>
        </div>
      </div>
    )
  }
}