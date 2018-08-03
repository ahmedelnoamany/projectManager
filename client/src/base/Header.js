import React, { Component } from 'react';
import SearchBar from '../components/searchBar';
import NotificationManager from '../components/notificationManager';
import AccountOptions from '../components/accountOptions';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="header__main-heading">Project Manager</h1>
        <div className="header-options">
          <SearchBar />
          <NotificationManager />
          <AccountOptions />
        </div>
      </header>
    )
  }
}