import React, { Component } from 'react';

export default class AccountOptions extends Component {
  render() {
    return (
      <div className="account-options">
        <svg className="header__header-icon">
          <use href="../assets/symbol-defs.svg#icon-user"></use>
        </svg>
      </div>
    )
  }
}