import React, { Component } from 'react';

export default class NotificationManager extends Component { 
  render() {
    return (
      <div className="notification-manager">
        <svg className="header__header-icon">
          <use href="../assets/symbol-defs.svg#icon-bell"></use>
        </svg>
      </div>
    )
  }
}