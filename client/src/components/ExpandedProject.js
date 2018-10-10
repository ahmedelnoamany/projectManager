import React, { Component } from 'react';
import PriorityBar from '../components/PriorityBar';

export default class ExpandedProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummy: false,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 10);
  }  
  handleCloseProject() {
    this.props.onCloseExpandedView();
  }
  render() {
    const { currentProject } = this.props;
    console.log(this.props);
    return (
      <div className="expanded-project">
      <div className="expanded-project__project-overview">
        <h3 className="project-view__selected-project--title-text">{currentProject.title}</h3>
        <div className="project-view__selected-project--desc-container">
          <span className="project-view__selected-project--desc-container--main-text">{currentProject.client}</span>
          <div style={{width: '60%'}}>
            <PriorityBar priority={currentProject.priority} project={currentProject.title} disable={false}/>
          </div>
        </div>
        <div className="project-view__selected-project--graph-container project-view__selected-project--graph-container--small">
          Pie chart section
        </div>
      </div>
      <div className="expanded-project__project-chat">Project Chat</div>
      <div className="expanded-project__project-sprints">Project Sprints</div>
      <span onClick={() => this.handleCloseProject()} className="expanded-project__project-exit">
        X
      </span>
      </div>
    )
  }
}