import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import PriorityBar from '../../components/PriorityBar';

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

  render() {
    return (
      <form className="form__new-project">
        <div className="form__new-project--left-pane">
            {/* LEFT */}
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
          <div style={{width: '80%', margin: '1rem auto'}}>
            <label>
              <span>Priority</span>
              <PriorityBar />
            </label>
          </div>
          <div>
            <label>
              <span>Billing</span>
              TOGGLE
            </label>
            <label>
              <span>Generate Quote</span>
              TOGGLE
            </label>
          </div>
          <div className="form__new-project--nav-options">
            <div>
              LEFT NAV
            </div>
            <div>
              CENTER NAV
            </div>
            <div>
              RIGHT NAV
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