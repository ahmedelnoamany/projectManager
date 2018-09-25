import React, { Component } from 'react';
import currentUserQuery from '../../queries/CurrentUser';
import { graphql } from 'react-apollo';

import Header from '../../components/Header';
import NavBar from '../../components/NavBar';

import '../../css/style.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className='container'>
        <Header />
        {!this.props.data.loading && this.props.data.user ? <NavBar currentPage={this.props.location.pathname} /> : ''}
        {this.props.children}
      </div>
    )
  }
}

export default graphql(currentUserQuery)(App);