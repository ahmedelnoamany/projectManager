import React, { Component } from 'react';
import { hashHistory, Link } from 'react-router';

class NavBar extends Component {
  navTo(pathTo) {
  
  }
  render() {
    return (
      <div className="nav-bar">
        <Link 
          to='/calendar'
          className={this.props.currentPage === '/calendar' ? 'nav-bar__active' : ''}
        >
          CALENDAR
        </Link>
        <Link 
          to='/dashboard'
          className={this.props.currentPage === '/dashboard' ? 'nav-bar__active' : ''}
        >
          DASHBOARD
        </Link>
        <Link
          to='/billing'
          className={this.props.currentPage === '/billing' ? 'nav-bar__active' : ''}
       >
          BILLING
        </Link>
      </div>
    )
  }
}

export default NavBar;