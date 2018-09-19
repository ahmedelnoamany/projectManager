import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  render() {
    return (
      <div>
        <form>
          <div>
            <label>Email</label>
            <input
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div>
            <label>Password</label>
            <input 
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