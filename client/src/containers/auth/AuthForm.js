import React, { Component } from 'react';
import { hashHistory } from 'react-router';

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
  handleSecondaryPress() {
    hashHistory.push(this.props.title === 'Log In' ? '/signup' : '/login');
  }
  render() {
    return (
      <form 
        className={"form__auth " + (this.props.errors.length > 0 ? "form__auth--enabled-error" : "")} 
        onSubmit={ this.onSubmit.bind(this) }>
        <div 
          className={"form__auth__input " + (this.props.errors.length > 0 ? "form__auth__input__error" : "form__auth__input__error--disabled")}>
          {/* errors here */}
          {this.props.errors.map(error => <div className="error-text" style={{margin: '0 auto'}}key={error}>{error}</div>)}
        </div>
        <div className="form__auth__input-container">
          <input
            className="form__auth__input--input"
            placeholder='Email'
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            className="form__auth__input--input"
            placeholder='Password'
            type='password'
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />

          <div className="form__auth__input">
            <a className="btn btn__auth btn__auth--left" onClick={ this.handleSecondaryPress.bind(this) }>{this.props.title === 'Log In' ? 'Sign Up' : 'Log In'}</a>

            <button className="btn btn__auth btn__auth--right">{this.props.title}</button>
          </div>
        </div>
        
      </form>
      
    )
  }
}
export default AuthForm;