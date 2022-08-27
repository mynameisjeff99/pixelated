import React, { Component } from 'react';
import './App.css';

class LogIn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>User Log In</h1>
        <form>
          <label>
            Username:
            <input type="text" name="username" required="true"/>
          </label>
          <label>
            Password:
            <input type="password" name="password" required="true"/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>User Sign Up</h1>
        <form>
          <label>
            Username:
            <input type="text" name="username" required="true"/>
          </label>
          <label>
            Password:
            <input type="password" name="password" required="true"/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export {LogIn, SignUp};