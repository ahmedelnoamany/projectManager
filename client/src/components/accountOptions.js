import React, { Component } from 'react';

export default class AccountOptions extends Component {
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
      <div className="account-options">
        <a onClick={() => this.setState({ toggled: !this.state.toggled })} className="header__header-link">
          <svg className="header__header-icon">
            <use href="../assets/symbol-defs.svg#icon-user"></use>
          </svg>
        </a>
        {(this.state.toggled) &&
          <div className="account-options__main-container" ref={this.setWrapperRef}>
            <div className="menu-card">

            </div>
          </div>
        }
      </div>
    )
  }
}