import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import PriorityBar from '../../components/PriorityBar';
import ProgressBar from '../../components/ProgressBar';

export default class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: '',
      projectClient: '',
      projectCategory: [],
      projectUsers: [],
      projectPriority: 0,
      projectBilling: false,
      projectQuote: false
    }
  }
  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form 
        className="form__new-project"
        onSubmit={this.onSubmit.bind(this)}
      >
        <div className="form__new-project--left-pane">
            <div className="form__new-project__input-group">
              <label>
                <span className="u-margin-bottom-small">Name</span>
                <input className="input u-margin-bottom-small" />
              </label>
             
            </div>
            <div className="form__new-project__input-group">
              <label>
                <span className="u-margin-bottom-small">Client</span>
                <input className="input u-margin-bottom-small"/>
              </label>
            </div>
            <div className="form__new-project__input-group">
              <label>
                <span className="u-margin-bottom-small">Category</span>
                <Dropdown className="input u-margin-bottom-small"/>
              </label>
              <label>
                <span className="u-margin-bottom-small">Users</span>
                <Dropdown className="input u-margin-bottom-small"/>
              </label>
            </div>
        </div>
        <div className="form__new-project--center-pane">
          <div style={{width: '80%', margin: '2rem auto'}}>
            <label>
              <span
                style={{ 
                  fontSize: '1.4rem',
                  fontWeight: 300,
                  fontFamily: 'Arial',
                  color: '#6987C9',
                }}
              >Priority</span>
              <PriorityBar />
            </label>
          </div>
          <div className="form__new-project--switch-container">
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <span>Billing</span>
              <label className="slide-button__switch">
                <input type="checkbox" />
                <span className="slide-button__slider"></span>
                Billing
              </label>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <span>Generate Quote</span>
              <label className="slide-button__switch">
                <input type="checkbox" />
                <span className="slide-button__slider"></span>
                Generate Quote
              </label>
            </div>
          </div>
          <div className="form__new-project--nav-options">
            <div>
              LEFT NAV----      
            </div>
            <div>
              <ProgressBar progress={25} />
            </div>
            <div>
                   ----RIGHT NAV
            </div>
          </div>
        </div>
        <div className="form__new-project--right-pane">
          <div className="form__new-project--summary">
            <h3 className="heading-3--dark">Project Details</h3>
            <div className="form__new-project--summary--seperator">&nbsp;</div>
          </div>
        </div>
      </form>
    )
  }
}