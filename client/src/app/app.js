import React, { Component } from 'react';
import Header from '../base/Header';
import WeekView from '../calender/weekView';

export default class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <WeekView />
      </div>
    )
  }
}