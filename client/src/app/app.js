import React, { Component } from 'react';
import Header from '../base/Header';
import WeekView from '../calender/weekView';
import Separator from '../components/separator';
import ProjectView from '../projects/projectView';

export default class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <WeekView />
        <Separator title="projects"/>
        <ProjectView />
      </div>
    )
  }
}