import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/CurrentUser';
import mutation from '../mutations/Logout';

class Header extends Component {
  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query }]
    });

  }
  renderButtons() {
    const { loading, user } = this.props.data;

    if (loading) { return <div />; }

    if (user) {
      return (
        <div>
          <a onClick={this.onLogoutClick.bind(this)}>Logout</a>
        </div>
      )
    } else {
      return(
        <div>
    
          <Link to="/signup">Sign Up</Link>
      
          <Link to="/login">Login</Link>
      
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