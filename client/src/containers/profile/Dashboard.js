import React, { Component } from 'react';
import WeekView from '../calendar/WeekView';
import Seperator from '../../components/Seperator';
import ProjectView from '../projects/ProjectView';
import NavBar from '../../components/NavBar';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <WeekView />
        <Seperator title="projects" />
        <ProjectView />
      </div>
    );
  }
}

export default Dashboard;