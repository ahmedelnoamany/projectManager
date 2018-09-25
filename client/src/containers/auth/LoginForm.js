import React, { Component } from 'react';
import AuthForm from './AuthForm';
import loginMutation from '../../mutations/Login';
import { graphql } from 'react-apollo';
import query from '../../queries/CurrentUser';
import { hashHistory } from 'react-router';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: []
    }
  }
  componentWillUpdate(nextProps) {
    if (!this.props.data.user && nextProps.data.user) {
      //redirect to dashboard
      hashHistory.push('/dashboard');
    }
  }
  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    }).catch(res => {
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({ errors });
     });
  }
  render() {
    return (
      <div className="form">
        <h1 className="heading-1 heading-1--white form__heading">Log In</h1>
        <AuthForm 
          onSubmit={ this.onSubmit.bind(this) }
          errors={ this.state.errors }
          title="Log In"
        />
      </div>
    )
  }
}

export default graphql(query)(
graphql(loginMutation)(LoginForm)
);