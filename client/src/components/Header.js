import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/CurrentUser';
import mutation from '../mutations/Logout';
import { hashHistory } from 'react-router';

import AccountOptions from './AccountOptions';
import SearchBar from './SearchBar';
import NotificationManager from './NotificationManager';

class Header extends Component {
  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query }]
    }).then(hashHistory.push('/'));
    
  }
  renderButtons() {
    const { loading, user } = this.props.data;

    if (loading) { return <div />; }

    if (user) {
      return (
        <div className="header-options">
          <SearchBar />
          <NotificationManager />
          <AccountOptions onLogout={this.onLogoutClick.bind(this)} />
        </div>
      )
    } else {
      return(
        <div className="header-options header-options__btn-container">
          <Link to="/login" className="btn__login u-margin-right-small">Login</Link>
          <Link to="/signup" className="btn__main-heading">Sign Up</Link>
        </div>
      )
    }
  }
  render() {
    return (
      <nav>
        <div className="header">
          <Link to="/">
            <h1 className="header__main-heading">Project Manager</h1>
          </Link>
          <div className="header-options">
            {this.renderButtons()}
          </div>
        </div>
      </nav>
    )
  }
}

export default graphql(mutation)(
  graphql(query)(Header)
);