import React, { Component } from 'react';
import AuthForm from './AuthForm';
import { graphql } from 'react-apollo';
import signupMutation from '../../mutations/Signup';
import query from '../../queries/CurrentUser';
import { hashHistory } from 'react-router';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: []
    }
  }
  componentWillUpdate(nextProps) {
    if (!this.props.data.user && nextProps.data.user) {
      hashHistory.push('/dashboard');
    }
  }
  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    }).catch(res => {
      let errors = res.graphQLErrors.map(error => error.message);
      this.setState({ errors });
    })
  }
  render() {
    return (
      <div className="form">
        <h1 className="heading-1 heading-1--white form__heading">Sign Up</h1>
        <AuthForm 
          onSubmit={ this.onSubmit.bind(this) }
          errors={ this.state.errors }
          title="Sign Up"
        />
      </div>
    );
  }
};

export default graphql(query)(
  graphql(signupMutation)(SignupForm)
);