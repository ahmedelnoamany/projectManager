import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  onSubmit(event) {
    event.preventDefault();

    const { email, password } = this.state;
    this.props.onSubmit({ email, password });
  }
  render() {
    return (
      <div>
        <form onSubmit={ this.onSubmit.bind(this) }>
          <div>
            {/* errors here */}
            {this.props.errors.map(error => <div key={error}>{error}</div>)}
          </div>
          <div>
            <input
              placeholder='Email'
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div>
            <input
              placeholder='Password'
              type='password'
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
      
    )
  }
}
export default AuthForm;