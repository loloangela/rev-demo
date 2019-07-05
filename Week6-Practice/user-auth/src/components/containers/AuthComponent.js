import React, { Component } from "react";
import { relativeTimeRounding } from 'moment';

class AuthComponent extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  login(event){
    event.preventDefault();
  }
  updateVisitor(attr, event) {
    console.log(attr + " == " + event.target.value);
  }
  render() {
    return (
      <div className="container">
        <h1>Login Form</h1>
        <form>
          <label id="usernameLabel">Username</label>
          <input onChange={this.updateVisitor.bind(this, 'username')} className="form-control" type="text" id="usernameInput" required />
          <label>Password</label>
          <input onChange={this.updateVisitor.bind(this, 'password')} className="form-control" type="password" id="passwordInput" required />
          <button onClick={this.login.bind(this)}>Login</button>
        </form>
      </div>

    )
  }
}

export default AuthComponent;