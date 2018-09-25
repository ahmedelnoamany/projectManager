import React, { Component } from 'react';
import PriorityBar from '../../components/PriorityBar';


export default class ProjectView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {title: 'Project 1', priority: 1, due: 16},
        {title: 'Project 2', priority: 1, due: 20},
        {title: 'Project 3', priority: 2, due: 22},
        {title: 'Sample Selected Project', priority: 2, due: 50},
        {title: 'Project 5', priority: 3, due: 36},
        {title: 'Project 6', priority: 3, due: 47},
      ],
      selected: 3
    }
  }
  renderSelectedProject() {
    let project = this.state.projects[this.state.selected];
    return (
      <div className="project-view__selected-project">
        <h3 className="project-view__selected-project--title-text">{project.title}</h3>
        <div className="project-view__selected-project--desc-container">
          <span className="project-view__selected-project--desc-container--main-text">Client</span>
          <span className="project-view__selected-project--desc-container--main-text">
            05/19/2019
            <span className="project-view__selected-project--desc-container--secondary-text">{`${project.due} days`}</span>
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
              <svg className="project-view__selected-project--task-container--tasks--icon">
                <use href="/symbol-defs.svg#icon-check"></use>
              </svg>
              10
            </span>
            <span>
              <svg className="project-view__selected-project--task-container--tasks--icon red">
                <use href="../../assets/symbol-defs.svg#icon-bell"></use>
              </svg>
              14
            </span>
            <span>
              <svg className="project-view__selected-project--task-container--tasks--icon">
                <use href="../../assets/symbol-defs.svg#icon-list-ul"></use>
              </svg>
              20
              </span>
          </div>
          <button className="project-view__selected-project--task-container--expand-btn">Expand</button>
        </div>
      </div>
    )
  }
  mapProjectThumbnails() {
    return (
      <div className="project-view__preview-projects">
        {this.state.projects.map((project, index) => {
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
      </div>
    )
  }
  render() {
    return (
      <div className="project-view">
        {this.renderSelectedProject()}
        {this.mapProjectThumbnails()}
      </div>
    )
  }
}