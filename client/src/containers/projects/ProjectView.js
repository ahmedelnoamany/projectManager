import React, { Component } from 'react';
import PriorityBar from '../../components/PriorityBar';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import userProjectQuery from '../../queries/userProjects';

import CheckIcon from '../../assets/Check.svg';
import BellIcon from '../../assets/Bell.svg';
import ListULIcon from '../../assets/ListUL.svg';
import PlusIcon from '../../assets/Plus.svg';
import ExpandedProject from '../../components/ExpandedProject';

class ProjectView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      toggleExpandedProject: false
    }
  }
  renderSelectedProject() {
    const { loading, user } = this.props.data;
    
    let project = user ? user.projects[this.state.selected] : null;

    if (!project || loading) {
      return (
        <div className="project-view__selected-project">
          <h3 
            className="project-view__selected-project--title-text"
            style={{height: '100%', marginTop: '30%', textAlign: 'center'}}
          
          >You don't have any current projects!</h3>
        </div>
      )
    } else {
      let dueDateEpoch = project.dueDate;
      let projectDueDate = new Date(0);
      projectDueDate.setUTCSeconds(dueDateEpoch);
      projectDueDate = projectDueDate.toString().split(' ');
      let finalDate = projectDueDate.map((item, index) => {
        return index < 4 ? item + ' ' : ''
      });
      return (
        <div className="project-view__selected-project">
          <h3 className="project-view__selected-project--title-text">{project.title}</h3>
          <div className="project-view__selected-project--desc-container">
            <span className="project-view__selected-project--desc-container--main-text">{project.client}</span>
            <span className="project-view__selected-project--desc-container--main-text">
              {project.dueDate ? finalDate : 'No dueDate'}
              {/* <span className="project-view__selected-project--desc-container--secondary-text">{`${project.due} days`}</span> */}
            </span>
            <div style={{width: '66%'}}>
              <PriorityBar priority={project.priority} project={project.title} disable={false}/>
            </div>
          </div>
          <div className="project-view__selected-project--graph-container">
            Pie chart section
          </div>
          <div className="project-view__selected-project--task-container">
            <div className="project-view__selected-project--task-container--tasks">
              <span>
                <CheckIcon className="project-view__selected-project--task-container--tasks--icon"/>
                10
              </span>
              <span>
                <BellIcon className="project-view__selected-project--task-container--tasks--icon red"/>
                14
              </span>
              <span>
                <ListULIcon  className="project-view__selected-project--task-container--tasks--icon"/>
                20
                </span>
            </div>
            <button 
              className="project-view__selected-project--task-container--expand-btn"
              onClick={ () => this.setState({ toggleExpandedProject: true })}
            >Expand</button>
          </div>
        </div>
      )
    }
  }
  mapProjectThumbnails() {
    const { loading, user } = this.props.data;
    let projects = user ? user.projects : null;

    if (loading || !projects) {
      return (
        <div className="project-view__preview-projects">
          <div className="project-view__preview-projects--card project-view__preview-projects--card--selected">
              <div className="project-view__preview-projects--new u-centered-div">
                <Link to="/newProject">
                  <PlusIcon height={'10rem'} width={'10rem'} fill="white" />
                </Link>
              </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="project-view__preview-projects">
          {projects.map((project, index) => {
            return (
              <div 
                className={index === this.state.selected ? "project-view__preview-projects--card project-view__preview-projects--card--selected" : "project-view__preview-projects--card project-view__preview-projects--card--normal"}
                onClick={() => this.setState({selected: index})}
              >
                <h4 className="project-view__selected-project--desc-container--main-text">{project.title}</h4>
                <div
                  style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '100%', paddingLeft: '1rem', paddingRight: '1rem', alignItems: 'end'}}
                >
                  <div style={{width: '80%', height: '1.5rem'}}>
                    <PriorityBar priority={project.priority} disable={true} project={project.title} />
                  </div>
                  <span className="project-view__selected-project--desc-container--secondary-text">{`${project.due} days`}</span>
                </div>
              </div>
              
            )
          })}
          <div className="project-view__preview-projects--card project-view__preview-projects--card--selected">
              <div className="project-view__preview-projects--new u-centered-div">
                <Link to="/newProject">
                  <PlusIcon height={'10rem'} width={'10rem'} fill="white" />
                </Link>
              </div>
          </div>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="project-view">
        {(this.state.toggleExpandedProject) && 
          <ExpandedProject />
        }
        {(!this.state.toggleExpandedProject) && this.renderSelectedProject()}
        {(!this.state.toggleExpandedProject) && this.mapProjectThumbnails()}
      </div>
    )
  }
}
export default graphql(userProjectQuery)(ProjectView);