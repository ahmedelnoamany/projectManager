import React, { Component } from 'react';
import BellIcon from '../assets/Bell.svg';

export default class NotificationManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
    }
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ toggled: false })
    }
  }
  render() {
    return (
      <div className="notification-manager">
        <a onClick={() => this.setState({ toggled: true })} className="header__header-link">
          <BellIcon className="header__header-icon"/>
        </a>
        {(this.state.toggled) &&
          <div className="notification-manager__main-container" ref={this.setWrapperRef}>
            <div className="menu-card">

            </div>
          </div>
        }
      </div>
    )
  }
}