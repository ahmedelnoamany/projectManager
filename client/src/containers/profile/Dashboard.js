import React, { Component } from 'react';
import WeekView from '../calendar/WeekView';
import Seperator from '../../components/Seperator';
import ProjectView from '../projects/ProjectView';
import NavBar from '../../components/NavBar';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideComponents: false
    }
  }
  hideComponents() {
    this.setState({ hideComponents: !this.state.hideComponents })
  }
  render() {
    console.log(this.state)
    return (
      <div style={{position: 'relative'}}>
        <WeekView />
        <Seperator title="projects" />
        <ProjectView onExpandProject={() => this.hideComponents()}/>
      </div>
    );
  }
}

export default Dashboard;